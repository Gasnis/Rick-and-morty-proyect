import {useState, useEffect} from "react"
import {useNavigate, useParams} from "react-router-dom"

export default function useDetail() {
    const {detailId} = useParams()  
    const navigate = useNavigate()
    const [character, setCharacter] = useState({})

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
            .then((response) => response.json())
            .then((char) => {
                if (char.name) {
                    setCharacter(char);
                } else {
                    window.alert('No hay personajes con ese ID');
                }
            })
            .catch((err) => {
                window.alert("Error",err);
            });
        return setCharacter({});
        }, [detailId]);    

        return (
            <div>
                <h1>Nombre: {character.name}</h1>
                <h2>Status: {character.status}</h2>
                <h2>Especie: {character.species}</h2>
                <h2>Genero: {character.gender}</h2>
                <h2>Origen: {character.origin?.name}</h2>
                <div>
                    <img src={character.image} alt={character.name}></img>
                </div>
                <button onClick={()=> navigate("/home")}>Volver</button>
            </div>
        )
    }
