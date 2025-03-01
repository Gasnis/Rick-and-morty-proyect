import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav.jsx";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail.jsx";
import Forms from "./components/Forms.jsx";

function App() {
	const [characters, setCharacters] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [totalPages, setTotalPages] = useState(1);
	const [searchTerm, setSearchTerm] = useState(""); // Estado para la búsqueda

	// Función para obtener personajes según la página
	function fetchCharacters(page = 1, name = "") {
		fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`)
			.then((response) => response.json())
			.then((data) => {
				setCharacters(data.results);
				setTotalPages(data.info.pages);
				setCurrentPage(page);
			});
	}

	// Función para la búsqueda de personajes
	function onSearch(characterName) {
		setSearchTerm(characterName);
		setCurrentPage(1); // Reiniciar la página a 1 al buscar
		fetchCharacters(1, characterName); // Buscar personajes por nombre
	}

	// Función para cerrar un personaje
	function onClose(id) {
		setCharacters((oldCharacters) =>
			oldCharacters.filter((char) => char.id !== id)
		);
	}

	// Función para cambiar a la página anterior
	function handlePrevPage() {
		if (currentPage > 1) {
			fetchCharacters(currentPage - 1, searchTerm);
		}
	}

	// Función para cambiar a la página siguiente
	function handleNextPage() {
		if (currentPage < totalPages) {
			fetchCharacters(currentPage + 1, searchTerm);
		}
	}

	useEffect(() => {
		fetchCharacters(); // Cargar los personajes iniciales al cargar la aplicación
	}, []);

	return (
		<div className="App" style={{ padding: "25px" }}>
			<Nav onSearch={onSearch} />

			<Routes>
				<Route path="/login" element={<Forms />} />
				<Route
					path="/"
					element={
						<>
							<Cards characters={characters} onClose={onClose} />
							<div
								style={{
									display: "flex",
									justifyContent: "center",
									alignItems: "center",
									marginTop: "20px",
								}}
							>
								{/* Botones de paginación */}
								<button
									onClick={handlePrevPage}
									disabled={currentPage === 1}
									style={{
										backgroundColor: "#4CAF50",
										color: "white",
										border: "none",
										padding: "10px 20px",
										fontSize: "16px",
										borderRadius: "5px",
										cursor: currentPage === 1 ? "not-allowed" : "pointer",
										opacity: currentPage === 1 ? 0.5 : 1,
										transition: "background-color 0.3s ease",
									}}
								>
									Anterior
								</button>
								<span
									style={{
										margin: "0 15px",
										color: "#fff",
										fontSize: "16px",
										fontWeight: "bold",
									}}
								>
									Página {currentPage} de {totalPages}
								</span>
								<button
									onClick={handleNextPage}
									disabled={currentPage === totalPages}
									style={{
										backgroundColor: "#4CAF50",
										color: "white",
										border: "none",
										padding: "10px 20px",
										fontSize: "16px",
										borderRadius: "5px",
										cursor:
											currentPage === totalPages ? "not-allowed" : "pointer",
										opacity: currentPage === totalPages ? 0.5 : 1,
										transition: "background-color 0.3s ease",
									}}
								>
									Siguiente
								</button>
							</div>
						</>
					}
				/>
				<Route path="/about" element={<About />} />
				<Route path="/detail/:detailId" element={<Detail />} />
			</Routes>
		</div>
	);
}

export default App;
