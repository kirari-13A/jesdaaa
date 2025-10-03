
const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const container= document.querySelector(".container");
let yesattempt = 0;
let noattempt = 0;

let userInput1 = window.alert("Note: Click Yes for 2 times😍");
let userInput2 = window.alert("Click `No` if you want. ")
button1.addEventListener("click", ()=>
{
    yesattempt++;
    if(yesattempt===1)
    {
        button1.textContent = "Love U2💖";
    }
    else if(yesattempt ===2)
    {   
  container.style.backgroundImage = "url('photo_2025-10-04_01-20-41.jpg')";
   container.innerHTML = ""; // remove all the element when it showed second image.
    }
}
);
button2.addEventListener("click", () =>
{
   noattempt++;
   if(noattempt ===1)
   {
    button2.style.opacity = 0.8;
   }
   else if(noattempt===2)
   {
    button2.style.opacity = 0.4;
   }
   else if(noattempt===3)
   {
    button2.style.opacity=0;
   }
})

