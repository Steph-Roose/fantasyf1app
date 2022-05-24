
**Inhoudsopgave**
* Inleiding
* Benodigdheden voor algemeen gebruik
* Stappenplan
* Inloggegevens bestaande accounts

**Inleiding**

Let op! Deze applicatie maakt gebruik van de Firebase backend. Uit veiligheidsoverwegingen geef ik alleen bekenden toegang tot deze backend.

Via Max Verstappen en de Netflix-serie Drive to Survive is de populariteit van de Formule 1 in Nederland gigantisch toegenomen. Nu zijn de races zelf al enorm spannend om te kijken, maar het zou nog veel leuker zijn als je samen met jouw groep vrienden nog een extra spannend element aan het seizoen toe kunt voegen.

Met deze applicatie kun je jouw eigen Formule 1 fantasy-spel starten. Het enige wat je vrienden hiervoor hoeven te doen, is een account aanmaken en een team samenstellen. De applicatie haalt via de API API-FORMULA-1 de uitslagen van de kwalificaties en races op en berekent per coureur de punten in het fantasy-spel. Gebruikers kunnen in het klassement zien hoe goed hun team het doet ten opzichte van de andere gebruikers. Happy racing!

![screenshot pickteam-page](fantasyf1app/src/assets/screenshot.png)

**Benodigdheden voor algemeen gebruik**

Om gebruik te kunnen maken van de API heb je een persoonlijke API key nodig. Deze kun je aanmaken op [RapidAPI](https://rapidapi.com/api-sports/api/api-formula-1/).

**Stappenplan**

* Pak het .zip bestand uit.
* Open het uitgepakte bestand in je code editor.
* Open de terminal, typ npm install en klik op Enter. Dit installeert alle benodigde packages. Zie package.json voor een overzicht van de gebruikte packages.
* Open de map ‘config’ en voeg je API key toe in het bestand configapi.js.
* Typ npm run start en klik op Enter. Je applicatie opent op http://localhost:3000.  

**Inloggegevens**

Er zijn al een aantal test-accounts aangemaakt. Je kunt inloggen met de volgende gegevens:

_Account zonder team:_

e-mailadres - ewan@test.nl

wachtwoord - Test123

_Account met team:_

e-mailadres - maaike@test.nl

wachtwoord - Test123
