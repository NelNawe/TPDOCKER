//importer et créer l'instance express
const express = require("express");
const app = express();

//attribuer le port sur lequel l'applicationsera exécuter
const PORT = process.env.PORT || 5000;

// créer une route
app.get("/", (req, res) => {
  res.send("<h2>Welcome Friends</h2>");
});

//Démarer le serveur express
app.listen(PORT, () =>
  console.log(`Server running at http://localhost:${PORT}`)
);