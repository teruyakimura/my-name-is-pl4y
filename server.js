
const express = require('express');

const app = express();

app.use(express.static('./dist/my-name-is-pl4y'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/my-name-is-pl4y/'}),
);

app.listen(process.env.PORT || 8080);