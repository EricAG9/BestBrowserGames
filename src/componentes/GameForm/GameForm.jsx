import React, { useState, useEffect } from "react";
import './gameForm.css';
import SearchForm from "../SearchForm/SeachForm"; 

function GameForm() {
    const [formData, setFormData] = useState({
        name: '',
        category: '',
        description: ''
    });
    const [games, setGames] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [commentText, setCommentText] = useState(''); 
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        const existingGames = JSON.parse(localStorage.getItem('games')) || [];
        setGames(existingGames.map(game => ({
            ...game,
            comments: game.comments || [] ,
            isFavorite: favorites.includes(game.id)
        })));
    }, [favorites]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const existingGames = JSON.parse(localStorage.getItem('games')) || [];
        const newGame = {
            id: existingGames.length + 1,
            ...formData,
            comments: [],
            isFavorite: false
        }

    const updatedGames = [...existingGames, newGame];
        localStorage.setItem('games', JSON.stringify(updatedGames));
        setGames(updatedGames.map(game => ({
            ...game,
            comments: game.comments || [],
            isFavorite: favorites.includes(game.id)
        })));
        setFormData({ name: '', category: '', description: '' });
    };

    const handleAddComment = (id) => {
        if (!commentText) return;
        const updatedGames = games.map(game => {
            if (game.id === id) {
                return {
                    ...game,
                    comments: [...game.comments, commentText]
                };
            }
            return game;
        });
        localStorage.setItem('games', JSON.stringify(updatedGames));
        setGames(updatedGames);
        setCommentText('');
    };

    const handleFavorite = (id) => {
        setFavorites(prevFavorites => {
            if (prevFavorites.includes(id)) {
                return prevFavorites.filter(favId => favId !== id); // aqui ele vai remover o jogo dos favoritos
            } else {
                return [...prevFavorites, id]; // aqui ele vai adicionar o jogo aos favoritos
            }
        })
    }

    const handleSearch = (searchTerm, category) => {
        setSearchTerm(searchTerm);
    };

    const filteredGames = games.filter(game => 
        game.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <>
            <div className="search">
                <SearchForm onSearch={handleSearch} />
            </div>
            <div className="game-container">
                <h2>Adicionar Jogo</h2>
                <form onSubmit={handleSubmit}>
                    <input type='text' name='name' placeholder='Game Name' value={formData.name} onChange={handleChange} />
                    <input type='text' name='category' placeholder="Category" value={formData.category} onChange={handleChange} />
                    <input type='text' name='description' placeholder="Description" value={formData.description} onChange={handleChange} />
                    <button type='submit'>Adicionar</button>
                </form>
            </div>
            
            <div>
                <h2 className="jogos">Jogos</h2>
                
                <div className="container-games">
                    {filteredGames.map(game => (
                        <div key={game.id} className='game-card'>
                            <p><strong>Nome: </strong>{game.name}</p>
                            <p><strong>Categoria: </strong>{game.category}</p>
                            <p><strong>Descrição: </strong>{game.description}</p>
                            <div>
                                <input type="text" placeholder="Digite seu comentário" value={commentText} onChange={(e) => setCommentText(e.target.value)} />
                                <button onClick={() => handleAddComment(game.id)}> 
                                    Comentar
                                </button>
                            </div>
                            <div>
                                <h3>Comentários</h3>
                                <ul>
                                    {game.comments.map((comment, index) => (
                                        <li key={index}>{comment}</li>
                                    ))}
                                </ul>
                            </div>
                            <div>
                                <span 
                                    className={`favorite-icon ${game.isFavorite ? 'favorited' : ''}`}
                                    onClick={() => handleFavorite(game.id)}
                                >
                                   
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default GameForm;
