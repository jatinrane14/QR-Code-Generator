let sub_btn = document.querySelector(".sub-btn");

QRCodeGen = (data) =>{
  var typeNumber = 6;
  var errorCorrectionLevel = "H";
  var qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(data);
  qr.make();
  document.getElementById("placeHolder").innerHTML = qr.createImgTag();
}

sub_btn.addEventListener("click", () => {
    let url = document.getElementsByClassName("input-data")[0].value;
    if (url != "") {
      console.log(url);
      QRCodeGen(url);
    } else {
      alert("Invalid Input! Please Type something");
    }
});
