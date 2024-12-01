import React, { useState, useEffect } from 'react'

const ProductForm = ({ onSubmit, initialProduct }) => {
  const [product, setProduct] = useState({
    name: '',
    sku: '',
    stock_quantity: 0,
  })

  useEffect(() => {
    if (initialProduct) {
      setProduct(initialProduct)
    } else {
      setProduct({ name: '', sku: '', stock_quantity: 0 })
    }
  }, [initialProduct])

  const handleChange = (e) => {
    const { name, value } = e.target
    setProduct((prev) => ({ ...prev, [name]: name === 'stock_quantity' ? parseInt(value) : value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(product)
    setProduct({ name: '', sku: '', stock_quantity: 0 })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <h2 className="text-2xl font-bold mb-4">{initialProduct ? 'Edit Product' : 'Add New Product'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <input
          type="text"
          name="name"
          value={product.name}
          onChange={handleChange}
          placeholder="Product Name"
          className="border rounded p-2"
          required
        />
        <input
          type="text"
          name="sku"
          value={product.sku}
          onChange={handleChange}
          placeholder="SKU"
          className="border rounded p-2"
          required
        />
        <input
          type="number"
          name="stock_quantity"
          value={product.stock_quantity}
          onChange={handleChange}
          placeholder="Quantity"
          className="border rounded p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="mt-4 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded"
      >
        {initialProduct ? 'Update Product' : 'Add Product'}
      </button>
    </form>
  )
}

export default ProductForm

