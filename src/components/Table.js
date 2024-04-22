import React from "react";
import { GiCancel } from "react-icons/gi";
const Table = ({ filteredData, onDelete }) => {
  return (
    <div className="table-container">
      <table className="transaction-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>DATE</th>
            <th>BRANCH</th>
            <th>TYPE</th>
            <th>AMOUNT (IN RUPEES)</th>
            <th>BANK</th>
            <th>REQUESTED BY (EMPLOYEE CODE)</th>
            <th>STATUS</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item, index) => (
            <tr key={index}>
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.branch}</td>
              <td>{item.type}</td>
              <td>{item.amount}</td>
              <td>{item.bank}</td>
              <td>
                {item.requestedBy}
                <div>{item.empcode}</div>
              </td>

              <td>{item.status}</td>
              <td>
                <button
                  className="cancel_btn"
                  onClick={() => onDelete(item.id)}
                >
                  <GiCancel />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
