const express = require('express');
const app = express();

const cors = require('cors');
app.use(cors());
app.use(express.json())

const MongoClient = require('mongodb').MongoClient;
const createRouter = require('./helpers/create_routers.js');

MongoClient.connect('mongodb://127.0.0.1:27017', { useUnifiedTopology: true })
    .then((client) => {
        const db = client.db('codeclan_journal');
        const entriesCollection = db.collection('entries');
        const entriesRouter = createRouter(entriesCollection);
        app.use('/api/entries', entriesRouter);
    })
    .catch(console.error);

app.listen(9000, function () {
    console.log(`Listening on Port ${this.address().port}`);
});