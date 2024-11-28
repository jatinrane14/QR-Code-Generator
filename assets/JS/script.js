let sub_btn = document.querySelector(".sub-btn");
let qrcon = document.querySelector("#placeHolder");
QRCodeGen = (tn,data) =>{
  var typeNumber = tn;
  var errorCorrectionLevel = "H";
  var qr = qrcode(typeNumber, errorCorrectionLevel);
  qr.addData(data);
  qr.make();
  qrcon.innerHTML = qr.createImgTag();
}
sub_btn.addEventListener("click", ()=>{
    let url = document.getElementsByClassName("input-data")[0].value;
    if (url != "") {
      document.getElementById("placeHolder").innerHTML = null;
      if (url.length<=57) {
        QRCodeGen(6,url);
        console.log("QR Code is generated Succefully!!! ");
      }
      else if(url.length<=113){
        QRCodeGen(12,url);
        console.log("QR Code is generated Succefully!!! ");
      }
      else if(url.length<=226){
        QRCodeGen(24,url);
        console.log("QR Code is generated Succefully!!! ")
      }
      else{
        let p = document.createElement("p");
        p.setAttribute("class","input-error");
        p.innerHTML = "Invalid INput Size";
        qrcon.append(p);
      }
    } 
    else {
      alert("Invalid Input! Please Type something");
    }
    
});