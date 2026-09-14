[English](README.md) | **Türkçe**

# SignalRGB için G316 X 98 topluluk eklentisi

Logitech G316 X 98 klavye için SignalRGB RGB kontrolü ekleyen resmi olmayan topluluk eklentisi.

> **Projeyi destekleme:** Bu eklenti ücretsiz ve açık kaynaklıdır. Projeyi faydalı bulan kullanıcıların geliştiriciye isteğe bağlı bahşiş/bağış göndermesi memnuniyetle karşılanır. Güncel ve tek geçerli destek bilgileri için [SUPPORT.md](SUPPORT.md) dosyasına bakın. Eklentiyi kullanmak için hiçbir ödeme gerekmez.

> **Durum:** Fiziksel olarak bir adet Türkçe/ISO düzenli G316 X 98 üzerinde test edilmiştir. USB VID `0x046D`, PID `0xC36B`.

## Özellikler

- Tuş başına RGB kontrolü
- 30 bölgeli RGB ışık şeridi
- SignalRGB canvas efektleri
- Numpad RGB desteği
- Türkçe / ISO düzeni üzerinde doğrulanmış tuş eşlemesi
- HID++ yazılım kontrolü başlatma dizisi
- Soldan sağa doğrulanmış ışık şeridi bölge sıralaması

## Uyumluluk

| Özellik | Test edilen değer |
|---|---|
| Cihaz | Logitech G316 X 98 |
| USB VID | `0x046D` |
| USB PID | `0xC36B` |
| İşletim sistemi | Windows 11 |
| SignalRGB | 2.5.x |
| Klavye düzeni | Türkçe / ISO |

Diğer firmware sürümleri ve bölgesel klavye düzenleri ek test gerektirebilir. Aynı VID/PID'ye sahip cihazınız farklı davranıyorsa, GitHub Issues üzerinden donanım bilgilerinizi paylaşın.

## Kurulum

1. Son sürümden `Logitech_G316_X_98.js` dosyasını indirin.
2. SignalRGB içinde cihaz bilgi sayfasını açın ve **Plugins** düğmesiyle özel eklenti klasörünü açın.
3. `Logitech_G316_X_98.js` dosyasını bu klasöre kopyalayın.
4. Aynı VID/PID için çalışan eski veya deneysel başka bir G316 X eklentisi olmadığından emin olun.
5. Logitech G HUB aynı cihazın aydınlatmasını kontrol etmeye çalışıyorsa test sırasında kapatın.
6. SignalRGB'yi yeniden başlatın.
7. `Logitech G316 X 98` cihazının göründüğünü doğrulayın ve önce tek renkli statik efektle test edin.

Ayrıntılı kurulum ve sorun giderme için [docs/INSTALLATION_TR.md](docs/INSTALLATION_TR.md) dosyasına bakın.

## Doğrulanan işlevler

Mevcut eklenti hem klavye tuşlarını hem de 30 bölgeli RGB ışık şeridini kontrol eder. Işık şeridinin fiziksel sırası soldan sağa şöyledir:

```text
0xA0 ... 0xB3, 0xD4 ... 0xDD
```

`0xA0` en soldaki, `0xDD` ise en sağdaki bölgedir.

LED ID'leri `0x61`, `0x65` ve `0x68` olan grupta cihaza özgü bir paketleme davranışı vardır ve eklenti bunu özel olarak ele alır. Teknik ayrıntılar için [docs/PROTOCOL.md](docs/PROTOCOL.md) dosyasına bakın.

## Türkçe klavye desteği

Bu eklenti **Türkçe Q / ISO fiziksel düzenli** bir Logitech G316 X 98 üzerinde geliştirilmiş ve doğrulanmıştır. Özellikle aşağıdaki alanlar test edilmiştir:

- Sol Ctrl
- Sol Shift
- Sol Alt
- AltGr / Sağ Alt
- Sağ Shift'in üstündeki Türkçe/ISO özel tuş
- Numpad `9`, `0` ve ondalık/virgül tuşu
- 30 bölgeli RGB ışık şeridi

