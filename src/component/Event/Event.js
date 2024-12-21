import { Link } from "react-router-dom";

function Event (){
  return (
    <>
      <section>
        <div class="container max-w-xl p-6 mx-auto space-y-12 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 class="text-3xl font-bold text-center sm:text-5xl">
              New Library
            </h2>
            <p class="max-w-3xl mx-auto mt-4 text-xl text-center ">
              Explore the New Library that enhance your learning experience and
              make it even more exciting.
            </p>
          </div>
          <div class="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <div class="mt-4 space-y-12">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-rocket"
                      >
                        <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                        <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                        <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                        <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi ">
                      First Digital Library
                    </h4>
                    <p class="mt-2 ">
                      We are providing the first digital library in Rewa. In
                      which we provide you a personal computer so that you can
                      also study online.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-bookmark-plus"
                      >
                        <path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path>
                        <line x1="12" x2="12" y1="7" y2="13"></line>
                        <line x1="15" x2="9" y1="10" y2="10"></line>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi ">
                      Test Series And Study Material
                    </h4>
                    <p class="mt-2 ">
                      Mock tests are provided to you so that you can practice
                      for the exam.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-video"
                      >
                        <path d="m22 8-6 4 6 4V8Z"></path>
                        <rect
                          width="14"
                          height="12"
                          x="2"
                          y="6"
                          rx="2"
                          ry="2"
                        ></rect>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi ">Online Lecture</h4>
                    <p class="mt-2 ">
                      Experience seamless video integration with enhanced
                      streaming capabilities, providing a better and more
                      uninterrupted learning experience.
                    </p>
                  </div>
                </div>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div class="flex items-center justify-center w-12 h-12 rounded-md">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        class="lucide lucide-file-question"
                      >
                        <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                        <path d="M10 10.3c.2-.4.5-.8.9-1a2.1 2.1 0 0 1 2.6.4c.3.4.5.8.5 1.3 0 1.3-2 2-2 2"></path>
                        <path d="M12 17h.01"></path>
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg font-medium leadi ">Advanced Quiz</h4>
                    <p class="mt-2 ">
                      Take your knowledge testing to the next level with
                      advanced quiz generation, providing more customization
                      options for your quizzes.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div aria-hidden="true" class="mt-10 lg:mt-0">
              <img
                width="600"
                className="sm:h-[50vh]"
                src="img/Rewa.jpg"
                style={{ color: "transparent" }}
              />
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white dark:bg-gray-900">
        {/* <!-- Title Section --> */}
        <div class="text-center py-10">
          <h1 class="text-4xl font-bold text-black dark:text-white mb-4">
            Community Events
          </h1>
          <p class="text-lg text-gray-600 dark:text-gray-400">
            Our academy tells all the students the importance of government
            examinations through events.
          </p>
        </div>

        {/* <!-- Content Section --> */}
        <div class="px-8 py-10 mx-auto lg:max-w-screen-xl sm:max-w-xl md:max-w-full sm:px-12 md:px-16 lg:py-20 sm:py-16">
          <div class="grid gap-x-8 gap-y-12 sm:gap-y-16 md:grid-cols-2 lg:grid-cols-3">
            <div class="relative">
              <a class="block overflow-hidden group rounded-xl shadow-lg">
                <img
                  src="img/presentation.jpg"
                  class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                  alt="Adventure"
                />
              </a>
              <div class="relative mt-5">
                <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                  September 10th 2023
                </p>
                <a href="#" class="block mb-3 hover:underline">
                  <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                    School Events
                  </h2>
                </a>
                <p class="mb-4 text-gray-700 dark:text-gray-300">
                  Our team encouraged the students in the school and told them
                  the importance of government exams for government jobs.
                </p>
              </div>
            </div>

            <div class="relative">
              <a
                href="#_"
                class="block overflow-hidden group rounded-xl shadow-lg"
              >
                <img
                  src="img/presentation2.jpg"
                  class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                  alt="Ocean"
                />
              </a>
              <div class="relative mt-5">
                <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                  September 15th 2023
                </p>
                <a href="#" class="block mb-3 hover:underline">
                  <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                    Help make future plans
                  </h2>
                </a>
                <p class="mb-4 text-gray-700 dark:text-gray-300">
                  We guided the students for their future through the event so
                  that they can continue their journey.
                </p>
              </div>
            </div>

            <div class="relative">
              <a
                href="#_"
                class="block overflow-hidden group rounded-xl shadow-lg"
              >
                <img
                  src="img/join.jpg"
                  class="object-cover w-full h-56 transition-all duration-300 ease-out sm:h-64 group-hover:scale-110"
                  alt="Desert Adventure"
                />
              </a>
              <div class="relative mt-5">
                <p class="uppercase font-semibold text-xs mb-2.5 text-purple-600">
                  October 5th 2023
                </p>
                <a href="#" class="block mb-3 hover:underline">
                  <h2 class="text-2xl font-bold leading-5 text-black dark:text-white transition-colors duration-200 hover:text-purple-700 dark:hover:text-purple-400">
                    students joined us
                  </h2>
                </a>
                <p class="mb-4 text-gray-700 dark:text-gray-300">
                  With the help of the event, students understood the importance
                  of government job and joined us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="bg-white">
        <div class="py-4 px-2 mx-auto max-w-screen-xl sm:py-4 lg:px-6">
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 h-full">
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-gray-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="img/trip.jpg"
                  alt="trip"
                  class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Student Selection Trip
                </h3>
              </a>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-2 bg-stone-50">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 mb-4"
              >
                <img
                  src="img/selected Student.jpg"
                  alt=""
                  class="absolute inset-0 h-[25vh] w-full group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Selected Student
                </h3>
              </a>
              <div class="grid gap-4 grid-cols-2 sm:grid-cols-2 lg:grid-cols-2">
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="img/presentation.jpg"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    School Event
                  </h3>
                </a>
                <a
                  href=""
                  class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40"
                >
                  <img
                    src="img/presentation2.jpg"
                    alt=""
                    class="absolute inset-0 h-full w-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                  <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                    Collage Event
                  </h3>
                </a>
              </div>
            </div>
            <div class="col-span-2 sm:col-span-1 md:col-span-1 bg-sky-50 h-auto md:h-full flex flex-col">
              <a
                href=""
                class="group relative flex flex-col overflow-hidden rounded-lg px-4 pb-4 pt-40 flex-grow"
              >
                <img
                  src="img/together.jpg"
                  alt=""
                  class="absolute inset-0 h-[30vh] sm:h-full w-full  object-top group-hover:scale-105 transition-transform duration-500 ease-in-out"
                />
                <div class="absolute inset-0 bg-gradient-to-b from-gray-900/25 to-gray-900/5"></div>
                <h3 class="z-10 text-2xl font-medium text-white absolute top-0 left-0 p-4 xs:text-xl md:text-3xl">
                  Academy Event
                </h3>
              </a>
            </div>
          </div>
        </div>
      </section>
      <div class="h-screen w-full bg-slate-700 dark:bg-gray-100">
        <div class="h-full lg:w-[60%] sm:w-[80%] xs:w-[90%] mx-auto flex gap-8 items-center">
          <div class="flex flex-col gap-4 text-white dark:text-black p-4 rounded-lg border border-green-300 shadow-xl shadow-green-400/30">
            <div class="w-full flex gap-2 items-center justify-around">
              <div class="text-5xl font-semibold uppercase font-serif">
                Thank You
              </div>
              <hr class="w-[50%] h-1 rounded-full border-t-green-500 bg-green-500" />
            </div>

            <p class="text-sm">
              Thank you sincerely for the immense support you've provided. Your
              unwavering encouragement and assistance have been invaluable. I am
              deeply grateful for your presence and the positive impact you've
              had on my journey. Your contributions have truly made a
              significant difference.
            </p>

            <div class="flex gap-4 justify-center">
              <Link to="/">
                <button class="w-full px-4 py-1 border-2 border-green-500 rounded-sm">
                  Show More
                </button>
              </Link>
              <Link to="/contact">
                <button class="w-full text-white px-4 py-1 bg-green-500 rounded-sm">
                  Contact me
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Event