let express = require('express');

// Load User model
const category = require('../schemas/categorySchema');

module.exports = {
    getAll: function(req, res) {
        category.find().then((c) => {
            res.json(c)
        }).catch((err) => {
            res.status(400).send(err)
        })
    },
    add: function(req, res) {
        let cat = new category({
            name: req.body.name,
        }, {
            _id: false
        });
        cat.save().then((doc) => {
            res.send(doc);
        }).catch((e) => {
            res.status(400).send(e);
        });

    },
    edit: function(req, res) {
        User.findOneAndUpdate({
                _id: req.params.id
            }, {
                $set: {
                    ...req.body
                }
            }).then((u) => res.send('edited'))
            .catch((err) => res.send(err))
    },
    delete: function(req, res) {
        User.findOneAndRemove({
                _id: req.params.id
            }).then((u) => res.send('deleted'))
            .catch((err) => res.send(err))
    }
}