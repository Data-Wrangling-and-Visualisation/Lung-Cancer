const svg = d3.select("#sankey-container")
    .append("svg")
    .attr("width", 840)
    .attr("height", 600);

const { sankey, sankeyLinkHorizontal } = d3;

const pastelColors = [
    "#aec6cf", "#fdbf6f", "#c5e384", "#fbb4ae",
    "#b39eb5", "#ffdab9", "#ffd1dc", "#c6e2ff",
    "#d5a6bd", "#e6e6fa", "#fffacd", "#b0e0e6"
];
const color = d3.scaleOrdinal(pastelColors);

function darkenColor(hex, factor = 0.7) {
    const c = d3.color(hex);
    if (c) {
        c.r *= factor;
        c.g *= factor;
        c.b *= factor;
        return c.formatHex();
    }
    return hex;
}

fetch("http://127.0.0.1:5000/sankey_data")
  .then(response => response.json())
  .then(data => {
    const sankeyGenerator = sankey()
        .nodeWidth(20)
        .nodePadding(15)
        .extent([[1, 1], [840 - 1, 600 - 6]]);

    const sankeyData = sankeyGenerator({
        nodes: data.nodes.map(d => Object.assign({}, d)),
        links: data.links.map(d => Object.assign({}, d))
    });

    const nodeColors = {};
    sankeyData.links.forEach(link => {
        const sourceName = link.source.name;
        if (!nodeColors[sourceName]) {
            nodeColors[sourceName] = color(sourceName);
        }
        const targetName = link.target.name;
        if (!nodeColors[targetName]) {
            nodeColors[targetName] = nodeColors[sourceName];
        }
    });

    const linkPaths = svg.append("g")
        .attr("fill", "none")
        .selectAll("path")
        .data(sankeyData.links)
        .join("path")
        .attr("d", sankeyLinkHorizontal())
        .attr("stroke", d => nodeColors[d.source.name])
        .attr("stroke-width", d => Math.max(1, d.width))
        .attr("opacity", 0.5)
        .on("mouseover", function (event, d) {
            d3.select(this)
                .attr("stroke", darkenColor(nodeColors[d.source.name]))
                .attr("opacity", 1);
        })
        .on("mouseout", function (event, d) {
            d3.select(this)
                .attr("stroke", nodeColors[d.source.name])
                .attr("opacity", 0.5);
        });

    svg.append("g")
        .selectAll("rect")
        .data(sankeyData.nodes)
        .join("rect")
        .attr("x", d => d.x0)
        .attr("y", d => d.y0)
        .attr("height", d => d.y1 - d.y0)
        .attr("width", d => d.x1 - d.x0)
        .attr("fill", d => darkenColor(nodeColors[d.name] || "#ccc"))
        .attr("stroke", "none");

    svg.append("g")
        .style("font", "14px sans-serif")
        .selectAll("text")
        .data(sankeyData.nodes)
        .join("text")
        .attr("x", d => d.x0 - 6)
        .attr("y", d => (d.y1 + d.y0) / 2)
        .attr("dy", "0.35em")
        .attr("text-anchor", "end")
        .text(d => d.name)
        .filter(d => d.x0 < 480)
        .attr("x", d => d.x1 + 6)
        .attr("text-anchor", "start");
});
