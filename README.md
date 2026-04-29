Markdown
<div align="center">

```text
  _   _  _  _       _      ___   ___  
 | | | |(_)| |_    / \    | _ \ | _ \ 
 | |_| || || __|  / _ \   |  _/ |  _/ 
 |  _  || || |_  / ___ \  | |   | |   
 |_| |_||_| \__|/_/   \_\ |_|   |_|
</div>

Günlük Diksiyon, Nefes ve Hitabet Egzersizleri Uygulaması 🎙️

HitAPP, kullanıcıların diksiyonlarını geliştirmeleri, doğru nefes alma tekniklerini pratik etmeleri ve dil/dudak tembelliklerini aşmaları için tasarlanmış modern bir PWA (Progressive Web App) projesidir.

Pastel tonlarda, kullanıcıyı yormayan minimalist bir arayüz (UI) ile tasarlanmış olup, mobil ve masaüstü cihazlarda kusursuz bir deneyim sunmayı hedefler.

🚀 Temel Özellikler (Planlanan ve Geliştirilen)
🌬️ Nefes Egzersizleri: Diyafram nefesi ve 4-7-8 tekniği gibi çalışmalar için görsel ve interaktif zamanlayıcılar.

👄 Dudak ve Dil Pratikleri: Dudak üşengeçliğini gidermek için interaktif sayaçlı egzersizler (Örn: "Bir mor vampir").

📚 Tekerleme Kütüphanesi: Türk alfabesindeki tüm harfler için özel olarak kategorize edilmiş, zorluk derecelerine göre ayrılmış zengin JSON tabanlı tekerleme veritabanı.

📊 İlerleme Takibi: Kullanıcıların günlük çalışma sürelerini ve "Seri" (Streak) durumlarını takip edebilecekleri kişisel kontrol paneli.

📱 PWA Desteği: Tarayıcı üzerinden telefona yüklenebilir, hızlı ve uygulama hissiyatı veren yapı.

🛠️ Teknoloji Yığını (Tech Stack)
Frontend: HTML5, CSS3, Tailwind CSS (Modern ve Responsive Arayüz), Vanilla JavaScript (Etkileşimler)

Backend: PHP (Kullanıcı doğrulama ve veri işleme)

Veritabanı: MySQL (Kullanıcı hesapları ve ilerleme kayıtları)

Veri Yapısı: JSON (Tekerleme içeriklerinin modüler yönetimi)

🗺️ Yol Haritası (Roadmap)
[x] Temel arayüz (UI) tasarımlarının oluşturulması (Tailwind).

[ ] JavaScript ile egzersiz mekaniklerinin (sayaç, bar dolumu vb.) kodlanması.

[ ] Tekerleme JSON veritabanının 29 harf için tamamlanması.

[ ] Veritabanı (MySQL) mimarisinin kurulması ve PHP bağlantılarının yapılması.

[ ] Kullanıcı kayıt/giriş sisteminin entegre edilmesi.

[ ] (Gelecek Vizyonu) Web Speech API ile kullanıcının sesini dinleyip doğruluk analizi yapan sistem.

💻 Kurulum (Geliştiriciler İçin)
Projenin yerel bilgisayarınızda çalışması için XAMPP, MAMP veya benzeri bir yerel sunucu ortamına ihtiyacınız vardır.

Depoyu bilgisayarınıza klonlayın:

Bash
git clone [https://github.com/KULLANICI_ADINIZ/HitAPP.git](https://github.com/KULLANICI_ADINIZ/HitAPP.git)
Proje dosyalarını yerel sunucunuzun (örn: htdocs veya www) dizinine taşıyın.

veritabani-kurulumu.sql dosyasını phpMyAdmin veya benzeri bir araç ile MySQL'e içe aktarın.

kimlik-dogrulama.php (veya config.php eklendiğinde) içindeki veritabanı bağlantı bilgilerini kendi yerel ayarlarınıza göre güncelleyin.

Tarayıcınızda localhost/HitAPP adresine giderek projeyi çalıştırın.

Geliştirici: Süleyman

Lisans: MIT
