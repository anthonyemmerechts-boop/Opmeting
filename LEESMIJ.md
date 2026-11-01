# Ve.Ra+ Werfopmeting – installeren op de tablet

De app bestaat uit deze bestanden:

- `index.html` – de app zelf
- `manifest.webmanifest` – naam, icoon en kleuren
- `sw.js` – zorgt dat de app offline werkt
- `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` – het app-icoon

Alles werkt zonder internet: de PDF wordt op de tablet zelf gemaakt en de gegevens blijven op de tablet. Er gaan geen klantgegevens naar een server.

## Stap 1 – De app online zetten (eenmalig, gratis via GitHub)

Een Android-app installeren vanuit een website kan enkel vanaf een https-adres. GitHub Pages geeft je dat gratis.

1. Maak een gratis account op github.com.
2. Klik rechtsboven op **+** en kies **New repository**. Geef als naam `opmeting` en kies **Public**. Klik **Create repository**.
3. Klik op **uploading an existing file**. Sleep de 6 bestanden hierboven erin (niet de map, de bestanden zelf). Klik **Commit changes**.
4. Ga naar **Settings** en dan **Pages**. Kies onder *Branch* de branch **main** en de map **/ (root)**, en klik **Save**.
5. Na een minuut of twee staat de app op `https://JOUWNAAM.github.io/opmeting/`.

Het adres is openbaar, maar er staan enkel de lege app en het icoon. Je opmetingen blijven op de tablet.

## Stap 2 – Installeren op de tablet

1. Open het adres in **Chrome** op de tablet.
2. Tik op het menu (de drie puntjes) en kies **App installeren** of **Toevoegen aan startscherm**.
3. De app staat nu tussen je andere apps met het eigen icoon, en opent schermvullend.
4. Open de app één keer terwijl je internet hebt. Daarna werkt ze ook volledig zonder bereik.

## Optioneel – Een echte .apk maken

Wil je een .apk-bestand (bv. om op meerdere tablets te zetten zonder Chrome-menu):

1. Ga op een computer naar **pwabuilder.com**.
2. Vul het adres van stap 1 in en klik **Start**.
3. Kies **Package for stores**, dan **Android**, en download het pakket.
4. Pak de zip uit. Zet het `.apk`-bestand op de tablet en open het. Sta de installatie van onbekende bronnen toe als Android dat vraagt.

## Werken met de app

- **Offerte inladen:** kies op het startscherm **+ Werf uit offerte (PDF)** en selecteer de offerte-PDF uit WinPro. De app maakt per element een positie aan (bij Hoev. 2 twee posities: 001.1 en 001.2) met plaats, raam of deur, type, offertemaat, profiel, kleuren en dorpel. Accessoires worden niet overgenomen.

- **DISTO:** zet de DISTO X6 in toetsenbordmodus (Bluetooth HID) met **Enter** of **Tab** na elke meting. Tik het eerste maatvak aan en meet door: 3× breedte, dan 3× hoogte, eerst DM en dan BM.
- **PDF bewaren** zet de PDF in de map Downloads. **PDF delen** opent het deelmenu van Android (mail, WhatsApp, Drive…).
- **Reservekopie:** maak na elke werf een reservekopie (ook in Downloads). Met **Reservekopie terugzetten** op het startscherm haal je ze terug, ook op een andere tablet.
- Verwijder de app of de Chrome-gegevens niet zonder reservekopie: dan zijn de opmetingen weg.

## Automatische back-up naar Google Drive (eenmalig instellen)

1. Ga op een computer naar **console.cloud.google.com** en meld je aan met je Google-account.
2. Maak bovenaan een nieuw project, bv. **Opmeting**.
3. Ga naar **API's en services → Bibliotheek**, zoek **Google Drive API** en klik **Inschakelen**.
4. Ga naar **Google Auth Platform** (of **OAuth-toestemmingsscherm**): kies **Extern**, geef als app-naam *Ve.Ra+ Opmeting* en je e-mailadres. Voeg bij **Doelgroep → Testgebruikers** je eigen Gmail-adres toe.
5. Ga naar **Clients** (of **Inloggegevens → Inloggegevens maken → OAuth-client-ID**), kies **Webapplicatie** en vul bij **Geautoriseerde JavaScript-bronnen** in: `https://anthonyemmerechts-boop.github.io`
6. Klik **Maken** en kopieer de **Client-ID** (eindigt op `.apps.googleusercontent.com`).
7. Open de app, ga naar **Werven**, plak de Client-ID bij *Automatische back-up* en tik **Opslaan** en daarna **Verbinden**. Google vraagt één keer toestemming; omdat de app niet "geverifieerd" is, kies je **Doorgaan**.

De app mag enkel aan bestanden die ze zelf maakt (map *Ve.Ra+ Opmetingen*), niet aan de rest van je Drive. Per werf staat er een reservekopie (.json, met foto's en schetsen) en, zodra je een PDF maakt, ook de PDF.

## Een nieuwe versie plaatsen

Vervang `index.html` op GitHub door de nieuwe versie en verhoog in `sw.js` het nummer in `werfopmeting-v1` (bv. naar `v2`). De tablet haalt de nieuwe versie op de volgende keer dat de app met internet geopend wordt.
