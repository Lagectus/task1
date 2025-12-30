import React from 'react'
import image1 from "../assets/image1.jpeg";
import image2 from "../assets/image2.jpeg";
import image3 from "../assets/image3.jpeg";

const card = () => {
  return (
    <>
    <div className="flex items-center justify-center mt-10">
        <div className="bg-black h-100 mb-10 items-center justify-center mt-30 w-[85%] rounded-4xl grid grid-cols-2">
          <div className="flex items-center justify-center -mt-80 ml-[100%] gap-4">
            <div>
              <div className=" cursor-pointer hover:shadow hover:shadow-gray-400 w-80 h-50 shadow shadow-gray-200 rounded-2xl">
                <img
                  src={image1}
                  alt=""
                  className="w-80 h-50 mt-10 py-5 px-5"
                />
              </div>
            </div>
            <div>
              <div className=" cursor-pointer hover:shadow hover:shadow-gray-400 w-80 h-50 shadow shadow-gray-500 rounded-2xl">
                <img
                  src={image2}
                  alt=""
                  className="w-80 h-50 mt-10 py-5 px-5"
                />
              </div>
            </div>
            <div>
              <div className=" cursor-pointer hover:shadow hover:shadow-gray-400 w-80 h-50 shadow shadow-gray-500 rounded-2xl">
                <img
                  src={image3}
                  alt=""
                  className="w-80 h-50 mt-10 py-5 px-5"
                />
              </div>
            </div>
          </div>

          <div className="mt-25">
            <h1 className="text-white font-bold text-3xl -ml-35">
              Not a Tool. A Diagnostic
            </h1>
            <p className="text-white text-sm -ml-80">
              If you're a founder, COO, or internal operator scaling a business
              that already works-but behind the scenes, it's duct-taped together
            </p>
          </div>
        </div>
        </div>
    </>
  )
}

export default card