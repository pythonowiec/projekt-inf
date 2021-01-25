const content = document.getElementById("content");

const image = document.getElementById("bug");

document.addEventListener("DOMContentLoaded", () => {

    content.animate([
       { opacity: 1 } 
    ],
    {
        duration: 1000,
        fill: "forwards"
    }
    )

    bug.animate([
        { transform: 'rotate(360deg)' },
        {opacity: 1}
        
    ],
    {
        duration: 1000,
        fill: "forwards"
    })

});