import React, { useState } from "react";
import './searchForm.css';

function SearchForm ({onSearch}) {

    const [searchTerm, setSearchTerm] = useState('');
    const [category, setCategory] = useState('');

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchTerm, category);
    }

    return (
        <div className="container">
            <h2>Buscar Jogos</h2>
            <form onSubmit={handleSearch}>
                <input type='text' placeholder="Buscar por Nome" value={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value='category'>Todas as Categorias</option>
                    <option value='action'>Ação</option>
                    <option value='adventure'>Aventura</option>
                </select>
                <div className="button">
                    <button type='submit'>Pesquisar</button>
                </div>
            </form>
        </div>
    )
}

export default SearchForm;
