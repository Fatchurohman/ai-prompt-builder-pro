const moodList=[

"Select Mood",

"Happy",
"Sad",
"Romantic",
"Melancholic",
"Energetic",
"Powerful",
"Emotional",
"Hopeful",
"Inspirational",
"Epic",
"Dark",
"Mysterious",
"Dreamy",
"Relaxing",
"Peaceful",
"Spiritual",
"Uplifting"

];

const moodSelect=document.getElementById("mood");

moodList.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

moodSelect.appendChild(option);

});
