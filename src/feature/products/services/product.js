import api from "@/shared/services/core";



const productService = {
  getAll: async () => {
    try {
      const { data } = await api.get('/products');
      return data;
    } catch (error) {
      console.error('Error fetching products:', error);
      throw error;
    }
  },
};

export default productService;