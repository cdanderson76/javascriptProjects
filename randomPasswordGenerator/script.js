const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let pass1 = document.getElementById('password1');
let pass2 = document.getElementById('password2');

let copyText = document.getElementById('password1');



function generate() {
  pass1.textContent = ' ';
  pass2.textContent = ' ';
  for(let i = 0; i < 15; i++) {
    let rand = Math.floor(Math.random() * characters.length);
    let rand2 = Math.floor(Math.random() * characters.length);
    pass1.textContent += characters[rand];
    pass2.textContent += characters[rand2];
  }
}
