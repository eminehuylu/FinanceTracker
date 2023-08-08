import React from "react";
import { connect } from "react-redux";
import "./navbar.css"; // Stil dosyasını import edin (Yolu düzeltildi)

const Navbar = ({ rates, operations, currency, total }) => {
  return (
    <div className="navbar">
      <div>
        <h4 className="navbar-title">Finance Tracker</h4>
      </div>
      <div>
        <p className={`navbar-balance ${Number(total) >= 0 ? "text-green-200" : "text-red-200"}`}>
          Balance: {total}
          {currency}
        </p>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  const { rates, operations, currency, total } = state.finance;
  return { rates, operations, currency, total };
};

export default connect(mapStateToProps)(Navbar);
