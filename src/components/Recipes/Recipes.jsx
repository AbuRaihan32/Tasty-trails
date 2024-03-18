import { useEffect, useState } from "react";
import Cook from "../Cook/Cook";
import Recipe from "../Recipe/Recipe";
import CurrentCooking from "../CurrentCooking/CurrentCooking";

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cook, setCook] = useState([]);
    const [cooking, setCooking] = useState([])

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(recipe => setRecipes(recipe))
    }, []);

    const handleCookBtn = (recipe) => {
        const isExist = cook.find(c => c.id == recipe.id);
        if (isExist) {
            alert('Already Exist Sir!')
        } else {
            const newCook = [...cook, recipe];
            setCook(newCook)
        }
    };

    const handlePreparing = (id) => {
        const currentCook = cook.filter(cc => cc.id !== id);
        setCook(currentCook)
        const clickedPreparing = cook.find(Cp => Cp.id == id);
        const NewCooking = [...cooking, clickedPreparing]
        setCooking(NewCooking)
    };
    return (
        <div className="text-center mt-14 space-y-3">
            <h1 className="text-4xl font-semibold">Our Recipes</h1>
            <p className="max-w-[60%] mx-auto mt-7">Food is one thing on which human physical health depends, so take our food safely to keep the body healthy. Wishing you well.</p>

            {/* recipes Container */}
            <div className="flex gap-5">
                <div className="w-[60%] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5">
                    {
                        recipes.map((rec, idx) =>
                            <Recipe
                                key={idx}
                                handleCookBtn={handleCookBtn}
                                recipe={rec}>
                            </Recipe>)
                    }
                </div>
                {/* cook cart container */}
                <div className="w-[40%] border rounded-2xl pt-5">
                    <Cook
                        cook={cook}
                        handlePreparing={handlePreparing}
                    ></Cook>
                    {/* current cooking */}
                    <div className="mt-12">
                        <div className="w-[80%] mx-auto border-b-2 pb-3 mb-3">
                            <h1 className="text-2xl font-semibold">Current Cooking : {cooking.length}</h1>
                        </div>
                        <div>
                            <ul className="flex justify-around px-4">
                                <li className="w-[15%]">No.</li>
                                <li className="w-[35%]">Name</li>
                                <li className="w-[25%]">Time</li>
                                <li className="w-[25%]">Calories</li>
                            </ul>
                        </div>
                    </div>
                    {
                        cooking.map((current, idx) => <CurrentCooking
                            key={idx}
                            idx={idx}
                            current={current}>
                        </CurrentCooking>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Recipes;