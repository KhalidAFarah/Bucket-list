var i = 0;

var imageTag = document.getElementsByClassName("slideShow");
var imageTekst = document.getElementsByClassName("slideShowText");
var sectionBox = document.getElementsByClassName("sectionBox");

//nå siden åpnes starter slideshowet vis javascript er på skal dette starte

sectionBox.style.display = "none";
imageTag.style.display = "block";
imageTekst.style.display = "block";
var interval;
if(imageTag.value == "app"){
    NewAppPictures();
    interval = setInterval(NewAppPictures, 10000); // runs the app slideshow every 10 seconds
}else{
    NewAppPictures();
    interval = setInterval(NewMachinePictures, 10000); // runs the machine slideshow every 10 seconds

}



function NewAppPictures(){
    
    var images = [{
    Img: "../Pictures/appHome",
    info: "tekst som skal forklare bildet",
    altTekst : "les navnet",
    Title : "hover teksten"},{
        
    Img: "../Pictures/appPoints",
    info: "tekst som skal forklare bildet",
    altTekst : "les navnet",
    Title : "hover teksten"}]; //app bilder
        
    imageTag.src = images[i].Img;
    imageTag.tabIndex = "0";
    imageTag.alt = images[i].altTekst; //alt er kanskje skrevet feil
    imageTag.title = images[i].Title;
    imageTekst.innerHTML = images[i].info;
    
    i++;
    if(i > images.length){//makes the slideshow continuous
        i = 0;
    }
}
function NewMachinePictures(){
    
    var images = [{
    Img: "../Pictures/appHome",
    info: "tekst som skal forklare bildet",
    altTekst : "les navnet",
    Title : "hover teksten"},{
        
    Img: "../Pictures/appPoints",
    info: "tekst som skal forklare bildet",
    altTekst : "les navnet",
    Title : "hover teksten"}]; //machine bilder
    
    imageTag.src = images[i].Img;
    imageTag.tabIndex = "0";
    imageTag.alt = images[i].altTekst; //alt er kanskje     skrevet feil
    imageTag.title = images[i].Title;
    imageTekst.innerHTML = images[i].info;
    
    i++;
    if(i > images.length){//makes the slideshow continuous
        i = 0;
    }
}

function back(){
    i -= 1;
    if(imageTag.value == "app"){
        interval.clear();
        interval = setInterval(NewAppPictures, 10000);
    }else{
        interval.clear();
        interval = setInterval(NewMachinePictures, 10000);
    }
}
function next(){
    i += 1;
    if(imageTag.value == "app"){
        interval.clear();
        interval = setInterval(NewAppPictures, 10000);
    }else{
        interval.clear();
        interval = setInterval(NewMachinePictures, 10000);
    }
}