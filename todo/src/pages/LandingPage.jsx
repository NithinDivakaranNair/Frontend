import React from "react";
import Header from '../components/Header';
import Footer from '../components/Footer';
import DataTable from "../components/DataTable";

const LandingPage = ({ onGetStarted, submittedData }) => {
  return (
    <>
      <Header />

      <div className="px-6 py-10 space-y-10">
        <div className="flex flex-col items-center text-center space-y-4">
          <h1 className="text-4xl font-bold">Simplify Your Life with Our</h1>
          <h1 className="text-4xl font-bold">Todo App</h1>
          <p className="text-lg">Stay organized and boost your productivity with our intuitive todo website.</p>
          <p className="text-lg">Experience a modern approach to task management that fits your lifestyle.</p>
          <div className="flex gap-4">
            <button
              onClick={onGetStarted}
              className="bg-red-500 text-white px-6 py-2 rounded-3xl shadow hover:bg-red-600"
            >
              Get Started
            </button>
            <button className="text-red-500 font-semibold rounded-3xl cursor-pointer border border-red-500 px-6 py-2">Learn More</button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row px  mt-3 gap-3  justify-center  ">

          <div className="  bg-red-500 rounded-xl px-20 flex justify-around flex-col  ">
            <h1 className="text-7xl font-sm text-white"><span className="text-emerald-200">Organize.</span><br /> Achieve.<br /> Relax.</h1>
            <p className="text-gray-700">Turn clutter into clarity, chaos into control, and dreams into done. Bold <br /> visions into market success.</p>
            <div className="flex gap-4 mt-4">
              <button className="bg-white text-red-500 px-4 py-2 rounded-4xl cursor-pointer">Get Started Today</button>
              <button className="text-white bg-red-400 px-4 py-2 font-semibold cursor-pointer rounded-4xl">Discover Features</button>
            </div>
          </div>

          <div className="relative w-70 h-[500px] bg-yellow-200 ">
            <img
              src="/image 1 (1).svg"
              alt="icon"
              className="absolute inset-0 w-full h-full object-cover z-0 rounded-2xl"
            />
            <div className="absolute inset-0 z-10 flex flex-col  gap-80  justify-around space-y-0 px-6 bg-gradient-to-t from-white/30 to-transparent ">
              <div>
                <p className="text-3xl font-semibold text-emerald-300">Your Tasks</p>
                <h2 className="text-3xl font-semibold text-white ">Our Tools</h2>
              </div>


              <div className="flex justify-between  pb-8">
                <div>
                  <img src="/Logo.svg" alt="logo" className="w-20" />
                  <h1 className="text-lg font-bold">Freddie Halvorson</h1>
                  <h1 className="text-sm text-gray-600">Chief Productivity Enthusiast</h1>
                </div>
                <img src="/Icon.svg" alt="icon" className="w-6" />
              </div>

            </div>
          </div>

        </div>

        <div className="flex justify-between px-50 ">
          <img src="/google.svg" alt="google" className="w-25" />
          <img src="/facebook.svg" alt="facebook" className="w-25" />
          <img src="/youtube.svg" alt="youtube" className="w-25" />
          <img src="/print.svg" alt="print" className="w-25" />
          <img src="/Vector (12).svg" alt="vector" className="w-25" />
        </div>


        <div>
          <div className="text-center mt-16 space-y-4">
            <h1 className="text-3xl font-bold">Transform Your Productivity with Our</h1>
            <h1 className="text-3xl font-bold">Innovative To-Do List Features</h1>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-9 mt-6 px-25">

            <div className="bg-red-100 rounded-lg pl-5  pb-5">
              <div className="  flex flex-row ">
                <div className=" pt-9">
                  <img src="/Group.svg" alt="group" className=" bg-white w-10 pt-3 pb-5 px-2  rounded" />
                </div>
                <img src="/01.svg" alt="step" className=" ml-30 w-10" />

              </div>
              <div className=" flex flex-col  pt-5 gap-4">
                <h1 className="font-semibold text-lg">User-Friendly Interface</h1>
                <img src="/Group 21.svg" alt="icon" className="w-20" />
                <p className="text-sm text-black font-semibold">Our platform offers <br />seamless task management <br /> to boost your efficiency.</p>
              </div>

            </div>


            <div className="bg-red-100 rounded-lg pl-5 pb-5 ">
              <div className="  flex flex-row ">
                <div className=" pt-9">
                  <img src="/Vector (15).svg" alt="group" className=" bg-white w-10 pt-3 pb-5 px-2  rounded" />
                </div>
                <img src="/02.svg" alt="step" className=" ml-30 w-10" />

              </div>
              <div className=" flex flex-col  pt-5 gap-3">
                <h1 className="font-semibold text-lg">Collaborate & Share Effortlessly</h1>
                <img src="/Group 21.svg" alt="icon" className="w-20" />
                <p className="text-sm text-black font-semibold">Invite team members to <br /> work together and achieve <br />your goals faster.</p>
              </div>

            </div>

            <div className="bg-red-100 rounded-lg pl-5 pb-5 ">
              <div className="  flex flex-row ">
                <div className=" pt-9">
                  <img src="/Vector (16).svg" alt="group" className=" bg-white w-10 pt-3 pb-5 px-2 rounded" />
                </div>
                <img src="/03.svg" alt="step" className=" ml-30 w-10" />

              </div>
              <div className=" flex flex-col  pt-5 gap-4">
                <h1 className="font-semibold text-lg">Effortless Collaboration</h1>
                <img src="/Group 21.svg" alt="icon" className="w-20" />
                <p className="text-sm text-black font-semibold">Invite team members to <br />work together and achieve <br />your goals faster.</p>
              </div>

            </div>

            <div className="bg-red-100 rounded-lg pl-5  pb-5">
              <div className="  flex flex-row ">
                <div className=" pt-9">
                  <img src="/Black.svg" alt="group" className=" bg-white w-10 pt-3 pb-5 px-2  rounded" />
                </div>
                <img src="/04.svg" alt="step" className=" ml-30 w-10" />

              </div>
              <div className=" flex flex-col  pt-5 gap-4">
                <h1 className="font-semibold text-lg"> Seamless Access</h1>
                <img src="/Group 21.svg" alt="icon" className="w-20" />
                <p className="text-sm text-black font-semibold">Stay connected and manage <br /> your tasks on the go with <br />ease.</p>
              </div>

            </div>

          </div>
        </div>

        <div className=" mt-16 space-y-6 pl-25">
          <h1 className="text-4xl font-bold">Customer Testimonials</h1>
          <h2 className="text-lg text-black">This tool has transformed my productivity and organization!</h2>

          <div className="pl-0">
            <div className="relative flex mt-2 ">
              <img src="/Vector (14).svg" alt="decorative" className="w-70" />
              <div className="absolute top-10 left-0 w-full h-full flex flex px-4">

                <div className="bg-white h-70 flex gap-50">
                  <div className="pt-15 pl-25 flex flex-col gap-4">
                    <p className="text-xl font-bold ">
                      Using this website has made my <br /> tasks so much easier! I can't <br /> imagine my day without it.
                    </p>
                    <img src="/Frame 1785 (1).svg" alt="testimonial" className="w-50" />
                    <img src="/Slider.svg" alt="slider" className="w-20" />
                  </div>

                  <div className="relative w-58 h-64 ">

                    <img src="/Vector (14).svg" alt="decorative" className="absolute w-full h-full top-0 left-17" />
                    <img src="/Image (1).svg" alt="testimonial" className="absolute w-full h-full top-0 left-9 " />
                  </div>

                </div>

              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-8 mt-16 px-25 py-3 ">
          <img src="/Photo rectangle.svg" alt="promo" className="w-full lg:w-1/2 rounded-lg shadow" />
          <div className="space-y-4 text-center lg:text-left">
            <p className="text-2xl font-bold">Start Organizing Your <br />Life Today</p>
            <p className="text-gray-700">Join us now and transform your productivity with our intuitive to-do <br /> list platform!</p>
            <div className="flex gap-4 justify-center lg:justify-start">
              <button className="bg-red-500 text-white px-4 py-2 rounded cursor-pointer">Sign Up</button>
              <button className="text-red-500 font-semibold cursor-pointer border border-red-500 px-4 py-2 ">Learn More</button>
            </div>
          </div>
        </div>

        {/* Display Submitted Data */}
        {submittedData.length > 0 && <DataTable data={submittedData} />}

      </div>

      <Footer />
    </>
  );
};

export default LandingPage;
