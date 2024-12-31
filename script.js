

document.getElementById("okClickMe").addEventListener("click", function() {
    const name = document.getElementById("name").value.trim();
    const photoInput = document.getElementById("photo");
    const luckyNumber = parseInt(document.getElementById("luckyNumber").value);
  
    if (!name || !photoInput.files[0] || isNaN(luckyNumber) || luckyNumber < 1 || luckyNumber > 5) {
      alert("Please enter your NAME or PHOTO \nand choose one lucky number between 1 to 5 !");
      return;
    }
  
  
    const shayariArray = [
      "🌟🎉पुराना साल सबसे हो रहा है दूर क्या करें यही है कुदरत का दस्तूर पुरानी यादें सोच कर उदास ना होना तुम, नया साल आया है चलो धूम मचा ले धूम मचा ले धूम.🎉🌟",
      "🌟🎉नया सवेरा नयी किरण के साथ नया दिन एक प्यारी सी मुस्कान के साथ, आपको नव वर्ष कि हार्दिक शुभकामनाये ढेर सारे दुआओं के साथ🎉🌟",
      "🌟🎉गुल ने गुलशन से गुलफाम भेजा है सितारों ने आसमान से सलाम भेजा है मुबारक हो आपको ये साल नया हमने दिल से पैगाम भेजा है🎉🌟",
      "🌟🎉सोचा किसी अपने से बात करें, अपने किसी खास को याद करें, किया जो फैसला नए साल की शुभकामनायें देने का, दिल ने कहा क्यों ना शुरुआत आप से ही करें।🎉🌟",
      "🌟🎉सदा दूर रहो ग़म की परछाइयों से सामना न हो कभी तन्हाईयों से हर अरमान हर ख्वाब पूरा हो आपका, यही दुआ है दिल की गहराइयों से नव वर्ष की हार्दिक शुभकामनायें🎉🌟"
    ];
  
    // Hide the user card
    document.getElementById("userCard").style.display = "none";
  
    // Display Shayari
    const shayariElement = document.getElementById("shayari");
    shayariElement.textContent = shayariArray[luckyNumber - 1];
  
    // Show Date and Heart-Shaped Photo
    let time = new Date();
    let t = time.getHours();
     let nam = document.querySelector("#name").value;
     let greet;
     if(t <= 12 ){
      greet = "Good Morning "
     }if(t > 12 && t <= 18 ){
      greet = "Good After noon ";
     }
     else{
      greet = "Good Night ";
     }
     const greetMsg = document.querySelector("#nameGreet");
     greetMsg.innerText = `Happy new year and ${greet} ${nam} Ji, 🤗 \n We wish you and your family a very Happy New Year! 👨‍👩‍👧‍👧`;

    
    const reader = new FileReader();
    reader.onload = function (e) {
      const heartPhoto = document.getElementById("heartPhoto");
      heartPhoto.innerHTML = `<img src="${e.target.result}" alt="User Photo">`;
    };
    reader.readAsDataURL(photoInput.files[0]);
  
    // Show Result
    document.getElementById("result").style.display = "block";
  });
  