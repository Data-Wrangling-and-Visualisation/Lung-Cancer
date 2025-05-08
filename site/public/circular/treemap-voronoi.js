// Set canvas size and radius for the circular clip area
const width = 700;
const radius = width / 2;

// Create the base SVG and append a <g> element where everything will go
const svg = d3.select("#chart")
  .append("svg")
  .attr("width", width)
  .attr("height", width)
  .append("g"); // I keep the group untransformed; I’ll shift paths later manually

// Set up the tooltip container
const tooltip = d3.select("#tooltip");

// Load the cleaned lung cancer dataset
d3.json("cleaned_data.json").then(data => {

  // This helper function puts age into groups
  const getAgeGroup = age => {
    if (age < 50) return "<50";
    if (age < 60) return "50-59";
    if (age < 70) return "60-69";
    return "70+";
  };

  // These are the symptoms I care about showing in the treemap
  const symptoms = [
    "COUGHING", "WHEEZING", "ANXIETY",
    "CHEST_PAIN", "FATIGUE", "SHORTNESS_OF_BREATH",
    "YELLOW_FINGERS", "ALLERGY", "SWALLOWING_DIFFICULTY"
  ];

  // Gender is stored as 1/2, so I map it to labels
  const genders = { 1: "Male", 2: "Female" };

  // Start building a hierarchical structure: Gender → Age Group → Symptoms
  const hierarchy = { name: "root", children: [] };

  // Iterate over each row in the dataset and group it accordingly
  data.forEach(row => {
    const gender = genders[row.GENDER];
    const ageGroup = getAgeGroup(row.AGE);

    // Create Gender node if missing
    let genderNode = hierarchy.children.find(c => c.name === gender);
    if (!genderNode) {
      genderNode = { name: gender, children: [] };
      hierarchy.children.push(genderNode);
    }

    // Create Age Group node under Gender if missing
    let ageNode = genderNode.children.find(c => c.name === ageGroup);
    if (!ageNode) {
      ageNode = { name: ageGroup, children: [] };
      genderNode.children.push(ageNode);
    }

    // For each symptom marked "1" (yes), add it to the current path
    symptoms.forEach(symptom => {
      if (row[symptom] === 1) {
        let symNode = ageNode.children.find(c => c.name === symptom);
        if (!symNode) {
          symNode = { name: symptom, value: 0 };
          ageNode.children.push(symNode);
        }
        symNode.value += 1;
      }
    });
  });

  // Convert the nested structure into a D3 hierarchy and sum values at the leaves
  const root = d3.hierarchy(hierarchy).sum(d => d.value || 0);

  // Define a circle-shaped clip area for the Voronoi layout
  const clip = d3.range(0, 2 * Math.PI, Math.PI / 90).map(a => [
    radius + radius * Math.cos(a),
    radius + radius * Math.sin(a)
  ]);

  // Initialize the Voronoi treemap and apply the circular clip
  const voronoiTreemap = d3.voronoiTreemap().clip(clip);
  voronoiTreemap(root); // Actually compute the polygons

  // I define age shade levels (0-1) to interpolate colors within gender
  const ageShades = {
    "<50": 0.3,
    "50-59": 0.45,
    "60-69": 0.6,
    "70+": 0.75,
  };

  // This function gives each polygon its color, depending on gender and age group
  const color = (d) => {
    const gender = d.ancestors()[2]?.data.name;
    const ageGroup = d.ancestors()[1]?.data.name;

    if (gender === "Female") {
      return d3.interpolateReds(ageShades[ageGroup]);
    }
    if (gender === "Male") {
      return d3.interpolateBlues(ageShades[ageGroup]);
    }
    return "#ccc"; // fallback color
  };

  // Draw the Voronoi cells (the actual treemap)
  svg.selectAll("path")
    .data(root.leaves())
    .enter()
    .append("path")
    // Use a smooth closed curve to make the shapes flowy and organic
    .attr("d", d => {
      const line = d3.line()
        .curve(d3.curveCatmullRomClosed); // This is what makes them pretty
      return line(d.polygon);
    })
    // Manually center the entire group
    .attr("transform", `translate(${width / 2 - radius}, ${width / 2 - radius})`)
    .attr("fill", d => color(d))
    .attr("stroke", "#222")
    .attr("stroke-width", 0.5)
    // When I hover: zoom a bit and update the tooltip
    .on("mouseover", (event, d) => {
      d3.select(event.currentTarget)
        .attr("stroke-width", 2)
        .attr("stroke", "#111")
        .raise() // bring to front
        .transition().duration(150)
        .attr("transform", `translate(${width / 2 - radius}, ${width / 2 - radius}) scale(1.03)`);

      tooltip.transition().duration(200).style("opacity", .9);
      tooltip.html(
        `<b>${d.data.name}</b><br>
         Gender: ${d.ancestors()[2]?.data.name}<br>
         Age Group: ${d.ancestors()[1]?.data.name}<br>
         Count: ${d.value}`
      )
        .style("left", (event.pageX + 5) + "px")
        .style("top", (event.pageY - 28) + "px");
    })
    // On mouse out: reset styling and hide tooltip
    .on("mouseout", (event, d) => {
      d3.select(event.currentTarget)
        .transition().duration(150)
        .attr("transform", `translate(${width / 2 - radius}, ${width / 2 - radius}) scale(1)`)
        .attr("stroke-width", 0.5)
        .attr("stroke", "#222");

      tooltip.transition().duration(500).style("opacity", 0);
    });

  // LEGEND 

  // Create a vertical legend on the left for color interpretation
  const legend = d3.select("#legend")
    .append("svg")
    .attr("width", 160)
    .attr("height", 300);

  const boxSize = 18;
  const rowSpacing = 28;

  // Pre-build colors and labels for Female
  const femaleShades = Object.entries(ageShades).map(([age, shade], i) => ({
    label: `Age ${age}`,
    color: d3.interpolateReds(shade),
    x: 10,
    y: 30 + i * rowSpacing
  }));

  // Same for Male
  const maleShades = Object.entries(ageShades).map(([age, shade], i) => ({
    label: `Age ${age}`,
    color: d3.interpolateBlues(shade),
    x: 10,
    y: 170 + i * rowSpacing
  }));

  // Female section title
  legend.append("text")
    .attr("x", 10)
    .attr("y", 20)
    .text("Female")
    .style("font-weight", "bold")
    .style("font-size", "14px")
    .attr("fill", "#e91e63");

  // Female color boxes + age labels
  legend.selectAll("rect.female")
    .data(femaleShades)
    .enter()
    .append("rect")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("width", boxSize)
    .attr("height", boxSize)
    .attr("fill", d => d.color)
    .attr("stroke", "#333");

  legend.selectAll("text.female")
    .data(femaleShades)
    .enter()
    .append("text")
    .attr("x", d => d.x + boxSize + 5)
    .attr("y", d => d.y + 14)
    .text(d => d.label)
    .style("font-size", "12px");

  // Male section title
  legend.append("text")
    .attr("x", 10)
    .attr("y", 160)
    .text("Male")
    .style("font-weight", "bold")
    .style("font-size", "14px")
    .attr("fill", "#2196f3");

  // Male color boxes + labels
  legend.selectAll("rect.male")
    .data(maleShades)
    .enter()
    .append("rect")
    .attr("x", d => d.x)
    .attr("y", d => d.y)
    .attr("width", boxSize)
    .attr("height", boxSize)
    .attr("fill", d => d.color)
    .attr("stroke", "#333");

  legend.selectAll("text.male")
    .data(maleShades)
    .enter()
    .append("text")
    .attr("x", d => d.x + boxSize + 5)
    .attr("y", d => d.y + 14)
    .text(d => d.label)
    .style("font-size", "12px");
});
