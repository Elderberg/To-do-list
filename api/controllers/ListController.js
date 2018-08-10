/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    store: function (req, res) {
    var entry = req.param('eintrag');
    res.status(200);
    res.send('Du musst noch ' + entry + '!');
    
    
    
    },  

};

