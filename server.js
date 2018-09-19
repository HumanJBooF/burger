const express = require('express');
const parser = require('body-parser');
// express
const app = express();
const PORT = process.env.PORT || 3000;

app.use(parser.urlencoded({ extended: true }));
app.use(parser.json());

// static directory
app.use(express.static('public'));
// set up handlebars
const exphbs = require('express-handlebars');
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// routes



// Listen to our server
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`);
})