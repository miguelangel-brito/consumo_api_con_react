import { useEffect, useState } from "react";

const MiApi = () => {

    const [character, setCharacter] = useState([]);
    const [search, setSearch] = useState('')

    const getData = async () => {
        const res = await fetch("https://rickandmortyapi.com/api/character")
        const data = await res.json();
        setCharacter(data.results);
    };


    useEffect(() => {
        getData();
    }, [])
    return (
        <div>
            <h3 className="text-danger-emphasis text-center">
                Elige tu Personaje Favorito</h3>
            <input
                className="text-center"
                type="text"
                placeholder="buscar..."
                onChange={(e) => setSearch(e.target.value)}
                value={search}
            />

            <ul className="p-3 mb-2 bg-warning text-center">
                {character
                    .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                        <li key={item.id}>{item.name}</li>
                    ))}
            </ul>
        </div>
    );
};
export default MiApi;