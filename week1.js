// npm install request 
// mkdir data

var request = require('request');
var fs = require('fs');

console.log("ONE")

request('https://parsons.nyc/thesis-2018/', function(error, response, body){
    console.log("TWO")
    if (!error && response.statusCode == 200) {
        fs.writeFileSync('/home/ec2-user/environment/data/thesis.txt', body);
        console.log("THREE")
    }
    else {console.log("Request failed!")}
});

console.log("FOUR")