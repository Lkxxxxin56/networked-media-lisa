const express = require('express'); 
const nunjucks = require('nunjucks'); 
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

nunjucks.configure('views', {
	autoescape: true,
	express: app,
});
app.set('view engine', 'njk');

app.get('/', (request, response)=>{
    response.render('index.njk')
})

app.listen(8080, ()=>{
    // to run the server:
    // 1. make sure you are in the correct folder
            // if you type pwd it should print out the path to class_14_demo
            // if it does not show class_14_demo, you need to navigate to the folder using cd
    // 2. in terminal use the starting command: node --watch server.js 
            // another way to do this is to add a script in package.json (go to that file and look at line 8)
    console.log('http://localhost:8080')
})
