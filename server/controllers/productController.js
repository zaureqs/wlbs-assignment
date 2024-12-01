const db = require('../config/db');


exports.AddProduct = (req, res) => {
    const { name, sku, stock_quantity } = req.body;

    //Check duplicate SKU
    const checkSkuQuery = 'SELECT COUNT(*) AS count FROM products WHERE sku = ?';
    db.query(checkSkuQuery, [sku], (err, results) => {
        if (err) {
            console.error('Error checking SKU:', err.message);
            return res.status(500).send('Internal server error');
        }

        if (results[0].count > 0) {
            return res.status(400).send('SKU already exists');
        }

        // Check duplicate Name
        const checkNameQuery = 'SELECT COUNT(*) AS count FROM products WHERE name = ?';
        db.query(checkNameQuery, [name], (err, results) => {
            if (err) {
                console.error('Error checking Name:', err.message);
                return res.status(500).send('Internal server error');
            }

            if (results[0].count > 0) {
                return res.status(400).send('Product name already exists');
            }

            // Insert the new product
            const insertQuery = 'INSERT INTO products (name, sku, stock_quantity) VALUES (?, ?, ?)';
            db.query(insertQuery, [name, sku, stock_quantity], (err, result) => {
                if (err) {
                    console.error('Error inserting product:', err.message);
                    return res.status(500).send('Error inserting product');
                }

                res.status(201).send('Product inserted successfully');
            });
        });
    });
};


exports.GetProduct = (req, res) => {
    db.query('SELECT * FROM products', (err, results) => {
        if (err) {
            console.error('Error retrieving products:', err);
            res.status(500).send('Error retrieving products', err.message);
        } else {
            res.json(results);
        }
    });
};

exports.UpdateProduct = (req, res) => {
    const { Id } = req.params;
    const { name, sku, stock_quantity } = req.body;

    if (!Id) {
        return res.status(400).send('Id is required');
    }

    // Check duplicate SKU
    const checkSkuQuery = 'SELECT COUNT(*) AS count FROM products WHERE sku = ? AND Id != ?';
    db.query(checkSkuQuery, [sku, Id], (err, results) => {
        if (err) {
            console.error('Error checking SKU:', err.message);
            return res.status(500).send('Internal server error');
        }

        if (results[0].count > 0) {
            return res.status(400).send('SKU already exists');
        }

        // Check duplicate Name
        const checkNameQuery = 'SELECT COUNT(*) AS count FROM products WHERE name = ? AND Id != ?';
        db.query(checkNameQuery, [name, Id], (err, results) => {
            if (err) {
                console.error('Error checking Name:', err.message);
                return res.status(500).send('Internal server error');
            }

            if (results[0].count > 0) {
                return res.status(400).send('Product name already exists');
            }

            //update the product
            const updateQuery = 'UPDATE products SET name = ?, sku = ?, stock_quantity = ? WHERE Id = ?';
            db.query(updateQuery, [name, sku, stock_quantity, Id], (err, result) => {
                if (err) {
                    console.error('Error updating product:', err.message);
                    return res.status(500).send('Error updating product');
                }

                if (result.affectedRows > 0) {
                    return res.status(200).send('Product updated successfully');
                } else {
                    return res.status(404).send('Product not found');
                }
            });
        });
    });
};



exports.DeleteProduct = (req, res) => {
    const { Id } = req.params; 
    
    if (!Id) {
        return res.status(400).send('Product Id required !');
    }

    const deleteQuery = 'DELETE FROM products WHERE Id = ?';

    db.query(deleteQuery, [Id], (err, result) => {
        if (err) {
            console.error('Error deleting product:', err);
            return res.status(500).send('Error deleting product', err.message);
        }

        if (result.affectedRows > 0) {
            return res.status(200).send('Product deleted successfully');
        } else {
            return res.status(404).send('Product not found');
        }
    });
};