// MAIN.JS INCLUDES SOME SMALL SCRIPTS THAT THEME DEVELOPER WRITES

document.addEventListener("DOMContentLoaded", function(){

    // JS PLUGIN 01
    // MOUSE ENTER & MOUSE LEAVE EFFECT FOR SITE'S TAGS
    // CLASS USED: .mouseHover .mouseHover--enter .mouseHover--out
    var mouseHover = document.getElementsByClassName("mouseHover")
    for (let i = 0; i < mouseHover.length; i++) {
        
        mouseHover[i].addEventListener("mouseenter", function() {
            console.log("Mouse Enter Event")
            console.log(mouseHover[i])
        // highlight the mouseleave target
        for (let k = 0; k < mouseHover.length; k++) {
            console.log(mouseHover[k])
            mouseHover[k].classList.add("mouseHover--enter");
            mouseHover[k].classList.remove("mouseHover--out")   
        }
            
        }, false); 
        
        mouseHover[i].addEventListener("mouseleave", function() {
            console.log("Mouse Leave Event")
            console.log(mouseHover[i])
        // highlight the mouseleave target
        for (let k = 0; k < mouseHover.length; k++) {
            console.log(mouseHover[k])
            mouseHover[k].classList.add("mouseHover--out");
            mouseHover[k].classList.remove("mouseHover--enter"); 
        }
            
        }, false);      
    }   

}, false)