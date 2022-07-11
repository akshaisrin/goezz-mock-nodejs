const express = require('express');
const app = express();
const cookieParser = require("cookie-parser");

const twilioRoutes = require('./routes/twilioRoutes');

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// CORS
app.use((req, res, next) => {
    const origin = req.headers.origin;

    // Domains allowed to call API
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'content-type, content-length, authorization, accept, x-requested-with');
    next();
});

app.get('/', (req, res) => {
    res.send('Server is active');
});

app.use('/api/twilio', twilioRoutes);

let port = process.env.PORT || 3306;
app.listen(port, () => {
    console.log(`Running on port ${port}`);
});