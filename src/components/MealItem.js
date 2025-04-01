import Button from "./UI/Button";
import CartContext from "../store/CartContext";
import { useContext } from "react"; 

const MealItem = ({ meal }) => {
    const cartCtx = useContext(CartContext);

    const addToCartHandler = () => {
        cartCtx.addItem({
            id: meal.id,
            name: meal.name,
            price: meal.price,
        });
    };

    const valuuta = new Intl.NumberFormat('et-EE',{
        style: 'currency',
        currency: 'EUR',
    });

    return (
        <li className="meal-item">
            <article>
            <img src={`/${meal.image}`} alt={meal.name} />


                <div>
                    <h3>{meal.name}</h3>
                    <p className="meal-price">{valuuta.format(meal.price)}</p>
                    <p className="meal-description">{meal.description}</p>
                </div>

                <p>
                    <Button textOnly={false} onClick={addToCartHandler}>
                        Add to Cart
                    </Button>
                </p>
            </article>
        </li>
    );
};

export default MealItem;
