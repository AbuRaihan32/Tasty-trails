
const CurrentCooking = ({ current, idx }) => {
    console.log(current)
    return (
        <div className="bg-[#28282808] mt-1">
            <ul className="flex justify-around items-center px-4 py-3 mb-2">
                <li className="w-[15%]">{idx + 1}</li>
                <li className="w-[35%]">{current.food_title}</li>
                <li className="w-[25%]">{current.cooking_time.slice(0, 6)}</li>
                <li className="w-[25%]">{current.calories} cal</li>
            </ul>
        </div>
    );
};

export default CurrentCooking;