import React from "react";
import './Header.css';
import Logo from '../../assets/icons/images/logo.png'

function Header() {
    return (
        <header className="header-content header">
            <div className="logo-content">
                <img src={Logo} className="logo-content-img" alt="logo" />
                <div>
                    <span className="emp-text">EMPLOYEE</span><br/>
                    <span className="emp-text emp-payroll">PAYROLL</span>
                </div>
            </div>
        </header>
    )
}
export default Header;