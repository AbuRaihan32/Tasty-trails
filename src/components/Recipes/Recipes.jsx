import { useEffect, useState } from "react";
import Cook from "../Cook/Cook";
import Recipe from "../Recipe/Recipe";
import CurrentCooking from "../CurrentCooking/CurrentCooking";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Recipes = () => {
    const [recipes, setRecipes] = useState([]);
    const [cook, setCook] = useState([]);
    const [cooking, setCooking] = useState([]);
    const [time, setTime] = useState(0);
    const [calories, setCalories] = useState(0)

    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(recipe => setRecipes(recipe))
    }, []);

    const handleCookBtn = (recipe) => {
        const isExist = cook.find(c => c.id == recipe.id);
        if (isExist) {
            toast('You cannot select the same item more than once!')
        } else {
            const newCook = [...cook, recipe];
            setCook(newCook);
        }
    };

    const handlePreparing = (id) => {
        const currentCook = cook.filter(cc => cc.id !== id);
        setCook(currentCook)
        const clickedPreparing = cook.find(Cp => Cp.id == id);
        const isExist = cooking.find(c => c.id == id);
        if (isExist) {
            toast('This item already in Current Cooking!')
        } else {
            const NewCooking = [...cooking, clickedPreparing]
            setCooking(NewCooking)
            DisplayTotal(clickedPreparing)
        }
    };

    const DisplayTotal = (clickedPreparing) => {
        const totalCal = calories + clickedPreparing.calories;
        setCalories(totalCal)

        const minuteText = clickedPreparing.cooking_time.slice(0, 2);
        const minuteNum = parseInt(minuteText);
        const totalTime = time + minuteNum;
        setTime(totalTime)
    }
    return (
        <div className="text-center mt-14 space-y-3">
            <h1 className="text-4xl font-semibold">Our Recipes</h1>
            <p className="lg:max-w-[60%] mx-auto mt-7">Food is one thing on which human physical health depends, so take our food safely to keep the body healthy. Wishing you well.</p>

            {/* recipes Container */}
            <div className="flex gap-5 flex-col md:flex-row lg:flex-row">
                <div className="md:w-[60%] lg:w-[60%] grid md:grid-cols-2 lg:grid-cols-2 gap-5">
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
                <div className="md:w-[40%] lg:w-[40%] rounded-2xl pt-5 border">
                    <Cook
                        cook={cook}
                        handlePreparing={handlePreparing}
                    ></Cook>
                    {/* current cooking */}
                    <div className="mt-12">
                        <div className="w-[80%] mx-auto border-b-2 pb-3 mb-3">
                            <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">Current Cooking : {cooking.length}</h1>
                        </div>
                        <div className="">
                            <table className="">
                                <thead>
                                    <tr className="w-full">
                                        <th className="w-[10%] px-3 md:px-5 lg:px-5">No.</th>
                                        <th className="w-[20%] px-3 md:px-5 lg:px-5">Name</th>
                                        <th className="w-[20%] px-3 md:px-5 lg:px-5">Time</th>
                                        <th className="w-[20%] px-3 md:px-5 lg:px-5">Calories</th>
                                    </tr>
                                </thead>
                            </table>
                        </div>
                    </div>
                    {
                        cooking.map((current, idx) => <CurrentCooking
                            key={idx}
                            idx={idx}
                            current={current}>
                        </CurrentCooking>)
                    }
                    <hr className="mt-7 w-[90%] mx-auto" />
                    <div className="flex gap-5 text-start justify-end mr-4 mt-2 font-semibold">
                        <div>
                            <p>Total Times = </p>
                            <p className="text-center"> {time} minutes </p>
                        </div>
                        <div>
                            <p>Total Calories = </p>
                            <p className="text-center"> {calories} calories </p>
                        </div>
                    </div>
                </div>

            </div>
            <ToastContainer></ToastContainer>
        </div>
    );
};

export default Recipes;