import "./css/header.css";
import { Link } from "react-router-dom";

function Header(){
    return(
        <header>
            <h1 className="logo">Header</h1>
            <div>
                <Link to="/cadastro" className="link">Fazer cadastro</Link>
                <Link to="/login" className="link">Fazer login</Link>
            </div>
            
        </header>
    )
}

export default Header;