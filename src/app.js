const express = require('express');
const app = express();
const fs = require('fs');
const PORT = process.env.PORT || 8000; // it requires when we are actually hosting the website.
const path = require('path');
const hbs = require('hbs');

// PUBLIC STATIC PATH....
const static_path = path.join(__dirname, "../public");
const template_path = path.join(__dirname, "../templates/views");
const partials_path = path.join(__dirname, "../templates/partials");

app.use(express.static(static_path));

app.set('view engine', 'hbs'); // now instead of static pages, pages inside views folder will render and will be dynamic.
app.set('views', template_path);   //because we changed the name from views to templates from the parent directory.
hbs.registerPartials(partials_path);




// ROUTING.....
app.get("/", (req, res)=>{
    // res.send("Welcome!");   //send used if we are working on static webpages
    res.render('index')    // render() used for dynamic webpages (hbs).
});

app.get("/about", (req, res)=>{
    res.render('about');
});

app.get("/weather", (req, res)=>{
    res.render('weather');
});

app.get("*", (req, res)=>{
    res.render('404error', {
        errorMsg: "OOPs, page not found"
    });
})

app.listen(PORT, ()=>{
    console.log(`listening to the port:${PORT}`);
});