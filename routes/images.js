var express = require('express');
var router = require('router');
var fs = require('fs');
var path = require('path');

router.get('/:id', function(req, res, next){
    var id = req.params.id;

    var file = path.join(__dirname, '../models/images.json');

    fs.readFile(file, 'utf-8', function(err, data){
        if(err){
            next(err);
        } else{
            var obj = JSON.parse(data);
            obj.forEach(function(elem){
                if(elem.id == id){
                    image = elem;
                }
            });
            res.json(image);
        }
    })
});

module.exports = router;