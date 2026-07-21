function generatePrompt() {

    let genre = document.getElementById("genre").value;
    let mood = document.getElementById("mood").value;
   let instruments = [];

document.querySelectorAll(".instrument-check:checked")
.forEach(item => {

    instruments.push(item.value);

});

let instrument = instruments.join(", ");
    if (instrument === "") {

    instrument = "No instrument selected";

}
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

function exportPrompt() {

    const text = document.getElementById("result").value;

    if (text.trim() === "") {
        alert("Please generate a prompt first!");
        return;
    }

    const blob = new Blob([text], { type: "text/plain" });

    const link = document.createElement("a");

    link.href = URL.createObjectURL(blob);

    link.download = "FaturSky_Music_Prompt.txt";

    document.body.appendChild(link);

    link.click();

    document.body.removeChild(link);

    URL.revokeObjectURL(link.href);
alert("Prompt exported successfully!");
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
document.getElementById("exportBtn")
.addEventListener("click", exportPrompt);
