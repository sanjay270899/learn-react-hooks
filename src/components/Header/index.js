import React from 'react'
import { Link } from 'react-router-dom'
import '../../css/header.css'

function Header() {
    return (
        <div className="Header">
            <div className="Header-l">
                Learn-React-Hooks
            </div>
            <div className="Header-r">
                <Link to='references'><div className="Header-r-items">References</div></Link>
                <Link to='author'><div className="Header-r-items">Author</div></Link>
            </div>
        </div>
    )
}

export default Header
