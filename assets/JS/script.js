let sub_btn = document.querySelector(".sub-btn");
let ui = document.querySelector("#placeHolder");
QRCodeGen = (tn,data) =>{
  var typeNumber = tn;
  var errorCorrectionLevel = "H";
  var qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(data);
  qr.make();
  document.getElementById("placeHolder").innerHTML = qr.createImgTag();
}
sub_btn.addEventListener("click", () => {

    let url = document.getElementsByClassName("input-data")[0].value;
    if (url != "") {
      document.getElementById("placeHolder").innerHTML = null
      if (url.length<=57) {
        console.log(url.length);
        QRCodeGen(6,url.length);
        console.log("QR Code is generated Succefully!!! ")
      }
      else if(url.length<=113){
        console.log(url.length);
        QRCodeGen(12,url);
        console.log("QR Code is generated Succefully!!! ")
      }
      else if(url.length<=226){
        console.log(url.length);
        QRCodeGen(24,url);
        console.log("QR Code is generated Succefully!!! ")
      }
      else{
        let p = document.createElement("p");
        p.setAttribute("class","input-error")
        p.innerHTML = "Invalid INput Size";
        ui.append(p);
      }
    } else {
      alert("Invalid Input! Please Type something");
    }
    
});
