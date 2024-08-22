let getColor = ()=>{

   let randomNumber = Math.floor (Math.random() * 16777215);
   console.log(randomNumber)
   // here using (16), beacuse here want me "hex" COde

   let randomCode = "#" + randomNumber.toString(16);
   // console.log(randomCode)
   // console.log(randomNumber , randomCode);

   document.body.style.backgroundColor = randomCode;

   document.getElementById("Colour-Code").innerText = randomCode;


   // this is use for Automatically copy after click

   navigator.clipboard.writeText(randomCode);

}

// event call

document.getElementById("btn").addEventListener("click" , getColor);


// initial Call
getColor()