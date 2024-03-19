import PropTypes from 'prop-types';
import { FaRegClock } from "react-icons/fa";
import { RiFireLine } from "react-icons/ri";
const Recipe = ({recipe, handleCookBtn}) => {
    const {food_img, food_title, food_description, ingredients, cooking_time, calories} = recipe;
    return (
        <div className="h">
            <div className="card bg-base-100 shadow-2xl text-start p-5 space-y-1">
                <figure><img className="w-full mg:h-40 lg:h-40 rounded-lg" src={food_img} alt="Food" /></figure>
                <div className="card-body p-0 space-y-1">
                    <h2 className="card-title">{food_title}</h2>
                    <p className="">{food_description}</p>
                    <hr />

                    <h1 className="text-xl font-semibold">Ingredients: {ingredients.length}</h1>
                    <ul className="ml-8 list-disc">
                        <li>{ingredients[0].slice(0, 27)}..</li>
                        <li>{ingredients[1]}</li>
                        <li>{ingredients[2]}</li>
                    </ul>

                    <hr />
                    <div className="flex gap-6 md:flex-col lg:flex-row md:gap-1">
                        <div className="flex gap-2 items-center">
                            <FaRegClock></FaRegClock>
                            <p>{cooking_time}</p>
                        </div>
                        <div className="flex gap-2 items-center">
                            <RiFireLine></RiFireLine>
                            <p>{calories} calories</p>
                        </div>
                    </div>
                    <div className="card-actions">
                        <button onClick={()=>{handleCookBtn(recipe)}} className="hover:bg-[#0fa38a] py-3 px-7 text-white bg-[#0BE58A] rounded-full outline-0">Want to Cook</button>
                    </div>
                </div>
            </div>
        </div>
    );
};
Recipe.propTypes = {
    recipe: PropTypes.object.isRequired,
    handleCookBtn: PropTypes.func
}

export default Recipe;