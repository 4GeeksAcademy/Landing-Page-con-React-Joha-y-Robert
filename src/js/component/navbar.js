import React from "react";

const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg d-flex justify-content-between bg-dark fixed-top mb-5" data-bs-theme="dark">
                <div>
                    <a className="navbar-brand text-secondary" href="#">Start Bootstrap</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </div>
                <div>
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active text-secondary" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">About</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary" href="#">Services</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-secondary">Contact</a>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
