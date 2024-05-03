const express = require('express')

var app = module.exports = express()
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.post('/contact_action', function (req, res) {
    console.log('>><<<(((@>', JSON.stringify(req.body));
    res.send('Hello World');
});

/* istanbul ignore next */
if (!module.parent) {
    app.listen(3000);
    console.log('Express started on port 3000');
}