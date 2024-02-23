function GameReview ({reviews}) {
    return (
        <div>
            <h3>Avaliações</h3>
            {reviews.map((review, index) => {
                <div key={index}>
                    <p><strong>Avaliação:</strong> {review.rating} estrelas</p>
                    <p><strong>Comentários:</strong> {review.rating} </p>
                </div>
            })}
        </div>
    )
}

export default GameReview;