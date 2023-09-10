import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { getFilteredCategory } from "../api";
import { Preloader } from "../components/Preloader";
import { MealList } from "../components/MealList";


function Category() {
    const params = useParams();
    const { name } = params;

    const [meals, setMeals] = useState([]);

    const navigate = useNavigate();

    const handleGoBack = () => {
        // Перейти на предыдущую страницу
        navigate(-1);
    };

    useEffect(() => {
        getFilteredCategory(name)
            .then(data => {
                setMeals(data.meals)
            });
    }, [name]);

    return (
        <>
            {
                !meals.length ? <Preloader /> : (
                    <MealList meals={meals} />
                )
            }
            <div className="btn-wrap">
                <button className="btn" onClick={handleGoBack}>go back</button>
            </div>
        </>
    );
}

export { Category }