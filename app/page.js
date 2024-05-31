"use client";

import { useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import Pagination from "@/components/Pagination";

export default function Home() {
 
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [currentData, setCurrentData] = useState([]);
  
  const { fetchCsvData } = useFetch();
  
  useEffect(() => {
    fetchCsvData('./output.csv', setData);
  },[]);
  useEffect(()=>{
    setCurrentData(data.slice(startIndex, startIndex + itemsPerPage));
  },[data])

  const handlePageChange = (page) => {
    handle();
    setCurrentPage(page);
  };
  const itemsPerPage = 10;

  const startIndex = (currentPage - 1) * itemsPerPage;


  const handle = () => {
    setCurrentData(data.slice(startIndex, startIndex + itemsPerPage));
  }

// console.log(data);

  return ( 
    <div>
        namaskar nextjs
        <h1>Data</h1>
        <h1>Paginated List</h1>
      <ul>
        {currentData.map(item => (
          <li key={item.id}>{item.Medicine_Name}</li>
        ))}
      </ul>
      <Pagination
        totalItems={data.length}
        itemsPerPage={itemsPerPage}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      />
    </div>
  );
}
