import PropTypes from 'prop-types'
const CurrentCooking = ({ current, idx }) => {
    return (
        <div className="bg-[#28282808] mt-2 py-2">
            <table>
                <tbody>
                    <tr className="">
                        <td className="w-[15%] px-3 md:px-5 lg:px-5">{idx + 1}</td>
                        <td className="w-[25%] px-3 md:px-5 lg:px-2">{current.food_title}</td>
                        <td className="w-[25%] px-3 md:px-5 lg:px-8">{current.cooking_time.slice(0, 6)}</td>
                        <td className="w-[25%] px-3 md:px-5 lg:px-5">{current.calories} cal</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

CurrentCooking.propTypes = {
    current: PropTypes.object,
    idx: PropTypes.number
}

export default CurrentCooking;