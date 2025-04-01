import{ useEffect, useState } from "react";
import MealItem from "./MealItem";
import React from "react";

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
                <MealItem key={meal.id} meal={meal}   />
            ))}
        </ul>
    );
}

export default Meals;
