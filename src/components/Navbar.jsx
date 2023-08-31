import React from "react";

const Navbar=()=>
{
    return(
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-transparent">
                <div className="container-fluid">
                    <a className="navbar-brand" style={{ color: "white", fontWeight: 'bold', fontSize: '5vh' }}>My Movie</a>
                    <div className="ml-auto">
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="search " type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav>
        </>
    )

}

export default Navbar;