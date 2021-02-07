const content = document.getElementById("content");

const image = document.getElementById("image");

var snd = new Audio("plik.mp3");
snd.loop = true;
snd.autoplay = true;
snd.volume = 0.3;


var snd2 = new Audio("plik2.mp3");
snd2.loop = true;
snd2.autoplay = true;
snd2.volume = 0.35;



document.addEventListener("DOMContentLoaded", () => {

    content.animate([
       { opacity: 1 } 
    ],
    {
        duration: 1000,
        fill: "forwards"
    }
    );

    image.animate([
        { transform: 'rotate(360deg)' },
        {opacity: 1}
        
    ],
    {
        duration: 1000,
        fill: "forwards"
    }
    );

    table.animate([
        { opacity: 1 } 
     ],
     {
         duration: 1000,
         fill: "forwards"
     }
     );

});