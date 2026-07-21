const soundList = [
    "Warm Analog Sound",
    "Modern Digital Production",
    "Cinematic Atmosphere",
    "Deep Bass Powerful",
    "Crystal Clear Vocal",
    "Vintage 80s Recording",
    "Live Concert Feel",
    "Dark Moody Sound",
    "Epic Orchestral Sound",
    "Radio Ready Professional Mix"
];

const soundSelect = document.getElementById("sound");

soundList.forEach(item => {

    const option = document.createElement("option");

    option.value = item;

    option.textContent = item;

    soundSelect.appendChild(option);

});
