import React from 'react';
import { Person } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div className="container-fluid">
                <h2 className="navbar-brand fs-2">Hotel Explorer</h2>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" style={{ textDecoration: 'none' }}>Home</a>
                        </li>
                    </ul>
                    <form className="d-flex px-3">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form>
                    <Link to='/login'>
                        <Person className="icon" color="lightgrey" size="30px" />
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;
