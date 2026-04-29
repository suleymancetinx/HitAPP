// 29 Harflik Tekerleme Veritabanı
const tekerlemeDB = {
    "A": [
        "Abe kaynana ne yaptın, bize taze fasulye mi yaptın?",
        "Adana'da anası asma kabaklarını asmış.",
        "Al bu takatukaları takatukacıya takatukalatmaya götür.",
        "Abana'dan Adana'ya abarta abarta apar topar ahlatla ağda taşıdılar.",
        "Ağlarsa anam ağlar, kalanı yalan ağlar."
    ],
    "B": [
        "Babaeski'deki bakkal babacan Bahri amca, bakkal dükkanını bıraktı.",
        "Bir berber bir berbere 'Gel beraber bir berber dükkanı açalım' demiş.",
        "Beş boz başlı beş boz ördek, boş göle dalıp başını daldırıp çıkmış.",
        "Bu bankaya boş banka mi demeli, yoksa bankı boş banka mi demeli?",
        "Bülbül bülbüle baka baka bülbül olmuş."
    ],
    "C": [
        "Cemil, Cemile, Cemal cumaları cilacı cüce Canip'in camlarına cam göbeği cam takarlar.",
        "Cırcır böceği cırcır öterek cırcırlarıyla cırcır böceklerini çağırır.",
        "Cüce cıvık Cengiz, ceketini cırt cırt yırttı.",
        "Candan candan camları canlandıran canan, canla canlanır.",
        "Cevizci Cevdet, cevizleri ceviz kıracağı ile kırıp ceviz yedi."
    ],
    // Ç, D, E, F, G, Ğ, H, I, İ, J, K, L, M, N, O, Ö, P, R, S, Ş, T, U, Ü, V, Y, Z
    // Hocam, diğer harfleri bu formata uygun olarak alt alta dizi (array) şeklinde ekleyebilirsiniz.
};

// Harf Butonlarını ve Tekerlemeleri Ekrana Basma Fonksiyonu
function tekerlemeleriListele(seciliHarf) {
    const harfKapsayici = document.getElementById('harf-filtre-alani');
    const tekerlemeKapsayici = document.getElementById('tekerleme-kartlari-alani');
    
    // 1. Harf butonlarını oluştur (Sadece bir kere)
    if (harfKapsayici.innerHTML === '') {
        Object.keys(tekerlemeDB).forEach(harf => {
            const btn = document.createElement('button');
            btn.innerText = harf;
            btn.className = "px-4 py-2 rounded-full font-bold m-1 transition-all " + 
                            (harf === seciliHarf ? "bg-teal-600 text-white" : "bg-gray-200 text-gray-700 hover:bg-teal-100");
            btn.onclick = () => {
                harfKapsayici.innerHTML = ''; // Buton renklerini güncellemek için temizle
                tekerlemeleriListele(harf);
            };
            harfKapsayici.appendChild(btn);
        });
    }

    // 2. Seçili harfin tekerlemelerini ekrana bas
    tekerlemeKapsayici.innerHTML = ''; // Eski tekerlemeleri temizle
    const seciliTekerlemeler = tekerlemeDB[seciliHarf];

    if (seciliTekerlemeler && seciliTekerlemeler.length > 0) {
        seciliTekerlemeler.forEach((metin, index) => {
            const kart = document.createElement('div');
            // Sizin tasarımınızdaki bento-card sınıflarını kullandık
            kart.className = "bento-card p-6 rounded-lg bg-white shadow-md border border-gray-100 mb-4";
            kart.innerHTML = `
                <div class="flex justify-between items-start mb-2">
                    <span class="px-3 py-1 rounded-full bg-teal-50 text-[11px] font-bold text-teal-700 uppercase">Egzersiz ${index + 1}</span>
                </div>
                <p class="font-headline-md text-gray-800 leading-relaxed italic">"${metin}"</p>
            `;
            tekerlemeKapsayici.appendChild(kart);
        });
    }
}

// Sayfa yüklendiğinde 'A' harfini varsayılan olarak listele
document.addEventListener('DOMContentLoaded', () => {
    tekerlemeleriListele('A');
});