import json

# Загрузка данных
with open("../cleaned-lung-cancer-dataset/cleaned_data.json", "r") as f:
    data = json.load(f)

# Категории возрастов
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

# Симптомы
symptoms = [
    "SMOKING", "YELLOW_FINGERS", "ANXIETY", "PEER_PRESSURE", "CHRONIC_DISEASE", "FATIGUE",
    "ALLERGY", "WHEEZING", "ALCOHOL_CONSUMING", "COUGHING", "SHORTNESS_OF_BREATH",
    "SWALLOWING_DIFFICULTY", "CHEST_PAIN"
]

# Преобразуем данные
processed_data = []
for patient in data:
    entry = {
        "age_group": age_group(patient["AGE"]),
        "LUNG_CANCER": 1 if patient["LUNG_CANCER"] == 2 else 0
    }
    for symptom in symptoms:
        entry[symptom] = 1 if patient[symptom] == 2 else 0
    processed_data.append(entry)

# Сохраняем результат
with open("parallel_data.json", "w") as f:
    json.dump(processed_data, f, indent=2)

print("✅ Data for parallel coordinate chart saved to 'parallel_data.json'")
