const Banner = () => {
    return (
        <div className="">
            <div className="hero rounded-3xl" style={{ backgroundImage: 'url(https://i.ibb.co/Hz0C9Yp/chef-5993951-640.jpg)' }}>
                <div className="hero-overlay bg-opacity-60 rounded-3xl"></div>
                <div className="hero-content text-center text-neutral-content h-[450px]">
                    
                    <div className="md:max-w-[60%] lg:max-w-[60%]">
                        <h1 className="mb-2 md:mb-5 lg:mb-5 text-[28px] md:text-4xl lg:text-4xl font-bold">Discover an exceptional cooking class tailored for you!</h1>
                        <p className="mb-2 md:mb-5 lg:mb-5">Food is one thing on which human physical health depends, so take our food safely to keep the body healthy. Wishing you well.</p>
                        
                        <div className="md:space-x-5 lg:space-x-5 flex md:block lg:block flex-col md:flex-row lg:flex-row gap-4">
                            <button className="hover:bg-[#0fa38a] py-3 px-7 text-white bg-[#0BE58A] rounded-full">Explore Now</button>
                            <button className=" btn btn-outline btn-success text-white rounded-full">Our Feedback</button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;