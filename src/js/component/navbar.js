import React from "react";

const Navbar = () => {
    return (
        <>
           <nav className="navbar bg-dark fixed-top" data-bs-theme="dark">
                <nav className="navbar navbar-expand-lg">
                    <div className="d-flex justify-content-between w-100">
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
                    </div>
                </nav>
            </nav>
        </>
    )
}

export default Navbar;
