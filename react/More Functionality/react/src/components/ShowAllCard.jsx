import React, { useState } from 'react';
import useFetch from '../hooks/useFetch';
import Card from './Card';

const ShowAllCard = () => {
    const { data, loading, error } = useFetch('https://fakestoreapi.com/products');
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [sortOption, setSortOption] = useState('');

    const itemsPerPage = 10;

    // Filter data based on search query
    const filteredData = data.filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Sort data based on the selected option
    const sortedData = [...filteredData].sort((a, b) => {
        if (sortOption === 'priceLow') return a.price - b.price;
        if (sortOption === 'priceHigh') return b.price - a.price;
        if (sortOption === 'titleAZ') return a.title.localeCompare(b.title);
        if (sortOption === 'titleZA') return b.title.localeCompare(a.title);
        return 0;
    });

    // Pagination Logic
    const totalPages = Math.ceil(sortedData.length / itemsPerPage);
    const displayedData = sortedData.slice((page - 1) * itemsPerPage, page * itemsPerPage);

    if (loading) {
        return (
            <div className="flex justify-center items-center min-h-screen">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex justify-center items-center min-h-screen text-red-500">
                <p>Error: {error.message}</p>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Search & Sorting Controls */}
            <div className="flex justify-between items-center mb-6">
                <input 
                    type="text"
                    placeholder="Search products..." 
                    value={searchQuery}
                    onChange={(e) => {
                        setSearchQuery(e.target.value);
                        setPage(1); // Reset to first page on search
                    }}
                    className="px-4 py-2 border rounded-md w-full max-w-md"
                />
                <select 
                    value={sortOption} 
                    onChange={(e) => setSortOption(e.target.value)} 
                    className="px-4 py-2 border rounded-md ml-4"
                >
                    <option value="">Sort By</option>
                    <option value="priceLow">Price: Low to High</option>
                    <option value="priceHigh">Price: High to Low</option>
                    <option value="titleAZ">Title: A-Z</option>
                    <option value="titleZA">Title: Z-A</option>
                </select>
            </div>

            {/* Cards Display */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {displayedData.length > 0 ? (
                    displayedData.map(({ id, title, image, price }) => (
                        <Card key={id} title={title} image={image} price={price} />
                    ))
                ) : (
                    <p className="text-center col-span-full text-gray-500">No products found.</p>
                )}
            </div>

            {/* Pagination Controls */}
            {sortedData.length > 0 && totalPages > 1 && (
                <div className="flex justify-center items-center mt-8 space-x-2">
                    <button 
                        className={`px-4 py-2 border ${page === 1 ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`} 
                        onClick={() => setPage(prev => Math.max(prev - 1, 1))}
                        disabled={page === 1}
                    >
                        ◀
                    </button>
                    
                    {[...Array(totalPages)].map((_, i) => (
                        <button
                            key={i}
                            className={`px-4 py-2 border ${page === i + 1 ? 'bg-blue-500 text-white' : 'hover:bg-gray-200'}`}
                            onClick={() => setPage(i + 1)}
                        >
                            {i + 1}
                        </button>
                    ))}

                    <button 
                        className={`px-4 py-2 border ${page === totalPages ? 'opacity-50 cursor-not-allowed' : 'hover:bg-gray-200'}`} 
                        onClick={() => setPage(prev => Math.min(prev + 1, totalPages))}
                        disabled={page === totalPages}
                    >
                        ▶
                    </button>
                </div>
            )}
        </div>
    );
};

export default ShowAllCard;