import React from "react";
import {Link} from "react-router-dom";
const Header = () => {
    return (
        <>
            <nav className="nav">
                <Link to="/">
                    <h1>Logo</h1>
                </Link>
            </nav>
        </>
    )
}
export default Header