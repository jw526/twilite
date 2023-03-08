import {Link} from 'react-router-dom'

function Navigation()
{
    return(
        <div className="navbar">

            <Link className="navlink" to="/">Home</Link>
            <Link className="navlink" to="/college">University Info</Link>
            <Link className="navlink" to="/admin">Admin Dashboard</Link>
            <Link className="navlink" to="/about">About</Link>
            <Link className="navlink" to="/demo1">Demo Route1</Link>
            <Link className="navlink" to="/demo2">Demo Route2</Link>
        </div>
    )
}

export default Navigation