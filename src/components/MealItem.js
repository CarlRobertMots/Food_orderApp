const MealItem = ({ meal }) => {
    return (
        <li className="meal-item">
            <article>
                {/* Pildi kuvamine otse JSON-failist saadud teega */}
                <img src={meal.image} alt={meal.name} />

                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-price">€{parseFloat(meal.price).toFixed(2)}</p>
                    <p className="meal-description">{meal.description}</p>
                </div>

                <p>
                    <button className="add-to-cart">Add to Cart</button>
                </p>
            </article>
        </li>
    );
};

export default MealItem;
