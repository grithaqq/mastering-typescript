interface StringArray {
    [index: number]: string
}

const karasuno_team: StringArray = ['Kageyama', "Hinata", "Nishinoya", "Tanaka", "Asahi", "Tsukisima"]

console.log(karasuno_team[0])
console.log(karasuno_team[1])
console.log(karasuno_team[2])
console.log(karasuno_team[3])
console.log(karasuno_team[4])
console.log(karasuno_team[5])

interface StringDictionary {
    [key: string]: string
}

const full_name: StringDictionary = {
    first_name: "Kageyama",
    last_name: "Tobiyo"
}

console.log(full_name['first_name'])
console.log(full_name['last_name'])