import style from "./Styles.module.css";
import {Link} from "react-router-dom"


export default function Card(props) {
   return (
      
      <div className={style.card}>
         <button className={style.x} onClick={()=> props.onClose(props.id)}>X</button>
         <Link  className={style.link} to={`/detail/${props.id}`}>
         
            <h1 className={style.nombre}>{props.name}</h1>
         
         <img className={style.image} src={props.image} alt="" />
         <div>
            <h2 className={style.def}>{props.species} </h2>
            <h2 className={style.def}>{props.gender}</h2>
         </div>
         </Link>
      </div>
      
   );
}
