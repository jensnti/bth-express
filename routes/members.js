var express = require('express');
var router = express.Router();

var members = ['Anna-Karin', 'Birgitta', 'Carin', 'Gunilla', 'Karin', 'Katarina', 'Leenah', 'Ninne', 'Ulla'];
var mjson = require('../data/members.json');

/* GET users listing. */
router.get('/', function(req, res, next) {  
    res.render('member', { title: 'Medlemmar', data: members });
});

router.get('/:id', function(req, res, next) {
    switch(req.params.id.toLowerCase()) {
        case "anna-karin":
            console.log(mjson.members[0]);
            res.render('member', { title: 'Medlem', member: 'Anna-Karin', text: mjson.members[0].text});
            break;
    }
});

module.exports = router;
