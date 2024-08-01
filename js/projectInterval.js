projectImg1=document.getElementById("projectImg1");
projectImg2=document.getElementById("projectImg2");
projectImg4=document.getElementById("projectImg4");

setInterval(function () {
    projectImg1.src = projectImg1.src.substring(0, projectImg1.src.length - 5) + ((+projectImg1.src[projectImg1.src.length - 5] +1)%2) + ".png";
    projectImg2.src = projectImg2.src.substring(0, projectImg2.src.length - 5) + ((+projectImg2.src[projectImg2.src.length - 5] +1)%3) + ".png";
    projectImg4.src = projectImg4.src.substring(0, projectImg4.src.length - 5) + ((+projectImg4.src[projectImg4.src.length - 5] +1)%5) + ".png";
}, 3000);
    