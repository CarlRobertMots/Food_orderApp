import Button from "./UI/Button";

const MealItem = ({ meal }) => {
    const valuuta = new Intl.NumberFormat('et-EE',{
        style: 'currency',
        currency: 'EUR',
    });
    return (
        <li className="meal-item">
            <article>
                <img src={meal.image} alt={meal.name} />

                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-price">{valuuta.format(meal.price)}</p>
                    <p className="meal-description">{meal.description}</p>
                </div>

                <p>
                <Button textOnly={false}>Add to Cart</Button>
                </p>
            </article>
        </li>
    );
};

export default MealItem;
