// ======================================
// AI PROMPT BUILDER PRO
// Version 1.1 Stable
// Developer : Bro Fatur
// Guided by ChatGPT
// ======================================

// ======================================
// AMBIL ELEMEN HTML
// ======================================

const tempatGenre = document.getElementById("genreContainer");
const tempatMood = document.getElementById("moodContainer");
const tempatInstrument = document.getElementById("instrumentContainer");
const tempatSound =
document.getElementById("soundCharacterContainer");
const tombol = document.getElementById("generateBtn");
const hasil = document.getElementById("hasil");

// ======================================
// FUNGSI MEMBUAT CHECKBOX
// ======================================

function buatCheckbox(data, container, className) {

    data.forEach(function(item) {

        container.innerHTML += `
            <label class="option-item">
                <input type="checkbox"
                       class="${className}"
                       value="${item}">
                ${item}
            </label>
        `;

    });

}

// ======================================
// TAMPILKAN DATA
// ======================================

buatCheckbox(genreList, tempatGenre, "genre");
buatCheckbox(moodList, tempatMood, "mood");
buatCheckbox(instrumentList, tempatInstrument, "instrument");
buatCheckbox(soundCharacterList, tempatSound, "sound");
// ======================================
// GENERATE PROMPT
// ======================================

tombol.addEventListener("click", function () {

    const genreDipilih = [];
    const moodDipilih = [];
    const instrumentDipilih = [];
    const soundDipilih = [];

    document.querySelectorAll(".genre").forEach(function(item){

        if(item.checked){
            genreDipilih.push(item.value);
        }

    });
    document.querySelectorAll(".sound").forEach(function(item){

    if(item.checked){
        soundDipilih.push(item.value);
    }

});

    document.querySelectorAll(".mood").forEach(function(item){

        if(item.checked){
            moodDipilih.push(item.value);
        }

    });

    document.querySelectorAll(".instrument").forEach(function(item){

        if(item.checked){
            instrumentDipilih.push(item.value);
        }

    });

    if(genreDipilih.length === 0){

        hasil.innerHTML =
        "⚠ Silakan pilih minimal satu Genre.";

        return;

    }

    let prompt = "";

    prompt += "🎵 Genre: ";
    prompt += genreDipilih.join(", ");

    

    if(moodDipilih.length > 0){

    prompt += "\n\n😊 Mood :\n";

    prompt += moodDipilih.join(", ");

}

    if(instrumentDipilih.length > 0){

    prompt += "\n🎸 Instrument: ";

    prompt += instrumentDipilih.join(", ");

}
if(soundDipilih.length){

    prompt += ", with " + soundDipilih.join(", ") + " sound character";

}
if(soundDipilih.length > 0){

    prompt += "\n🎨 Sound Character: ";

    prompt += soundDipilih.join(", ");

}
    prompt +=
"\n\n--------------------------------";

prompt +=
"\n\nCreate a professional music track featuring ";

prompt += genreDipilih.join(", ");

if(moodDipilih.length){

    prompt +=
    " with " + moodDipilih.join(", ") + " mood";

}

if(instrumentDipilih.length){

    prompt +=
    ", using " + instrumentDipilih.join(", ");

}

prompt +=
", professional studio quality, crystal clear mix, wide stereo image, deep bass, radio-ready mastering.";

hasil.innerText = prompt;
});

// ======================================
// COPY PROMPT
// ======================================

const copyBtn = document.getElementById("copyBtn");

copyBtn.addEventListener("click", function(){

    navigator.clipboard.writeText(hasil.innerText);

    alert("✅ Prompt berhasil disalin!");

});