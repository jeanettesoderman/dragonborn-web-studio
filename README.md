# Studio Webb säljsida v1

Första versionen av katalog/säljsidan för de färdiga hemsidemodellerna.

## Live-demos som redan är inlagda
- Lumière Beauty
- Nord Måleri
- Obsidian Detailing
- Tass & Trim

## Ändra snabbt
I `config.js` kan du ändra:
- varumärkesnamn
- pris på hemsidan
- pris på drift
- modeller
- demo-länkar
- bilder och beskrivningar

## Nästa steg före riktig lansering
- bestäm slutligt företags-/varumärkesnamn
- koppla riktigt kontaktformulär
- lägga till betalnings-/beställningsflöde
- integritetspolicy
- eventuell egen domän
- eventuellt fler tillval och villkor

## Publicering
VS Code → GitHub → Netlify, precis som med demosajterna.


## v2.3
- Priser visas 
- Hemsidans omfattning är tydligare avgränsad
- 1 ändringsrunda ingår
- Egen drift omformulerad utan löftet "0 kr/mån"
- Drift & underhåll inkluderar upp till 30 min mindre ändringar per månad
- Tillval har tydligare startpriser
- Större designändringar offereras separat


## v2.4 Juridiska grundsidor
- Integritetspolicy tillagd
- Tjänstevillkor för B2B tillagda
- Footer länkar till båda sidorna
- Google Fonts-anrop borttaget för enklare integritetsupplägg
- Sidtitel och copyright uppdaterade till Dragonborn Web Studio
- sitePrice i config.js korrigerat till 5 900 kr

VIKTIGT FÖRE PUBLICERING:
Sök efter `Jeanette Söderman`, `Ej tillämpligt`,
`jeanettesoderman73@gmail.com` och `Kontakt sker i första hand via e-post`
och ersätt dem med korrekta verksamhetsuppgifter.


## v2.5 Privat uppdrag
- Ansvarig: Jeanette Söderman
- Kontakt: jeanettesoderman73@gmail.com
- Organisationsnummer borttaget
- "exkl. moms" borttaget från priserna
- Integritetspolicyn är anpassad till Jeanette som personuppgiftsansvarig
- Tjänstevillkoren är anpassade till att uppdragen för närvarande utförs som privatperson
- Villkoren upplyser om att Jeanette inte är godkänd för F-skatt och att företagskunders skattehantering kan påverkas

VIKTIGT:
Skatteverket anger att uppdrag åt andra som tas då och då redovisas som tjänsteinkomst, inte hobby.
För en företagskund som betalar en fysisk person utan F-skatt kan skatteavdrag och arbetsgivaravgifter bli aktuella.
Kontrollera därför betalningsupplägget innan första riktiga B2B-beställningen.


## Svenska / English
Språkväxling SV | EN är tillagd. Svenska är standard. `?lang=en` öppnar sidan direkt på engelska. Valet sparas i webbläsaren.


## SV/EN FIX
Den första språkversionen översatte bara strängar som råkade matcha ordlistan.
Den här versionen innehåller en komplettare översättning av säljsidan, dynamiskt genererade modellkort,
kontaktformulär och juridiska sidor. `?lang=en` öppnar direkt på engelska.


## Fast valutaväljare
Säljsidan har nu en separat valutaväljare: SEK | EUR | USD.

Standard:
- Svenska: SEK
- Engelska: USD

Valet sparas i webbläsaren. Priserna är fasta, avrundade internationella priser och följer inte daglig växelkurs.

Nuvarande prisnivåer:
- Hemsida: 5 900 kr / €549 / $599
- Drift: 399 kr/mån / €39/month / $39/month
- Bokningsintegration / extra sida / text: 750 kr / €69 / $79
- Bildredigering: 250 kr/bild / €25/image / $29/image
- Enkel logotyp: 995 kr / €89 / $99
- Logopaket: 1 495 kr / €139 / $149


## Automatisk språkdetektering
Sidan läser webbläsarens föredragna språk första gången besökaren kommer in.
Om ett av de språk som stöds hittas används det automatiskt. Annars används engelska.

Språk som stöds:
- Svenska
- English
- Español
- Deutsch
- Français
- Português
- Italiano
- Nederlands
- Dansk
- Norsk

Besökaren kan alltid välja språk manuellt i språklistan. Det valet sparas i webbläsaren och går före automatisk detektering.

Valutan är fortfarande helt separat och manuellt valbar: SEK | EUR | USD.
Svenska får SEK som första standardval. Övriga språk får USD som första standardval om besökaren inte redan valt valuta.


## Full translation correction
The previous version used English as a fallback for many untranslated phrases, which caused mixed-language pages.
This version fully reviews the main sales page in:
Swedish, English, Danish, German, Spanish, French, Italian and Portuguese.

The translation engine now also handles dynamically generated model cards, not only text already present in the HTML.
