var add = require('./mod.js');

// var twoAdded = add.addTwo(7); 
// console.log(twoAdded);


add.addTwo("four", function(err, result){
    if (err) throw err ;
    else { console.log(result) 
    }
})

