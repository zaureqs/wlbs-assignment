import React from 'react'
import ProductItem from './ProductItem'

const ProductList = ({ products, onEdit, onDelete }) => {
  if (!Array.isArray(products)) {
    return <div>No products available</div>;
  }

  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">Product List</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductItem
            key={product.Id}
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};


export default ProductList

