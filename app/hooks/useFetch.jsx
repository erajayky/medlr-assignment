import Papa from "papaparse";

const useFetch = () => {
  const fetchCsvData = async (filepath, callback) => {
    const response = await fetch(filepath);
    const reader = response.body.getReader();
    const result = await reader.read();
    const decoder = new TextDecoder("utf-8");
    const csvString = decoder.decode(result.value);
    const { data } = Papa.parse(csvString, {
      header: true,
      dynamicTyping: true,
    });
    callback(data);
  };

  return { fetchCsvData };
};

export default useFetch;
