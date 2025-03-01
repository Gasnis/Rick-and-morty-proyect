import SearchBar from "./SearchBar.jsx"
import {Link} from "react-router-dom"
import style from "./Styles.module.css"

export default function Nav(props){
    return(
        <div className={style.nav}>
            <Link className={style.home} to={"/"}>
                <span>Home</span>
            </Link>


            <Link className={style.about} to={"/about"}>
                <span>About</span>
            </Link>    
                
            <Link className={style.home} to={"/login"}>
                <span>Login</span>
            </Link>
            <SearchBar onSearch={props.onSearch}></SearchBar>
            
        </div>
    )
}