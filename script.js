const sound = document.getElementById("soundEffect")

let id = null
const element = document.getElementById("heading-Text")
let pos = 0
clearInterval(id)
id = setInterval(frame, 5)
function frame() 
{
    if (pos == 40) 
    {
      clearInterval(id);

      //for logo  
      let id1 = null
      const element1 = document.getElementById("animiAdv")
      let pos1 = 0
      clearInterval(id1)
      id1 = setInterval(frame1, 10)
      
      function frame1()
      {
          if (pos1 == 30) 
          {
            clearInterval(id1);
            sound.autoplay = true;
          } 
          else 
          {
            //position animation
            pos1++;  
            element1.style.left = pos1 + "%"
          }
      }
      
    } 
    else 
    {
      pos++;  
      element.style.left = pos + "%"
    }
}

document.addEventListener('click', musicPlay);
function musicPlay() {
    document.getElementById('soundEffect').play();
    document.getElementById('backgroundMusic').play();
    document.removeEventListener('click', musicPlay);

}
