import { useEffect, useState } from "react";

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchMeals = async () => {
            try {
                const response = await fetch("http://localhost:3001/meals");
                if (!response.ok) {
                    throw new Error("Something went wrong!");
                }
                const data = await response.json();

                
                console.log(" Päringuga saadud andmed:", data);
                data.forEach((meal, index) => {
                    console.log(index, meal); 
                });

                setMeals(data);
            } catch (err) {
                setError(err.message);
            }
            setIsLoading(false);
        };

        fetchMeals();
    }, []);

    if (isLoading) return <p>Loading meals...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul id="meals">
            {meals.map((meal) => (
                <li key={meal.id}>
                    <h3>{meal.name}</h3>
                    <p>{meal.description}</p>
                    <p>€{meal.price.toFixed(2)}</p>
                </li>
            ))}
        </ul>
    );
}

export default Meals;
