# Material för redesign av webbplats uppgift
=====
Arbeta med Node.js, Express och Pug
https://nodejs.org
http://expressjs.com/
https://pugjs.org

## För att komma igång
Började med att installera Node, se till att npm fins i din path.
Kör igång en powershell och testa. Vi kommer att använda oss av ett paket som heter Express-generator, för att skapa ett skelett för vår webbplats.
Kör `npm install express-generator -g` för att installera det.
När det är installerat kan du intiera din webbplats med, `express PROJEKTNAMN --view=pug`
Vi anger pug som view för det är den templat-motor vi ska använda.
Gör `cd projektnamn` och du kan nu starta ditt projekt med `node bin\www`

### Git
Eftersom vi jobbar med node är det viktiga med en .gitignore i ditt projekt, du vill inte ladda upp node_modules mappen.

#### Filer
Genomgång, men.
* Templater, dvs. den HTML som visas finns i views
* Applikationens ingång är bin\www -> app.js 
* Router hittar du i routes
* Bilder, js och css sparar du under public 