use Inventorydb;

CREATE TABLE IF NOT EXISTS products (
    Id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    sku VARCHAR(255) NOT NULL UNIQUE,
    stock_quantity INT NOT NULL
);

INSERT INTO products (name, sku, stock_quantity) VALUES
('Product A', 'SKU123', 100),
('Product B', 'SKU456', 50),
('Product C', 'SKU789', 200);