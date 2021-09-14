// hasil
// 0 player menang
// 1 player kalah
// 2 seri
function cek(pilihanPlayer, pilihanKomp)
{
    if (pilihanPlayer == pilihanKomp)
    {
        return 2;
    }
    else if (pilihanPlayer == 0 && pilihanKomp == 1)
    {
        return 0;
    }
    else if (pilihanPlayer == 0 && pilihanKomp == 2)
    {
        return 1;
    }
    else if (pilihanPlayer == 1 && pilihanKomp == 0)
    {
        return 1;
    }
    else if (pilihanPlayer == 1 && pilihanKomp == 2)
    {
        return 0;
    }
    else if (pilihanPlayer == 2 && pilihanKomp == 0)
    {
        return 0;
    }
    else if (pilihanPlayer == 2 && pilihanKomp == 1)
    {
        return 1;
    }
}

// player

let pilihanPlayer = null;

const batuPlayer = document.querySelector("#batu-player")
const kertasPlayer = document.querySelector("#kertas-player")
const guntingPlayer = document.querySelector("#gunting-player")
const batuKomputer = document.querySelector("#batu")
const kertasKomputer = document.querySelector("#kertas")
const guntingKomputer = document.querySelector("#gunting")
const gambar = document.querySelector("#vs")

batuPlayer.addEventListener('click', function () {
    pilihanPlayer = 0;

    const listPilihan = ["Batu", "Gunting", "Kertas"];

    const pilihanKomp = Math.floor(Math.random() * listPilihan.length);

    const hasil = cek(pilihanPlayer, pilihanKomp)

    gambar.innerHTML = ""

    gambar.classList.remove("MENANG")
    gambar.classList.remove("KALAH")
    gambar.classList.remove("SERI")

    batuPlayer.classList.add("terpilih")
    kertasPlayer.classList.remove("terpilih")
    guntingPlayer.classList.remove("terpilih")

    if (pilihanKomp == 0)
    {
        batuKomputer.classList.add("terpilih")
        kertasKomputer.classList.remove("terpilih")
        guntingKomputer.classList.remove("terpilih")
    }
    else if (pilihanKomp == 1)
    {
        batuKomputer.classList.remove("terpilih")
        kertasKomputer.classList.remove("terpilih")
        guntingKomputer.classList.add("terpilih")
    }
    else if (pilihanKomp == 2)
    {
        batuKomputer.classList.remove("terpilih")
        kertasKomputer.classList.add("terpilih")
        guntingKomputer.classList.remove("terpilih")
    }
    
    switch (hasil) {
        case 0:
            gambar.classList.add("MENANG")
            break;

        case 1:
            gambar.classList.add("KALAH")
            break;

        case 2:
            gambar.classList.add("SERI")
            break;
    }
})

kertasPlayer.addEventListener('click', function () {
    pilihanPlayer = 2;
    
    const listPilihan = ["Batu", "Gunting", "Kertas"];

    const pilihanKomp = Math.floor(Math.random() * listPilihan.length);

    const hasil = cek(pilihanPlayer, pilihanKomp)

    gambar.innerHTML = ""

    gambar.classList.remove("MENANG")
    gambar.classList.remove("KALAH")
    gambar.classList.remove("SERI")

    batuPlayer.classList.remove("terpilih")
    kertasPlayer.classList.add("terpilih")
    guntingPlayer.classList.remove("terpilih")

    if (pilihanKomp == 0)
    {
        batuKomputer.classList.add("terpilih")
        kertasKomputer.classList.remove("terpilih")
        guntingKomputer.classList.remove("terpilih")
    }
    else if (pilihanKomp == 1)
    {
        batuKomputer.classList.remove("terpilih")
        kertasKomputer.classList.remove("terpilih")
        guntingKomputer.classList.add("terpilih")
    }
    else if (pilihanKomp == 2)
    {
        batuKomputer.classList.remove("terpilih")
        kertasKomputer.classList.add("terpilih")
        guntingKomputer.classList.remove("terpilih")
    }
    
    switch (hasil) {
        case 0:
            gambar.classList.add("MENANG")
            break;

        case 1:
            gambar.classList.add("KALAH")
            break;

        case 2:
            gambar.classList.add("SERI")
            break;
    }
})

