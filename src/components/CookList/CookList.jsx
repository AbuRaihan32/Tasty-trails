
const CookList = ({want, idx, handlePreparing}) => {
    return (
        <div className="bg-[#28282808] mt-1">
            <ul className="flex justify-around items-center px-4 py-3 mb-2">
                <li className="w-[10%]">{idx + 1}</li>
                <li className="w-[25%]">{want.food_title}</li>
                <li className="w-[20%]">{want.cooking_time.slice(0,6)}</li>
                <li className="w-[20%]">{want.calories} cal</li>
                <li className="w-[25%]"><button onClick={()=>{handlePreparing(want.id)}} className="btn bg-[#0BE58A] rounded-full">Preparing</button></li>
            </ul>
        </div>
    );
};

export default CookList;