projectImg1=document.getElementById("projectImg1");
projectImg2=document.getElementById("projectImg2");



projectImg1 = document.getElementById("projectImg1");
projectImg2 = document.getElementById("projectImg2");
setInterval(function () {
    projectImg1.src = "images/project/linkkit-2.png";
    projectImg2.src = "images/project/platform-2.png";
    setTimeout(function () {
        projectImg1.src = "images/project/linkkit-1.png";
        projectImg2.src = "images/project/platform-1.png";
    }, 2000); // Move this setTimeout inside the first setTimeout
}, 4000); // Adjust the interval to 2000 milliseconds (2 seconds) to match the combined setTimeouts
    