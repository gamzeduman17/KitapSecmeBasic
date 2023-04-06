const ekle = document.querySelector("#sepeteekle");
const ekles = document.querySelectorAll("#sepeteekle");
const eklendi = document.querySelector(".eklendi");
const fiyat = document.querySelector(".toplamFiyat");
// const b1=document.querySelector(".b1");
// const b2=document.querySelector(".b2");
// const b3=document.querySelector(".b3");
// const b4=document.querySelector(".b4");
// const b5=document.querySelector(".b5");
// const b6=document.querySelector(".b6");
let fiyatlar = [120, 200, 70, 140, 170, 300];

let fiyatToplam = 0;


let number = 0;

console.log("Merhaba")
ekles.forEach((ekle) => {
    ekle.addEventListener("click", () => {
        if (!ekle.classList.contains("ekle-btn")) {
            ekle.classList.add("ekle-btn");
            number++;
            ekle.innerHTML = "Sepete Eklendi."
        }
        else {
            ekle.classList.remove("ekle-btn");
            number--;
            ekle.innerHTML = "Sepete Ekle";
        }
        if (number >= 1) {
            eklendi.classList.add("display")
            eklendi.innerHTML = number;
        }
        else {
            eklendi.classList.remove("display")
            eklendi.innerHTML = 0;
        }

    });
})


document.querySelector(".b1").addEventListener("click",()=>{
    fiyatToplam += fiyatlar[0];
    fiyatToplam.innerText=fiyatToplam;

})


//  $(".b1").click(function () {
//     fiyatToplam += fiyatlar[0];

//     fiyatToplam.innerText=fiyatToplam;
// })
// $(".b2").click(function () {
//     fiyatToplam += fiyatlar[1];
// })
// $(".b3").click(function () {
//     fiyatToplam += fiyatlar[2];
// })
// $(".b4").click(function () {
//     fiyatToplam += fiyatlar[3];
// })
// $(".b5").click(function () {
//     fiyatToplam += fiyatlar[4];
// })
// $(".b6").click(function () {
//     fiyatToplam += fiyatlar[5];
// })
// fiyat.innerHTML=fiyatToplam;




