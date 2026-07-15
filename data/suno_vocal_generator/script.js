function generatePrompt() {

    let gender = document.getElementById("gender").value;
    let type = document.getElementById("type").value;
    let maturity = document.getElementById("maturity").value;
    let tone = document.getElementById("tone").value;
    let texture = document.getElementById("texture").value;
    let emotion = document.getElementById("emotion").value;


    const data = {

        gender: {
            male: "male vocal",
            female: "female vocal"
        },

        type: {
            baritone: "baritone",
            tenor: "tenor",
            bass: "deep bass",
            alto: "alto",
            soprano: "soprano"
        },

        maturity: {
            youthful: "youthful vocal character",
            mature: "mature vocal character",
            seasoned: "seasoned experienced voice",
            vintage: "vintage classic vocal character"
        },

        tone: {
            warm: "warm rich tone",
            bright: "bright clear tone",
            deep: "deep resonant tone",
            clear: "crystal clear tone"
        },

        texture: {
            smooth: "smooth vocal texture",
            husky: "slightly husky texture",
            breathy: "soft breathy texture",
            powerful: "powerful vocal texture"
        },

        emotion: {
            romantic: "tender emotional delivery",
            sad: "heartfelt melancholic expression",
            powerful: "powerful passionate delivery",
            spiritual: "sincere spiritual expression"
        }
    };


    let prompt = 
"Professional vocal performance, " +
data.maturity[maturity] + ", " +
data.tone[tone] + ", " +
data.type[type] + " " +
data.gender[gender] + ", " +
data.texture[texture] + ", " +
data.emotion[emotion] +
", rich chest resonance, natural vibrato, expressive phrasing, realistic breathing, subtle vocal layers, professional studio recording";
document.getElementById("result").value = prompt;

}



function copyPrompt() {

    let text = document.getElementById("result");

    text.select();
    text.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(text.value);

    alert("Prompt copied!");
}
function resetForm() {

    document.getElementById("gender").selectedIndex = 0;
    document.getElementById("type").selectedIndex = 0;
    document.getElementById("maturity").selectedIndex = 0;
    document.getElementById("tone").selectedIndex = 0;
    document.getElementById("texture").selectedIndex = 0;
    document.getElementById("emotion").selectedIndex = 0;

    document.getElementById("result").value = "";

}