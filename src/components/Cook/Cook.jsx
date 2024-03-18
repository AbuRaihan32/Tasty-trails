import CookList from "../CookList/CookList";

const Cook = ({ cook, handlePreparing }) => {

    return (
        <div className="">
            <div className="w-[80%] mx-auto border-b-2 pb-3 mb-3">
                <h1 className="text-2xl font-semibold">Want to Cook : {cook.length}</h1>
            </div>
            <ul className="flex justify-around px-4">
                <li className="w-[10%]">No.</li>
                <li className="w-[25%]">Name</li>
                <li className="w-[20%]">Time</li>
                <li className="w-[20%]">Calories</li>
                <li className="w-[25%]"></li>
            </ul>
            {
                cook.map((want, idx) => <CookList 
                key={idx} 
                want={want}
                handlePreparing={handlePreparing} 
                idx={idx}></CookList>)
            }

        </div>
    );
};

export default Cook;