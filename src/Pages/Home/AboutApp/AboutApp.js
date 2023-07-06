import React from "react";

const AboutApp = () => {
  return (
    <div className="bg-sky-100">
      <section className="mx-5 lg:mx-20 px-10 py-10 ">
        <h1 className="text-xl md:text-4xl font-semibold mb-3 md:mb-5 text-blue-800">
          Why Us?
        </h1>
        <p className="mb-5 md:mb-10 text-sm md:text-lg">
          <span className="text-blue-500">CLICKandGET</span>: Your Convenient
          Grocery Shopping Solution!
        </p>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-5 md:gap-10">
          <div className="shadow-lg shadow-blue-800 rounded-md md:mb-20 bg-white transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="p-5">
              <p className="my-2 pb-5 text-gray-600">
                At <span className="text-blue-500">CLICKandGET</span>,from fresh
                fruits and vegetables to pantry staples, our extensive selection
                ensures that you'll find everything you're looking for in one
                convenient place.
              </p>
              <button className="btn px-5 lg:px-10 rounded-md bg-blue-800 text-white hover:bg-slate-100 hover:text-blue-800 hover:border-sky-600">
                Know more
              </button>
            </div>
          </div>

          <div className="shadow-lg shadow-blue-400 rounded-md bg-white md:mt-24 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="p-5">
              <p className="my-2 text-gray-600 pb-5">
                We understand the importance of timely and reliable delivery.
                Our dedicated delivery team ensures that your groceries arrive
                at your doorstep with care and efficiency.
              </p>
              <button className="btn px-5 lg:px-10 rounded-md bg-blue-800 text-white hover:bg-slate-100 hover:text-blue-800 hover:border-sky-600">
                Order now
              </button>
            </div>
          </div>
          <div className="shadow-lg shadow-blue-400 rounded-md bg-white md:mb-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="p-5">
              <p className="my-2 text-gray-600 pb-5">
                Download the <span className="text-blue-500">CLICKandGET</span>{" "}
                mobile app today and unlock a world of convenience at your
                fingertips. Experience the future of grocery shopping with{" "}
                <span className="text-blue-500">CLICKandGET</span>.
              </p>
              <button className="btn px-5 lg:px-10 rounded-md bg-blue-800 text-white hover:bg-slate-100 hover:text-blue-800 hover:border-sky-600">
                Get the app
              </button>
            </div>
          </div>

          <div className="md:col-span-2 flex justify-center items-center">
            <img
              className="h-[24rem]"
              src="https://prominigent.com/images/on-demand/grocery/grocer-app.gif"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutApp;
