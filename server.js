const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = 6002;

app.use(bodyParser.json());

let products = [];

app.get('/', (req, res) => {
    res.send('Product Service is running');
});

app.get('/products', (req, res) => {
    res.json(products);
});

app.post('/products', (req, res) => {
    const { id, name, price } = req.body;
    products.push({ id, name, price });
    res.status(201).send('Product created successfully');
});

app.listen(PORT, () => {
    console.log(`Product Service is running on port ${PORT}`);
});
