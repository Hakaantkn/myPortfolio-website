function zamanFarkiHesapla(baslangicTarihi) {

    let simdikiZaman = new Date();
    let baslangic = new Date(baslangicTarihi);
    let yilFarki = simdikiZaman.getFullYear() - baslangic.getFullYear();
    let ayFarki = simdikiZaman.getMonth() - baslangic.getMonth();
    if (ayFarki < 0) {
        yilFarki--;
        ayFarki += 12; 
    }
    return `${yilFarki} Year, ${ayFarki} Month`;
}

function zamanFarkiniGuncelle() {
    let baslangicTarihleri = ['2023-10', '2023-10', '2023-10'];
    let zamanFarkiElemanlari = document.querySelectorAll('.experices-span');
    zamanFarkiElemanlari.forEach((eleman, index) => {
        if (index < baslangicTarihleri.length) {
            let baslangicTarihi = baslangicTarihleri[index];
            eleman.textContent = zamanFarkiHesapla(baslangicTarihi);
        }
    });
}


document.addEventListener('DOMContentLoaded', zamanFarkiniGuncelle);


















// aside menu
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
// aside menu end

















const emailInput = document.querySelector(".email");

emailInput.addEventListener("click", function(){
    console.log(this);
    if(this.classList.contains("invalidd")){
        this.classList.remove("invalidd");
        this.style.borderColor="#4EE1A0"
        this.style.borderColor=""
    }
    else{
        this.classList.add("invalidd");
        this.style.borderColor = "red";
        this.style.borderColor=""

    }
})