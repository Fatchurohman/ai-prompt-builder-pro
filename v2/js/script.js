function generatePrompt() {

    let genre = document.getElementById("genre").value;
    let mood = document.getElementById("mood").value;
    let instrument = document.getElementById("instrument").value;
    let sound = document.getElementById("sound").value;
    let vocal = document.getElementById("vocal").value;
    let bpm = document.getElementById("bpm").value;


    let prompt = 
`Genre: ${genre}

Mood: ${mood}

Instrument: ${instrument}

Sound Character: ${sound}

Vocal Style: ${vocal}

Tempo: ${bpm} BPM

Professional studio production, 
high quality recording, clear vocal presence, 
wide stereo image, deep bass, balanced mixing, 
radio ready mastering.`;

    
    document.getElementById("result").value = prompt;

    
    updateCounter();
}


function copyPrompt() {

    let result = document.getElementById("result");

    result.select();
    result.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(result.value);

    alert("Prompt copied!");
}



function clearPrompt() {

    document.getElementById("result").value = "";

    updateCounter();
}


function updateCounter(){

    let text = document.getElementById("result").value;

    document.getElementById("counter").innerHTML =
    text.length + " / 1000 characters";
document.getElementById("generateBtn")
.addEventListener("click", generatePrompt);

document.getElementById("copyBtn")
.addEventListener("click", copyPrompt);

document.getElementById("clearBtn")
.addEventListener("click", clearPrompt);
}
document.getElementById("generateBtn")
.addEventListener("click", generatePrompt);

document.getElementById("copyBtn")
.addEventListener("click", copyPrompt);

document.getElementById("clearBtn")
.addEventListener("click", clearPrompt);
