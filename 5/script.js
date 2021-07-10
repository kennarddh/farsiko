let tanya = confirm("main?");

while (tanya)
{
    // player
    
    const pilihanPlayer = prompt("0. Batu\n1. Gunting\n2. kertas");
    
    // komputer
    
    const listPilihan = ["Batu", "Gunting", "Kertas"];
    
    const pilihanKomp = Math.floor(Math.random() * listPilihan.length);
    // hasil
    function cek(pilihanPlayer, pilihanKomp)
    {
        if (pilihanPlayer == pilihanKomp)
        {
            return "seri";
        }
        else if (pilihanPlayer == 0 && pilihanKomp == 1)
        {
            return "player menang";
        }
        else if (pilihanPlayer == 0 && pilihanKomp == 2)
        {
            return "player kalah";
        }
        else if (pilihanPlayer == 1 && pilihanKomp == 0)
        {
            return "player kalah";
        }
        else if (pilihanPlayer == 1 && pilihanKomp == 2)
        {
            return "player menang";
        }
        else if (pilihanPlayer == 2 && pilihanKomp == 0)
        {
            return "player menang";
        }
        else if (pilihanPlayer == 2 && pilihanKomp == 1)
        {
            return "player kalah";
        }
    }
    
    console.log(cek(pilihanPlayer, pilihanKomp));
    console.log(pilihanPlayer);
    console.log(pilihanKomp);

    tanya = confirm("main?");
}