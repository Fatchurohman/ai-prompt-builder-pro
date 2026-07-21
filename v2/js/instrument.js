const instrumentList = [

"Select Instrument",

// Modern Instruments
"Piano",
"Electric Piano",
"Acoustic Guitar",
"Electric Guitar",
"Bass Guitar",
"Drum Kit",
"Synth Pad",
"Synth Lead",
"Organ",

// Orchestra Instruments
"Violin",
"Viola",
"Cello",
"Double Bass",
"String Ensemble",
"Trumpet",
"Saxophone",
"Clarinet",
"Flute",
"Oboe",
"French Horn",

// Percussion
"Conga",
"Bongo",
"Tambourine",
"Shaker",
"Hand Percussion",

// Indonesia - Jawa
"Kendang Jawa",
"Gamelan Jawa",
"Gong Ageng",
"Bonang",
"Saron",
"Gender",
"Slenthem",
"Gambang",
"Suling Jawa",

// Indonesia - Sunda
"Angklung",
"Kendang Sunda",
"Kacapi Sunda",
"Suling Sunda",
"Calung",

// Indonesia - Bali
"Gamelan Bali",
"Gangsa Bali",
"Rindik Bali",
"Kendang Bali",
"Ceng-ceng",

// Indonesia - Sumatera
"Talempong Minangkabau",
"Saluang",
"Gondang Batak",
"Taganing",
"Serunai Melayu",

// Indonesia - Nusantara
"Sasando",
"Tifa Papua",
"Kolintang",
"Rebana",
"Gambus",

// World Instruments
"Sitar India",
"Tabla",
"Dhol",
"Oud",
"Duduk",
"Shamisen",
"Erhu"

];

const instrumentContainer = document.getElementById("instrumentList");


instrumentList.forEach(item => {

    const label = document.createElement("label");

    const checkbox = document.createElement("input");

    checkbox.type = "checkbox";

    checkbox.value = item;

    checkbox.className = "instrument-check";


    label.appendChild(checkbox);

    label.appendChild(
        document.createTextNode(" " + item)
    );


    instrumentContainer.appendChild(label);

});
