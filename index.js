const express = require('express')
const jewelRoutes = require("./routes/jewelRoutes.js");

const app = express();

app.use(jewelRoutes);

app.listen(3000, () => {
    console.log("Servidor levantado en puerto 3000");
});
