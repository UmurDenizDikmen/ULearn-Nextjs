export default function HeaderSection() {
  return (
    <div className="relative h-screen w-screen bg-[url('/images/Group.png')] bg-no-repeat bg-center bg-fixed bg-cover">
      <div className="flex flex-col lg:flex-row xl:gap-80 lg:gap-4 text-center absolute  lg:text-left mt-16 lg:p-10 gap-96">
        <div className="flex flex-row gap-6  xl:w-1/3  lg:ml-36 lg:w-2/3">
          <hr className=" bg-yellow-700 w-0.5 hidden md:block mt-1 lg:h-full  xl:h-64" />
          <p className="text-7xl text-white font-bold mr-3 shrink">
            Take great online courses from any where in the word
          </p>
        </div>
        <div className="bg-black shrink-0 mt-9 md:mt-0 lg:mt-4 ">
          <form className="m-20 items-center">
            <div className="mb-4">
              <h1 className="text-white text-4xl text-left font-bold">
                BECOME A MEMBER
              </h1>
              <p className="text-white text-1xl text-left">
                Get Instant access to 4500 video courses
              </p>
            </div>
            <div className="flex flex-row gap-10">
              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="First Name"
                />
              </div>

              <div className="w-full">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div>
              <input
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-8"
                type="email"
                placeholder="Email"
              />
            </div>
            <div className="relative">
              <select
                className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-8"
                id="grid-state"
              >
                <option>Software Development</option>
                <option>Business</option>
                <option>Design</option>
                <option>Marketing</option>
              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pt-8 pr-1 text-gray-700">
                <svg
                  className="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
            <div>
              <textarea
                className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-left text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mt-8 h-32 resize-none"
                placeholder="Detail Information"
              />
            </div>

            <div className="mt-2">
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">Send me your newsletter!</span>
              </label>
            </div>
            <div className="md:flex md:items-center">
              <div className="w-full">
                <button
                  className="bg-gray-200 text-2xl font-bold hover:bg-slate-500 hover:text-white border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight  focus:border-purple-500 mt-8 h-16 "
                  type="button"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
