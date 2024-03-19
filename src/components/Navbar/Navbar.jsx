import { CgProfile } from "react-icons/cg";
const Navbar = () => {
    return (
        <div className="md:pt-5">
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>Home</a></li>
                            <li><a>Recipes</a></li>
                            <li><a>About</a></li>
                            <li><a>Contact</a></li>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Tasty Trails</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li><a>Home</a></li>
                        <li><a>Recipes</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact</a></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <input className="bg-[#150B2B0D] px-4 py-2 hidden md:block lg:block rounded-full outline-none mr-4" type="text" name="" id="" placeholder="Search" />
                    <div className="bg-[#0BE58A] p-2 rounded-full">
                        <CgProfile></CgProfile>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;