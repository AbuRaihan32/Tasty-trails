import PropTypes from 'prop-types';
const CookList = ({ want, idx, handlePreparing }) => {
    return (
        <div className="bg-[#28282808] mt-2 px-2 py-2">
            <table>
                <tbody>
                    <tr className="">
                        <td className="w-[10%]">{idx + 1}</td>
                        <td className="w-[25%]">{want.food_title}</td>
                        <td className="w-[20%]">{want.cooking_time.slice(0, 6)}</td>
                        <td className="w-[20%]">{want.calories} cal</td>
                        <td className="w-[25%]">
                            <button onClick={() => { handlePreparing(want.id) }} className="btn bg-[#0BE58A] rounded-full">Preparing</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};
CookList.propTypes = {
    want: PropTypes.object.isRequired,
    idx: PropTypes.number,
    handlePreparing: PropTypes.func
}

export default CookList;