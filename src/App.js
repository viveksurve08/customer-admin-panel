import React, { useState, useEffect } from "react";
import DateRangeFilter from "./components/DateRangeFilter";
import SearchFilter from "./components/SearchFilter";
import Table from "./components/Table";
import data from "./data.json";
import "./App.css";

const App = () => {
  const [filteredData, setFilteredData] = useState(data);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterParams, setFilterParams] = useState({
    fromDate: "",
    toDate: "",
    branch: "All",
    type: "All",
    status: "All",
  });

  useEffect(() => {
    const searchData = data.filter((item) =>
      item.id.toString().includes(searchTerm)
    );
    const dateFilteredData = searchData.filter((item) => {
      const formattedDate = item.date.split("-").reverse().join("-");
      const fromDateCondition =
        !filterParams.fromDate ||
        new Date(formattedDate) >= new Date(filterParams.fromDate);
      const toDateCondition =
        !filterParams.toDate ||
        new Date(formattedDate) <= new Date(filterParams.toDate);
      const branchCondition =
        filterParams.branch === "All" || item.branch === filterParams.branch;
      const typeCondition =
        filterParams.type === "All" || item.type === filterParams.type;
      const statusCondition =
        filterParams.status === "All" || item.status === filterParams.status;

      return (
        fromDateCondition &&
        toDateCondition &&
        branchCondition &&
        typeCondition &&
        statusCondition
      );
    });
    console.log("Search Term:", searchTerm);
    console.log("Filter Params:", filterParams);
    console.log("Filtered Data:", dateFilteredData);
    setFilteredData(dateFilteredData.length > 0 ? dateFilteredData : []);
  }, [searchTerm, filterParams]);
  const handleFilterChange = (params) => {
    setFilterParams(params);
  };
  const totalItems = filteredData.length;

  const handleDelete = (itemId) => {
    const updatedData = filteredData.filter((item) => item.id !== itemId);
    setFilteredData(updatedData);
  };

  return (
    <div>
      <SearchFilter onSearch={setSearchTerm} />
      <p>Total ({totalItems})</p>
      <DateRangeFilter onFilterChange={handleFilterChange} />
      {filteredData.length > 0 ? (
        <Table filteredData={filteredData} onDelete={handleDelete} />
      ) : (
        <p>Data is not available.</p>
      )}
    </div>
  );
};

export default App;
