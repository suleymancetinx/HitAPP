// --- NEFES EGZERSİZİ ---
let nefesZamanlayici;

function nefesEgzersiziniBaslat() {
    const durumMetni = document.getElementById('nefes-durum-metni');
    const ilerlemeBari = document.getElementById('nefes-ilerleme-bari');
    const baslatButonu = document.getElementById('nefes-baslat-btn');
    
    baslatButonu.disabled = true;
    ilerlemeBari.style.width = '0%';
    ilerlemeBari.style.transition = 'none';

    // Aşama 1: Nefes Al
    durumMetni.innerText = "3 saniye burundan derin nefes al...";
    
    setTimeout(() => {
        // Aşama 2: Nefes Ver
        durumMetni.innerText = "Yavaş yavaş ve kesik kesik ver...";
        
        let yuzde = 0;
        ilerlemeBari.style.transition = 'width 0.1s linear';
        
        // Barı yavaşça doldur (Örn: 5 saniye boyunca kesik kesik veriyormuş gibi)
        nefesZamanlayici = setInterval(() => {
            yuzde += 2; // Her 100ms'de %2 artar (toplam 5 saniye)
            ilerlemeBari.style.width = yuzde + '%';
            
            if(yuzde >= 100) {
                clearInterval(nefesZamanlayici);
                durumMetni.innerText = "Harika! Egzersiz tamamlandı.";
                baslatButonu.disabled = false;
                baslatButonu.innerText = "Tekrarla";
            }
        }, 100);
        
    }, 3000); // 3 saniye bekle
}

// --- DUDAK ÜŞENGEÇLİĞİ EGZERSİZİ ---
let dudakSayac = 5;

function dudakEgzersiziTikla() {
    const metinAlani = document.getElementById('dudak-metni');
    const sayacAlani = document.getElementById('dudak-sayaci');
    const buton = document.getElementById('dudak-btn');

    if (dudakSayac > 0) {
        dudakSayac--;
        sayacAlani.innerText = "Kalan: " + dudakSayac;
        
        // Animasyon efekti için sınıf ekle/çıkar
        metinAlani.classList.remove('scale-110', 'text-teal-600');
        void metinAlani.offsetWidth; // DOM'u yenilemeye zorla
        metinAlani.classList.add('scale-110', 'text-teal-600');

        if (dudakSayac === 0) {
            metinAlani.innerText = "Tebrikler! Dudak kasların çok iyi çalıştı.";
            sayacAlani.innerText = "Görev Tamamlandı";
            buton.disabled = true;
            buton.classList.add('opacity-50');
        }
    }
}