ABD ANSI, UK ISO, Alman ISO ve diğer bölgesel düzenlere sahip kullanıcıların donanım test raporları özellikle değerlidir.

## Test ve hata bildirimleri

Hata bildirmeden önce şunları test edin:

- tek renkli statik efekt;
- yatay rainbow/wave efekti;
- özellikle `9`, `0` ve ondalık/virgül dahil tüm numpad;
- Sol Ctrl, Sol Shift ve Sol Alt;
- Sağ Shift'in üzerindeki ISO/Türkçe özel tuş;
- ışık şeridinin tamamının soldan sağa çalışması.

GitHub issue şablonlarını kullanın ve klavye düzeninizi, VID/PID değerlerini, SignalRGB sürümünü, biliniyorsa firmware sürümünü ve ilgili konsol çıktısını ekleyin.

## Protokol araştırması

Bu depodaki protokol notları, proje sahibinin kendi donanımı üzerinde yaptığı birlikte çalışabilirlik testleriyle elde edilmiştir. Logitech firmware'i, özel ikili dosyaları veya gizli dokümanları bu depoya dahil edilmemiştir.

Bilinen HID++ ayrıntıları için [docs/PROTOCOL.md](docs/PROTOCOL.md) dosyasına bakın.

## Katkıda bulunma

Mevcut sürüm tek bir fiziksel Türkçe/ISO cihaz üzerinde doğrulandığından, diğer G316 X sahiplerinin donanım testleri özellikle değerlidir.

Katkı kuralları için [CONTRIBUTING.md](CONTRIBUTING.md) dosyasına bakın.

## SignalRGB ana koduna eklenme hedefi

Bu deponun amacı yalnızca elle yüklenebilen bir topluluk eklentisi sunmak değil, aynı zamanda SignalRGB geliştiricilerinin kodu inceleyip kendi ana eklenti deposuna kolayca alabilmesini sağlamaktır.

SignalRGB'nin üçüncü taraf HID eklentileri için kullandığı genel depo GitLab üzerindedir:

- https://gitlab.com/signalrgb/signal-plugins
- Development dalı: https://gitlab.com/signalrgb/signal-plugins/-/tree/Development

Upstream gönderim notları için [docs/UPSTREAM.md](docs/UPSTREAM.md) dosyasına bakın.

## Projeyi destekleyin

Eklenti ücretsiz ve açık kaynaklıdır. **İşinize yaradıysa geliştirici isteğe bağlı gönüllü bahşişleri memnuniyetle kabul eder.**

Güncel ve tek geçerli destek/bahşiş bilgileri: [SUPPORT.md](SUPPORT.md). Şu anda belgelenen seçenekler **Base ağında USDC (önerilen)** ve **Ethereum Mainnet üzerinde ETH (alternatif)** şeklindedir.

Bağışlar tamamen isteğe bağlıdır; yazılım, garanti, öncelikli destek veya ek özellik satın almış olmazsınız. Göndermeden önce seçili ağı mutlaka doğrulayın.

## Lisans

MIT License. Ayrıntılar için [LICENSE](LICENSE).

## Sorumluluk reddi

Bu bağımsız bir topluluk projesidir. Logitech veya SignalRGB ile bağlantılı değildir; bu şirketler tarafından desteklenmez veya onaylanmaz. Kullanım kullanıcının kendi sorumluluğundadır. RGB/HID davranışı firmware sürümüne ve bölgesel klavye düzenine göre değişebilir.

## Ticari markalar

Logitech, Logi ve ilgili logolar Logitech Europe S.A. ve/veya bağlı şirketlerinin ABD ve/veya diğer ülkelerdeki ticari markaları veya tescilli ticari markalarıdır.

SignalRGB ve ilgili işaretler kendi hak sahiplerine aittir. Ürün ve şirket adları yalnızca uyumluluğu tanımlamak amacıyla kullanılmıştır.

---

Bakımcı: [@purrk0t](https://github.com/purrk0t)
