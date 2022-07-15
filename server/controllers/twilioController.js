exports.sendCode = async (req, res) => {
    try {
        const { PhoneNumber } = req.body;
        res.status(200).json({
            message: `Successfully received number: ${PhoneNumber}`
        })
    }
    
    catch {
        throw new Error('Error: Could not send code')
    }
}

// MySQL Connection

const username="Akshai";
const password="$M6h4r6j";
const db="goEzz_dev";
var mysql = require('mysql');

var con = mysql.createConnection({
host: "p3nlmysql105plsk.secureserver.net",
port: 3306,
user: username,
password: password,
database: db
});
var valid=false;
con.connect(function(err) {
if (err) throw err;
console.log("Connected!");

// MySQL Phone Number Validation

con.query("SELECT * FROM driverinfo_m", function (err, result, fields) {
    if (err) throw err;
    for (let i=0; i<result.length; i++) {
        if (result[i]['CONTACTNO'] === PhoneNumber) {
            valid=true; 
        }

    }
    if (valid) {
        console.log("Valid Phone Number")

        // OTP Sending

        const accountSid = 'AC5e6d36ebca6b99637d7b227f1a5dc8bd';
        const authToken = '3d37bb2d419bc8515baa5ec716db9a38';
        const client = require('twilio')(accountSid, authToken);
        client.lookups.v1.phoneNumbers(PhoneNumber)
            .fetch({countryCode: 'US'})
            .then(client.verify.services('VA0a141f234e406db2a123218395fd1b88')
            .verifications
            .create({to: "+1"+PhoneNumber, channel: 'sms'})
            .then(console.log("OTP Sent")));
        return res.status(200).json({ message: "Successfully Sent OTP" });
    }

    else {
        return res.status(404).json({ err: "Invalid Phone Number"});
    }
    }); 
});


