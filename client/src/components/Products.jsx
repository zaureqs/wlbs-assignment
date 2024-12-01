import { useState, useEffect } from 'react';
import axios from 'axios';
import ProductList from './ProductList';
import ProductForm from './ProductForm';
import ErrorDialog from './ErrorDialog';

function Products({ setErrorMessage }) {
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState({
    title: "",
    message: "",
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`http://localhost:5000/products`);
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching products:', error.response?.data);

      // Check if the error response exists, and use it
      const errorMessage = error.response?.data || "Something went wrong while fetching products.";

      setError({
        title: "Error",
        message: errorMessage,
      });
    } finally {
      setLoading(false);
    }
  };

  const addProduct = async (product) => {
    try {
      await axios.post(`http://localhost:5000/products`, product);
      fetchProducts();
    } catch (error) {
      console.error('Error adding product:', error.response?.data);

      const errorMessage = error.response?.data || "Something went wrong while adding the product.";

      setError({
        title: "Error",
        message: errorMessage,
      });
    }
  };

  const updateProduct = async (Id, updatedProduct) => {
    try {
      await axios.patch(`http://localhost:5000/products/${Id}`, updatedProduct);
      fetchProducts();
      setEditingProduct(null);
    } catch (error) {
      console.error('Error updating product:', error.response?.data);

      const errorMessage = error.response?.data || "Something went wrong while updating the product.";

      setError({
        title: "Error",
        message: errorMessage,
      });
    }
  };

  const deleteProduct = async (Id) => {
    try {
      await axios.delete(`http://localhost:5000/products/${Id}`);
      fetchProducts();
    } catch (error) {
      console.error('Error deleting product:', error.response?.data);

      const errorMessage = error.response?.data || "Something went wrong while deleting the product.";

      setError({
        title: "Error",
        message: errorMessage,
      });
    }
  };

  if (loading) {
    return <div className="text-center mt-8">Loading...</div>;
  }

  if (error.message.length) {
    return (
      <ErrorDialog
        error={error}
        onClose={() => {
          setError({ title: "", message: "" });
          fetchProducts();
          setEditingProduct(null);
        }}
      />
    );
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Product Management</h1>
      <ProductForm
        onSubmit={editingProduct ? (product) => updateProduct(editingProduct.Id, product) : addProduct}
        initialProduct={editingProduct}
      />
      <ProductList
        products={products}
        onEdit={setEditingProduct}
        onDelete={deleteProduct}
      />
    </div>
  );
}

export default Products;