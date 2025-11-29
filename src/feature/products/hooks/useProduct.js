// import { useState, useEffect } from "react";
// import productService from "../services/product";

// export const useProducts = () => {
//   const [products, setProducts] = useState([]); 
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchProducts = async () => {
//       try {
//         setLoading(true);
//         const data = await productService.getAll(); 
        
//         setProducts(data);
//       } catch (err) {
//         setError(err.message || "Terjadi kesalahan");
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchProducts();
//   }, []); 

//   return { products, loading, error };
// };