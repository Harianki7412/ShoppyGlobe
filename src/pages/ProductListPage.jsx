import React, { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts'; // Custom hook for fetching products
import ProductItem from '../components/ProductItem';



function ProductListPage() {
  const { products, status, error } = useProducts(); // Use the custom hook

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  // Extract unique categories for filtering
  const categories = ['All', ...new Set(products.map(p => p.category))];

  useEffect(() => {
    let currentProducts = products;

    // Filter by selected category
    if (selectedCategory && selectedCategory !== 'All') {
      currentProducts = currentProducts.filter(
        (product) => product.category === selectedCategory
      );
    }

    // Filter by search query (title or description)
    if (searchQuery.trim() !== '') {
      const lowerCaseQuery = searchQuery.toLowerCase();
      currentProducts = currentProducts.filter(
        (product) =>
          product.title.toLowerCase().includes(lowerCaseQuery) ||
          product.description.toLowerCase().includes(lowerCaseQuery)
      );
    }
    setFilteredProducts(currentProducts);
  }, [products, searchQuery, selectedCategory]);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
    setSearchQuery(''); // Clear search when category changes
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
    setSelectedCategory(''); // Clear category when searching
  };

  if (status === 'loading') {
    return <div className="text-center py-8 text-xl text-gray-600">Loading products...</div>;
  }

  if (status === 'failed') {
    return (
      <div className="text-center py-8 text-xl text-red-600">
        Error: {error || 'Failed to fetch products. Please try again.'}
      </div>
    );
  }

  return (
    <div className="py-8">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-8">Our Products</h1>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-8 m-10">
        {/* Search Bar */}
        <input
          type="text"
          placeholder="Search by title or description..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="w-full sm:w-1/2 p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
        />

        {/* Category Filter */}
        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          className="w-full sm:w-auto p-3 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-pink-300 text-gray-700 transition-all duration-200"
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-xl text-gray-600 mt-10">No products found matching your criteria.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 m-15 justify-items-center">
          {filteredProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))}
        </div>
      )}
    </div>
  )
}

export default ProductListPage

