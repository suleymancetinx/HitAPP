<?php
// Veritabanı bağlantısı
$host = 'localhost';
$db   = 'diksiyon_app';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$pdo = new PDO($dsn, $user, $pass);

// KAYIT İŞLEMİ (Örnek)
if (isset($_POST['kayit_ol'])) {
    $ad_soyad = $_POST['ad_soyad'];
    $eposta = $_POST['eposta'];
    // Şifreyi güvenli bir şekilde şifreliyoruz
    $sifre = password_hash($_POST['sifre'], PASSWORD_DEFAULT); 

    $stmt = $pdo->prepare("INSERT INTO kullanicilar (ad_soyad, eposta, sifre) VALUES (?, ?, ?)");
    $stmt->execute([$ad_soyad, $eposta, $sifre]);
    echo "Kayıt başarılı!";
}

// GİRİŞ İŞLEMİ (Örnek)
if (isset($_POST['giris_yap'])) {
    $eposta = $_POST['eposta'];
    $sifre_girilen = $_POST['sifre'];

    $stmt = $pdo->prepare("SELECT * FROM kullanicilar WHERE eposta = ?");
    $stmt->execute([$eposta]);
    $kullanici = $stmt->fetch();

    if ($kullanici && password_verify($sifre_girilen, $kullanici['sifre'])) {
        session_start();
        $_SESSION['kullanici_id'] = $kullanici['id'];
        echo "Hoş geldin, " . $kullanici['ad_soyad'];
    } else {
        echo "Hatalı e-posta veya şifre.";
    }
}
?>