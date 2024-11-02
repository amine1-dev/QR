function generateQR() {
  const cr = document.getElementById("qr");
  const text = document.getElementById("text").value;

  
  cr.innerHTML = "";

  
  if (text) {
      new QRCode(cr, {
          text: text,
          width: 200,
          height: 200,
          
          
          
      });
      console.log("ok");
  } else {
        cr.innerHTML = "Please enter a valid text";
  }
}
