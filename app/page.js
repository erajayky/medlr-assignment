"use client";

import { useEffect, useState } from "react";
import useFetch from "./useFetch";

export default function Home() {
 
  const [data, setData] = useState([]);
  const { fetchCsvData } = useFetch();

  useEffect(() => {
    fetchCsvData('./output.csv', setData);
  },[]);

console.log(data);

  return ( 
    <div>
        namaskar nextjs
        <h1>Data</h1>
        {data.map((medicine, idx) => (
          <div key={medicine.index}>
          <p className=" text-red-300">{idx}</p>
          <p>{medicine.Manufacturer}</p>
          </div>
        ))}
    </div>
  );
}
