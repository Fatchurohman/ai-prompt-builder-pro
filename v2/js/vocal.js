const vocalList = [
    {
        gender: "Male",
        type: "Baritone",
        character: "Deep warm baritone male vocal"
    },
    {
        gender: "Male",
        type: "Tenor",
        character: "Powerful emotional tenor male vocal"
    },
    {
        gender: "Male",
        type: "Bass",
        character: "Deep cinematic bass male vocal"
    },
    {
        gender: "Female",
        type: "Soprano",
        character: "Bright expressive female soprano vocal"
    },
    {
        gender: "Female",
        type: "Alto",
        character: "Warm emotional female alto vocal"
    },
    {
        gender: "Female",
        type: "Mezzo Soprano",
        character: "Rich powerful female mezzo vocal"
    }
];const vocalSelect = document.getElementById("vocal");

vocalList.forEach(item => {

    const option = document.createElement("option");

    option.value = item.character;

    option.textContent = item.gender + " - " + item.type;

    vocalSelect.appendChild(option);

});


