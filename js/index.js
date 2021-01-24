const content = document.getElementById("content")

document.addEventListener("DOMContentLoaded", () => {

    content.animate([
       { opacity: 1 } 
    ],
    {
        duration: 1000,
        fill: "forwards"
    }
    )

});