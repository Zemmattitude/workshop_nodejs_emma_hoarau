const http = require('http')

http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html')
    if (req.url == '/accueil') {
        res.write('Bienvenue sur l accueil')
    }
    if (req.url == '/logo') {
        res.write('<img src="https://www.epitech.eu/wp-content/themes/epitech-refonte/assets/images/hero-home-epitech-hero-boy.png">')
    }
    if (req.url == '/profile') {
        res.write('Bienvenue sur votre profile')
    }
    res.write('Hello World!')
    res.end();
}).listen(3001, 'localhost')

console.log("Serveur créer")