"use client"
import React from 'react'
import { useProducts } from '../hooks/useProduct'
import Card from '../components/Card'

const ProductsContainer = () => {
  const { products, loading } = useProducts()
  console.log(products)
  return (
    <div className='container bg-white mx-auto px-40'>
      <div>Ini Adalah List Products</div>
      {loading ? <div className='h-screen w-screen text-black font-bold bg-white flex justify-center items-center'>lagi loading</div> : <div className='grid grid-cols-4 gap-10'>
        {products.map(productData => (
          <Card product={productData}/>
        ))}
      </div> }
      
    </div>
  )
}

export default ProductsContainer