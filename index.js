
const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const reservations = [];



app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'home.html')));

app.get('/tables', (req, res) => res.sendFile(path.join(__dirname, 'tables.html')));

app.get('/reserve', (req, res) => res.sendFile(path.join(__dirname, 'reserve.html')));

app.get('/api/reserve', (req, res) => res.json(reservations))

app.post('/api/reserve', (req, res) => {
    const newReservation = req.body;
    
    reservations.push(newReservation)
   
    res.json(reservations)    
})

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));