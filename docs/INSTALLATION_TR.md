# Kurulum ve sorun giderme

[English](INSTALLATION.md) | **Türkçe**

## Önerilen kurulum

SignalRGB, cihaz eklentilerinin özel plugins klasörü üzerinden elle yüklenmesini ve mevcut eklentilerin geçersiz kılınmasını destekler.

1. SignalRGB'yi açın.
2. G316 X cihaz bilgi sayfasını açın.
3. Özel eklenti klasörünü açmak için **Plugins** düğmesine basın.
4. `Logitech_G316_X_98.js` dosyasını bu klasöre kopyalayın.
5. Aynı VID/PID için eşleşen eski veya deneysel başka bir G316 X eklentisi varsa kaldırın ya da yeniden adlandırın.
6. SignalRGB'yi yeniden başlatın.

SignalRGB'nin eklenti değiştirme / elle yükleme dokümanı:

https://docs.signalrgb.com/troubleshooting/advanced-troubleshooting/replacing-plugin/

## İlk test

Önce tek renkli statik bir efekt kullanın.

Şunların tamamının yandığını doğrulayın:

- tüm harf tuşları;
- sayı satırı;
- F1-F12;
- yön ve navigasyon tuşları;
- numpad'in tamamı;
- Sol Ctrl / Sol Shift / Sol Alt;
- mevcutsa ISO/Türkçe özel tuşlar;
- RGB ışık şeridinin tamamı.

Ardından hareketli yatay bir efekt kullanarak ışık şeridinin soldan sağa doğru düzgün çalıştığını kontrol edin.

## Cihaz görünmüyorsa

Şunları kontrol edin:

- USB VID `0x046D` olmalı;
- USB PID `0xC36B` olmalı;
- dosya uzantısı gerçekten `.js` olmalı, `.js.txt` olmamalı;
- aynı VID/PID'yi kullanan yalnızca bir eklenti etkin olmalı;
- dosyayı değiştirdikten sonra SignalRGB yeniden başlatılmış olmalı;
- klavye test edilen bağlantı modunda bağlı olmalı.

## Aydınlatmanın bir kısmı yanlışsa

LED ID'lerini hemen değiştirmeyin. Önce şunları kaydedin:

- klavye düzeni;
- firmware sürümü;
- çalışmayan tuşların adları;
- SignalRGB konsol logları;
- hatayı açıkça gösteren bir fotoğraf.

Daha sonra GitHub Issues üzerinden hata raporu açın.
