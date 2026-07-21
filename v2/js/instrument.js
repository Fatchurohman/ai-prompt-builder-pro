const instrumentList = [

"Select Instrument",

// Modern
"Piano",
"Acoustic Guitar",
"Electric Guitar",
"Bass Guitar",
"Drum Kit",

// Orchestra
"Violin",
"Cello",
"String Ensemble",
"Flute",
"Saxophone",

// Indonesia
"Kendang Jawa",
"Gamelan Jawa",
"Suling Jawa",
"Bonang",
"Saron",
"Angklung",
"Kacapi Sunda",
"Rindik Bali",
"Kolintang",
"Tifa Papua",
"Sasando"

];

const instrumentSelect=document.getElementById("instrument");

instrumentList.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

instrumentSelect.appendChild(option);

});
