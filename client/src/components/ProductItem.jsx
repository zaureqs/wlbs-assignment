import React from 'react'

const ProductItem = ({ product, onEdit, onDelete }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4">
      <h3 className="text-lg font-semibold mb-2">{product.name}</h3>
      <p className="text-gray-600 mb-1">SKU: {product.sku}</p>
      <p className="text-gray-600 mb-4">Quantity: {product.stock_quantity}</p>
      <div className="flex justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-3 rounded"
          onClick={() => onEdit(product)}
        >
          Edit
        </button>
        <button
          className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded"
          onClick={() => onDelete(product.Id)}
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default ProductItem

