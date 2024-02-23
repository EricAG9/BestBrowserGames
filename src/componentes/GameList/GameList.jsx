import React, { useState } from "react";
import GameRating from "../GameRating/GameRating";
import GameReview from "../GameReview/GameReview";

function GameList ({games, onRateGame}) {

    const handleRatingSubmit = ({games, ratingData}) => {
        onRateGame(index, ratingData);
    }

    return (
        <div>
            <h2>Lista de Jogos</h2>
            {games.map((game, index) => {
                <div key={index}>
                    <h3>{game.name}</h3>
                    <p><strong>Categoria:</strong>{game.category}</p>
                    <p>{game.description}</p>
                    <GameRating onSubmitRating={(ratingData) => handleRatingSubmit(index, ratingData)} />
                    <GameReview reviews={game.rating} />
                </div>
            })}
        </div>
    )
}

export default GameList;