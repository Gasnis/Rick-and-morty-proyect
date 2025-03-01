import Card from "./Card";
import style from "./Styles.module.css";

export default function Cards(props) {
	const { characters , onClose} = props;
	console.log(characters)

	return (
		<div className={style.cards}>
			{characters.map(character => (
            //  { name, gender, species, image }
				<Card
					name={character.name}
					gender={character.gender}
					species={character.species}
					image={character.image}
               		key={character.id}
					id={character.id}
					onClose={onClose}
				/>
			))}
		</div>
	);
}
