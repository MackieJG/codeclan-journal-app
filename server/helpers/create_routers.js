const express = require('express');
const ObjectID = require('mongodb').ObjectID

const createRouter = function (collection) {


    const router = express.Router()
  // handle index route 

    router.get('/' , (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status: 500, error: err})
        })
    })

    // handle index route 

    router.get('/:id' , (req, res) => {
        const id = req.params.id;

        collection
        .findOne({ _id: ObjectID(id)})
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status: 500, error: err})
        })
    })

  // handle post request

    router.post('/', (req, res) => {
        const newJournalData = req.body
        collection
        .insertOne(newJournalData)
        .then((result) => {
            res.json(result.ops[0])
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status:500, error:err})
        })
    })
// delete

    router.delete('/:id', (req, res) => {
        const id = req.params.id
        collection
        .deleteOne({_id: ObjectID(id) })
        .then(result => {
            res.json(result)
        })
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status:500, error:err})
        })
    })

    router.put('/:id', (req, res) => {
        const id = req.params.id;
        const updatedData = req.body;
  
        collection
        .updateOne({ _id: ObjectID(id) }, { $set: updatedData })
        .then((result) => {
            res.json(result)
          })
        .catch((err) => {
            console.log(err);
            res.status(500)
            res.json({status:500, error:err})
        })
      });

    return router
}

module.exports = createRouter