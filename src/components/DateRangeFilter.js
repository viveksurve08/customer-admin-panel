import React, { useState } from "react";
import Dropdown from "./Dropdown";
const DateRangeFilter = ({ onFilterChange }) => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [branch, setBranch] = useState("All");
  const [type, setType] = useState("All");
  const [status, setStatus] = useState("All");
  const handleFilterChange = () => {
    const fromDateObject = new Date(fromDate);
    const toDateObject = new Date(toDate);

    if (!fromDate || !toDate || fromDateObject <= toDateObject) {
      onFilterChange({ fromDate, toDate, branch, type, status });
    } else {
      alert("Invalid date range. Please select a valid range.");
    }
  };

  return (
    <div className="dateRangeFilterContainer">
      <div className="dateFilter">
        <label htmlFor="fromDate">From:</label>
        <input
          type="date"
          id="fromDate"
          value={fromDate}
          onChange={(e) => setFromDate(e.target.value)}
        />
      </div>

      <div className="dateFilter">
        <label htmlFor="toDate">To:</label>
        <input
          type="date"
          id="toDate"
          value={toDate}
          onChange={(e) => setToDate(e.target.value)}
        />
      </div>

      <Dropdown
        label="Branch"
        options={[
          "All",
          "Thane",
          "Navi Mumbai",
          "Mumbai",
          "Kurla",
          "Vile Parle",
          "Lower Parel",
          "Andheri",
          "Byculla",
        ]}
        value={branch}
        onChange={(e) => setBranch(e.target.value)}
      />

      <Dropdown
        label="Type"
        options={["All", "Full", "Short"]}
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <Dropdown
        label="Status"
        options={["All", "Pending", "Approved", "Rejected"]}
        value={status}
        onChange={(e) => setStatus(e.target.value)}
      />
      <button className="search_btn" onClick={handleFilterChange}>
        Search
      </button>
    </div>
  );
};
export default DateRangeFilter;
