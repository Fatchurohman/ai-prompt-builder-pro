const genreList = [

"Select Genre",

"Pop",
"Pop Indonesia",
"Rock",
"Alternative Rock",
"Indie Pop",
"RnB",
"Soul",
"Blues",
"Jazz",
"Funk",
"Disco",

"EDM",
"House",
"Deep House",
"Future Bass",
"Trance",
"Techno",
"Dubstep",
"Drum & Bass",
"Drift Phonk",

"Hip Hop",
"Trap",
"Boom Bap",
"Rap",

"Reggae",
"Ska",

"Country",
"Folk",
"Acoustic",
"Bluegrass",

"Classical",
"Orchestral",
"Cinematic",
"Epic",
"Ambient",

"Lo-fi Hip Hop",

"Bollywood",

"Nasheed",
"Qawwali",

"Dangdut",
"Dangdut Koplo",
"Dangdut Jawa",
"Dangdut Remix",
"Campursari"

];

const genreSelect = document.getElementById("genre");

genreList.forEach(item=>{

const option=document.createElement("option");

option.value=item;

option.textContent=item;

genreSelect.appendChild(option);

});
