import style from "./Styles.module.css"

export default function login(){
    return(
        <div className={style.login}>
            
            <input
            name = "Username"
            type="text"
            placeholder="Username"
            />

            <input
            name = "Password"   
            type="password"
            placeholder="Password"
            />

            <button>Login</button>

        </div>
    )
}