'use client'

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ProductList = ({ vendorEmail }:any) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.post('/api/v1/product/getvendorproducts', { email: vendorEmail });
        setProducts(response.data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [vendorEmail]);

  const handleEdit = async (productId:string) => {
    try {
      const response = await axios.post('/api/v1/product/edit-product', { productId });
      console.log('Edit product response:', response.data);
    } catch (error) {
      console.error('Error editing product:', error);
    }
  };

  const handleDelete = async (productId:string) => {
    try {
      const response = await axios.post('/api/v1/product/delete-product', { productId });
      console.log('Delete product response:', response.data);
    } catch (error) {
      console.error('Error deleting product:', error);
    }
  };

  return (
    <div className="container mx-auto px-12 py-6 font-poppin">
      <h1 className="text-2xl font-semibold mb-12">Product List</h1>
      <div className="grid grid-cols-5 gap-4">
        <div className="font-semibold">Sr. No.</div>
        <div className="font-semibold">Name</div>
        <div className="font-semibold">Price</div>
        <div className="font-semibold">Edit</div>
        <div className="font-semibold">Delete</div>
        {products.map((product:any, index:number) => (
          <React.Fragment key={product._id}>
            <div>{index + 1}</div>
            <div>{product.name}</div>
            <div>{product.price}</div>
            <div>
              <button
                onClick={() => handleEdit(product._id)}
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
              >
                Edit
              </button>
            </div>
            <div>
              <button
                onClick={() => handleDelete(product._id)}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                Delete
              </button>
            </div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default ProductList;