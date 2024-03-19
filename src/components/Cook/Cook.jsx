import PropTypes from 'prop-types';
import CookList from "../CookList/CookList";

const Cook = ({ cook, handlePreparing }) => {
    return (
        <div className="">
            <div className="w-[80%] mx-auto border-b-2 pb-3 mb-3">
                <h1 className="text-xl md:text-2xl lg:text-2xl font-semibold">Want to Cook : {cook.length}</h1>
            </div>
            <table className="ml-3">
                <thead>
                    <tr className="">
                        <th className="w-[10%]">No.</th>
                        <th className="w-[25%]">Name</th>
                        <th className="w-[20%]">Time</th>
                        <th className="w-[20%]">Calories</th>
                    </tr>
                </thead>
            </table>
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

Cook.propTypes = {
    cook: PropTypes.array,
    handlePreparing: PropTypes.func
}
export default Cook;