guntingPlayer.addEventListener('click', function () {
    pilihanPlayer = 1;
    
    const listPilihan = ["Batu", "Gunting", "Kertas"];

    const pilihanKomp = Math.floor(Math.random() * listPilihan.length);

    const hasil = cek(pilihanPlayer, pilihanKomp)

    gambar.innerHTML = ""

    gambar.classList.remove("MENANG")
    gambar.classList.remove("KALAH")
    gambar.classList.remove("SERI")

    batuPlayer.classList.remove("terpilih")
    kertasPlayer.classList.remove("terpilih")
    guntingPlayer.classList.add("terpilih")

    if (pilihanKomp == 0)
    {
        batuKomputer.classList.add("terpilih")
        kertasKomputer.classList.remove("terpilih")
        guntingKomputer.classList.remove("terpilih")
    }
    else if (pilihanKomp == 1)
    {
        batuKomputer.classList.remove("terpilih")
        kertasKomputer.classList.remove("terpilih")
        guntingKomputer.classList.add("terpilih")
    }
    else if (pilihanKomp == 2)
    {
        batuKomputer.classList.remove("terpilih")
        kertasKomputer.classList.add("terpilih")
        guntingKomputer.classList.remove("terpilih")
    }
    
    switch (hasil) {
        case 0:
            gambar.classList.add("MENANG")
            break;

        case 1:
            gambar.classList.add("KALAH")
            break;

        case 2:
            gambar.classList.add("SERI")
            break;
    }
})

// // 1. MEMBUAT PILIHAN COMPUTER
// function getComp() {
//     const comp = Math.random()
//     if (comp < 0.34) return 'BATU'
//     if (comp >= 0.34 && comp < 0.67) return 'GUNTING'
//     return 'KERTAS'
//   }
  
//   // 2. MEMBUAT FUNGSI HASIL
//   function getHasil(pilComp, pilPlayer) {
//     if (pilPlayer == pilComp) return 'SERI'
//     if (pilPlayer == `BATU`) return pilComp == `KERTAS` ? 'KALAH' : 'MENANG'
//     if (pilPlayer == `GUNTING`) return pilComp == `KERTAS` ? 'MENANG' : 'KALAH'
//     if (pilPlayer == `KERTAS`) return pilComp == `BATU` ? 'MENANG' : 'KALAH'
//   }
  
//   // 3. MEMBUAT FUNGSI PUTAR
//   function putar() {
//     const putarCom = document.querySelectorAll('.listcomp li')
//     let i = 0
//     const waktuMulai = new Date().getTime()
//     setInterval(() => {
//       if (new Date().getTime() - waktuMulai > 2000) {
//         clearInterval
//         return
//       }
//       putarCom[i++].classList.toggle('terpilihCom')
//       if (i == putarCom.length) return (i = 0)
//     }, 200)
//   }
  
//   // 4. MEMBUAT PILIHAN PLAYER dan menampilkan hasil
//   //MEMBUAT UL.LISTPLAYER LI menjadi array
//   const player = document.querySelectorAll('ul.listplayer img')
//   console.log(player)
  
//   //memanggil setiap object pada array untuk diberikan perlakuan dengan FOREACH
//   player.forEach(function (pil) {
//     pil.addEventListener('click', function (el) {
//       const pilComp = getComp()
//       const pilPlayer = pil.className
//       const hasil = getHasil(pilComp, pilPlayer)
  
//       const info = document.querySelector('.hasil')
//       info.classList.remove('hasil')
//       info.innerHTML = ''
  
//       putar()
  
//       // Menampilkan background player
//       // this.classList.add('terpilih')
//       el.target.classList.add('terpilih')
  
//       setTimeout(() => {
//         // Menampilkan background pilihan computer
//         const hasilComp = document.getElementById(`${pilComp}`)
//         hasilComp.classList.add('terpilih')
  
//         // Menampilkan Hasil
//         setTimeout(() => {
//           // Menampilkan Hasil
//           info.classList.add(`${hasil}`)
//         }, 300)
//       }, 2000)
//     })
//   })