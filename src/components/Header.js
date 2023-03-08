import AuthNav from "./Auth/AuthNav";


function Header()
{
    return(
        <header>
            <div className="header">
            Unifinder - Find your dream university
            <AuthNav/>
            </div>
        </header>
    )
}


export default Header;