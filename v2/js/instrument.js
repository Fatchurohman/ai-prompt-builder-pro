const instrumentList=[

"Select Instrument",

"Piano",
"Acoustic Guitar",
"Electric Guitar",
"Bass Guitar",
"Ukulele",

"Violin",
"Cello",
"Orchestra Strings",

"Flute",
"Saxophone",
"Trumpet",

"Kendang",
"Gamelan",
"Seruling Bambu",

"Drums",
"808 Bass",

"Synth",
"Pad",
"Arpeggiator"

];

const instrumentSelect=document.getElementById("instrument");

instrumentList.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

instrumentSelect.appendChild(option);

});
