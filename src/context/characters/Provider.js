import CharacterContext from "./index";
import { useState } from "react";

//Fetch
import apiCall from "../../api";

export default function CharacterProvider({children}) {
    const [characters, setCharacters] = useState([]);

    const getCharacters = async () => {
        try {
            const charactersResult = await apiCall({
                url: "https://rickandmortyapi.com/api/character"
            });
            setCharacters(charactersResult.results);
        } catch (error) {
            setCharacters([]);
        }
    }

    return (
        <CharacterContext.Provider value={{ getCharacters, characters }}>
            {children}
        </CharacterContext.Provider>
    );
}