function currentTime(){
    let date = new Date();
    let hh = date.getHours();
    let mm = date.getMinutes();
    let ss = date.getSeconds();

    hh = (hh < 10) ? "0" + hh : hh;
    mm = (mm < 10) ? "0" + mm : mm;
    ss = (ss < 10) ? "0" + ss : ss;

    let time = hh + ":" + mm + ":" + ss;
    let watch = document.querySelector("#watch");
    watch.innerHTML = time;
}

setInterval(currentTime, 1000);

const nextBtn = document.querySelector("#next-btn");
const backBtn = document.querySelector("#back-btn");
const step1 = document.querySelector("#step-1");
const step2 = document.querySelector("#step-2");
const summary = document.querySelector("#summary");
const image = document.querySelector("#img"),
  input = document.querySelector("#upimg");

  input.addEventListener("change", () => {image.src = URL.createObjectURL(input.files[0])});


//agregar evento onclick al botón siguiente
nextBtn.addEventListener("click", function() {
  // recopilar datos del primer paso
  let upimg = document.querySelector("#upimg").value;
  let name = document.querySelector("#name").value;
  let email = document.querySelector("#email").value;
  let mensaje = document.querySelector("#msj").value;
  
  // mostrar resumen en el segundo paso
  summary.innerHTML = `${upimg} <br> Nombre: ${name}<br>Email: ${email}<br> ${mensaje} `;
  
  // ocultar el primer paso y mostrar el segundo paso
  step1.style.display = "none";
  step2.style.display = "block flow";
});

