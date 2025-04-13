import json

# Load the cleaned dataset from a JSON file.

with open("../cleaned-lung-cancer-dataset/cleaned_data.json", "r") as f:
    data = json.load(f)

# Define a function to categorize patients into age groups based on their numerical age.
def age_group(age):
    if age < 40:
        return "30-39"
    elif age < 50:
        return "40-49"
    elif age < 60:
        return "50-59"
    elif age < 70:
        return "60-69"
    elif age < 80:
        return "70-79"
    else:
        return "80-89"

# List of symptoms to be analyzed.
# Each symptom is a binary indicator where 2 indicates 'Yes' and 1 indicates 'No' in the original dataset.
symptoms = [
    "SMOKING", "YELLOW_FINGERS", "ANXIETY", "PEER_PRESSURE", "CHRONIC_DISEASE", "FATIGUE",
    "ALLERGY", "WHEEZING", "ALCOHOL_CONSUMING", "COUGHING", "SHORTNESS_OF_BREATH",
    "SWALLOWING_DIFFICULTY", "CHEST_PAIN"
]

# Create a new list to store processed patient records in a simplified format.
# Each record includes:
# - the patient's age group,
# - a binary indicator for lung cancer diagnosis (1 if diagnosed, 0 otherwise),
# - binary values (0 or 1) for each symptom.
processed_data = []
for patient in data:
    entry = {
        "age_group": age_group(patient["AGE"]),
        # Convert the diagnosis label: 2 (Yes) becomes 1, 1 (No) becomes 0
        "LUNG_CANCER": 1 if patient["LUNG_CANCER"] == 2 else 0
    }
    # Convert each symptom from the original encoding to binary (1 for presence, 0 for absence)
    for symptom in symptoms:
        entry[symptom] = 1 if patient[symptom] == 2 else 0
    processed_data.append(entry)

# Save the transformed dataset into a new JSON file.
# This file can be used as input for data visualization components (e.g., parallel coordinate charts).
with open("parallel_data.json", "w") as f:
    json.dump(processed_data, f, indent=2)

# Notify that the data has been successfully processed and saved.
print("✅ Data for parallel coordinate chart saved to 'parallel_data.json'")
