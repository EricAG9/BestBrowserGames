import React, { useState } from "react";

function GameRating () {

    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmitRanting({rating, comment});
        setRating(0);
        setComment('');
    };

    return (
        <div>
            <h3>Avaliação do Jogo</h3>
                <form onSubmit={handleSubmit}>
                    <select value={rating} onChange={(e) => setRating(parseInt(e.target.value))}>
                        <option value='1'>1</option>
                        <option value='2'>2</option>
                        <option value='3'>3</option>
                        <option value='4'>4</option>
                        <option value='5'>5</option>
                    </select>
                    <input value={comment} onChange={(e) => setComment(e.target.value)} placeholder='Digite seu comentário' />
                    <button type='submit'>Comentar</button>
                </form>
        </div>
    )
}

export default GameRating;