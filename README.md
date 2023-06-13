

1. **NodeJS - programmeeropgave**


Ontwikkel een API om jouw Steam games bij te houden.

Gegeven is een databank en een NodeJS project. Het NodeJS project zal je zelf moeten aanpassen waar nodig.

**2.1) GitHub**

1. Kloon de startsolution via <https://classroom.github.com/a/t8QZ7rhP> 

**2.2) Databank**

1) Importeer de databank in jouw Datagrip
1) Controleer of de databank aanwezig is in jouw Datagrip

**2.3) NodeJS project**

Dit project bevat reeds volgende requests:


|Request type|Route|Doel|
| :- | :- | :- |
|<p>![Afbeelding met logo, symbool, Lettertype, Graphics

Automatisch gegenereerde beschrijving](Aspose.Words.fcab7884-59a9-4233-bcbd-99d72e312a67.001.png)</p><p></p>|/games/|Geeft alle games terug in JSON|


Opgepast, voordat je connectie kan maken met je databank moet je de MySQL credentials in het project aanpassen.

Schrijf nu zelf volgende requests:


|<p>2\.3.1) Schrijf een request dat één game weergeeft op basis van ID.</p><p></p><p>**Bijvoorbeeld**: Als ik surf naar <http://localhost:3000/game/3> dan krijg ik de data van het spel met ID 3.</p><p></p><p></p>|
| :- |


|<p>2\.3.2) Schrijf een request dat ons in staat stelt om een game aan te passen.</p><p></p><p>**Bijvoorbeeld**: Als ik via swagger het request <http://localhost:3000/updateGame/3> uitvoer en daarbij de data meegeef dan wordt de data van game met ID 3 aangepast.</p><p></p><p>Hoe ga je aan de slag om deze code te schrijven? Denk even na en schrijf hieronder een stappenplan:</p><p>\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_</p><p></p><p></p>|
| :- |



|<p>2\.3.3) Schrijf een request dat ons in staat stelt om een game te verwijderen.</p><p></p><p>**Bijvoorbeeld**: Als ik via swagger het request <http://localhost:3000/deleteGame/3> uitvoer dan wordt de game met ID 3 verwijderd uit de database.</p><p></p><p></p>|
| :- |


|<p>2\.3.4) Schrijf een request dat de totaal gespeelde tijd van alle games terug geeft in JSON</p><p></p><p>**Bijvoorbeeld**: Als ik via swagger of mijn browser het request <http://localhost:3000/playtime/>  uitvoer dan krijg ik </p><p></p><p>{</p><p>"totalPlaytime": 600</p><p>}</p><p></p>|
| :- |


|<p>2\.3.4) Schrijf een request dat de game met het grootst aantal gespeelde uren weergeeft in JSON</p><p></p><p>**Bijvoorbeeld**: Als ik via swagger of mijn browser het request <http://localhost:3000/mostPlayedGame/>  uitvoer dan krijg ik </p><p></p><p>{</p><p>" mostPlayedGame ": ‘Red Dead Redemption II’</p><p>}</p><p></p><p></p>|
| :- |

**2.4)** **Swagger**

2\.4.1) Installeer de nodige packages om swagger te gebruiken.

2\.4.2) Schrijf de nodige middleware zodat we swagger later kunnen oproepen via een gepaste route.

2\.4.3) Voeg een swagger.json bestand toe aan de root van je project en vul deze aan waar nodig zodat je op een gemakkelijke manier data kan ophalen & wegschrijven via Swagger.


**Klaar?**

- Lees de volledige opgave nog een keer na om zeker te zijn dat je niets vergeten bent.

- Overloop je code nog een keer en kijk of je de afspraken naleeft. Indien niet, stuur bij.

- Test je API nogmaals met Swagger: heb je alles voorzien wat gevraagd werd? Indien niet, kijk of je het nog kan toevoegen.



|![Afbeelding met symbool, clipart, logo

Automatisch gegenereerde beschrijving](Aspose.Words.fcab7884-59a9-4233-bcbd-99d72e312a67.002.png)|<p>**Vergeet niet te controleren dat je het volledige project correct gepusht werd naar Github. Het is jouw verantwoordelijkheid om ervoor te zorgen dat je code door de leerkracht binnengehaald kan worden van Github voor de correctie ervan.**</p><p></p><p></p>|
| :- | :- |




