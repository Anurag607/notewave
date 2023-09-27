import React, { useState } from 'react';
import { PaginationProps } from '../../utlis/types';

const Pagination: React.FC<PaginationProps> = ({ data, itemsPerPage }) => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(data.length / itemsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const paginatedData = data.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="flex flex-col items-start justify-between relative w-full h-full px-4">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4">
        {paginatedData.map((item, index) => (
            <div key={index} className="bg-white p-4 shadow-md rounded-md">
            <h2 className="text-lg font-semibold">{item.title}</h2>
            <p>{item.note}</p>
            </div>
        ))}
        </div>
        <div className="w-full h-fit flex justify-center mt-4">
            {Array.from({ length: totalPages }, (_, index) => (
            <button
                key={index}
                className={`mx-2 px-2 py-1 rounded-full ${
                currentPage === index + 1 ? 'bg-[#ff9b73] dark:bg-blue-400 text-white' : 'bg-gray-300'
                }`}
                onClick={() => handlePageChange(index + 1)}
            >
                {index + 1}
            </button>
            ))}
        </div>
    </div>
  );
};

export default Pagination;
