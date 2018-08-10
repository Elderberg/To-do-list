/**
 * ListController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    
    store: function (req, res) {
    let entry = {eintrag: req.param('eintrag')};
    let respond = List.create({eintrag: entry.eintrag});
    res.status(200);
    // res.send(List.find({ eintrag: entry.name }));


    respond.then((Doener)=>{
        res.send(entry);
        
    });

    
    
    
    },  

};

