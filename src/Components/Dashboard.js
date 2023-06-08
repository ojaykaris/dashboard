import React from "react";
import "../App.css";
import "./dashboard.css";
import SearchIcon from "@mui/icons-material/Search";
function Dashboard() {
  return (
    <div className="dashboard">
      <header>
        <h2>Dashboard</h2>
        <input type="search" placeholder="Search here"></input>
      </header>
      <div className="financial-info">
        <div className="totalProcrossed">
          <p id="diff-p">3.1B</p>
          <p>Total Procrossed</p>
        </div>
        <div className="totalProcrossed" id="differnt-totalpro">
          <p id="diff-p">3.1M</p>
          <p>Total Procrossed</p>
        </div>
        <div className="totalProcrossed">
          <p id="diff-p">200k</p>
          <p>
            Total Pending <br></br> This Month
          </p>
        </div>
        <div className="totalProcrossed" id="differnt-totalpro">
          <p id="diff-p">$6k</p>
          <p>Total Income</p>
        </div>
      </div>
      <div className="info-table">
        <table className="table">
          <thead>
            <th>S.No</th>
            <th>Company</th>
            <th>Wallet</th>
            <th>Amount</th>
            <th>Status</th>
            <th>Active</th>
          </thead>
          <tbody>
            <tr>
              <td data-label="S.No">1</td>
              <td data-label="Company">SparkPay</td>
              <td data-label="Wallet">Crypto</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">2</td>
              <td data-label="Company">PayEasy</td>
              <td data-label="Wallet">PI</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">3</td>
              <td data-label="Company">GlamBeauty</td>
              <td data-label="Wallet">Core</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">4</td>
              <td data-label="Company">Karis king</td>
              <td data-label="Wallet">dont know</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">5</td>
              <td data-label="Company">Xavier</td>
              <td data-label="Wallet">dont know</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">6</td>
              <td data-label="Company">MCreynolds</td>
              <td data-label="Wallet">E-wallet</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">7</td>
              <td data-label="Company">Steve Kay</td>
              <td data-label="Wallet">dont know</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">7</td>
              <td data-label="Company">Trevor Noah</td>
              <td data-label="Wallet">dont know</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
            <tr>
              <td data-label="S.No">7</td>
              <td data-label="Company">Kelvin Hart</td>
              <td data-label="Wallet">dont know</td>
              <td data-label="Amount">1290K</td>
              <td data-label="Status">Master</td>
              <td data-label="Active">True</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Dashboard;
