require('dotenv').config()
const express = require('express');
const cors = require('cors');

const productRoutes = require('./routes/productRoutes');

const app = express();
const port = process.env.PORT || 5000;


// middlewares
app.use(cors());
app.use(express.json());


// routes
app.use('/products', productRoutes); 


app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});