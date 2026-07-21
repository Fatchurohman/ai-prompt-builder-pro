const bpmList = [
    60,
    70,
    80,
    90,
    100,
    110,
    120,
    128,
    140,
    160
];
const bpmSelect = document.getElementById("bpm");

bpmList.forEach(item => {

    const option = document.createElement("option");

    option.value = item;

    option.textContent = item;

    bpmSelect.appendChild(option);

});
