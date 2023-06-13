const express = require("express");
const knex = require("knex");
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const db = knex({
    client: "mysql2",
    connection: {
        host: "127.0.0.1",
        port: 3306,
        user: "JOuwGebruikersnaam",
        password: "JouwWachtwoord",
        database: "db_steam"
    }
});

// Schrijf een request dat één game weergeeft op basis van ID.
//Bijvoorbeeld: Als ik surf naar http://localhost:3000/game/3 dan krijg ik de data van het spel met ID 3.




// Schrijf een request dat ons in staat stelt om een game aan te passen.
// Bijvoorbeeld: Als ik via swagger het request http://localhost:3000/updateGame/3 uitvoer en daarbij de data meegeef dan wordt de data van game met ID 3 aangepast.




// Schrijf een request dat ons in staat stelt om een game te verwijderen.
// Bijvoorbeeld: Als ik via swagger het request http://localhost:3000/deleteGame/3 uitvoer dan wordt de game met ID 3 verwijderd uit de database.




// Schrijf een request dat de totaal gespeelde tijd van alle games terug geeft in JSON
// Bijvoorbeeld: Als ik via swagger of mijn browser het request http://localhost:3000/playtime/  uitvoer dan krijg ik
// {
//     "totalPlaytime": 600
// }




// Schrijf een request dat de game met het grootst aantal gespeelde uren weergeeft in JSON
//
// Bijvoorbeeld: Als ik via swagger of mijn browser het request http://localhost:3000/mostPlayedGame/  uitvoer dan krijg ik
// {
//     " mostPlayedGame ": ‘Red Dead Redemption II’
// }


    //get all absences
app.get("/games/", (req, res) => {
    db("tbl_games").select().then(absences => {
        res.status(200).json(absences);
    });
});

app.listen(3000, () => {
    console.log('Server gestart op poort 3000');
});