import {Link} from "react-router-dom";
const NavBar = ()=>{
    return (
        <div style={{width: '100%', height: '50px',textDecoration:'none',display:'flex',padding: '1rem',gap: '15%',justifyContent: 'center',border: '1px solid black'}}>
            <Link to="/">Form</Link>
            <Link to="/dash">employe dash bord</Link>
            <Link to="/admin">Admin</Link>
        </div>
    )
}
export default NavBar