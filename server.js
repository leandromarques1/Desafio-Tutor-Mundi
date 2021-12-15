const http = require('http')
const fs = require('fs')
const path = require('path') //para criar o melhor caminho

/*
http.createServer((req, res) => {
    fs.readFile('./etapas_projeto.html', 
        (err, content) => {
            if(err) throw err;
            res.end(content)
    })    
}).listen(5000, ()=> {console.log('Server is running..')})
*/

/*
http.createServer((req, res) => {
    fs.readFile('./index.html', 
        (err, content) => {
            if(err) throw err;
            res.end(content)
        }) 
    fs.readFile('./style.css', 
        (err, content) => {
        if(err) throw err;
        res.end(content)
            })   
}).listen(5000, ()=> {console.log('Server is running..')})

*/

/*
http.createServer((req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
    
    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err
            res.end(content)
        }
    )
}).listen(5000, ()=> {console.log('Server is running..')})
*/


const express = require('express');  
const app = express() 

app.get('/', (req, res) => {
    const file = req.url === '/' ? 'index.html' : req.url
    const filePath = path.join(__dirname, 'public', file)
    
    fs.readFile(
        filePath,
        (err, content) => {
            if(err) throw err
            res.end(content)
        }
    )
})

app.listen(5000, ()=> {console.log('Server is running..')});
