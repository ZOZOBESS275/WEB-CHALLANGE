var images = [
    'tennessee-titans-logo@logotyp.us.svg',
    'kansas-city-chiefs-logo@logotyp.us.svg',
    'buffalo-bills-logo@logotyp.us.svg',
    'baltimore-ravens-logo@logotyp.us.svg',
    'atlanta-falcons-logo@logotyp.us.svg',
    'arizona-cardinals-logo@logotyp.us.svg',
    '49ers-logo@logotyp.us.svg'

];

let image = document.getElementById("image");
setInterval(function(){
    let random=Math.floor(Math.random()* 7);
    image.src= images[random];
},1000);