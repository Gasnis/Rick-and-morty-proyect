// import style from "./Styles.module.css";
import {useState} from "react";


export default function SearchBar(props) {
	const [character, setCharacter] = useState("") 

	function handleChange(event) {
		setCharacter(event.target.value);
	}

	return (
		<div>
			<input type="search" value={character} onChange={handleChange} />
			<button onClick={() => props.onSearch(character)}>
			Buscar
			</button>
		</div>
	);
}
