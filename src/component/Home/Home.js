import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Home.css";
import { useState } from "react";
import { IoIosTime } from "react-icons/io";
import ReactPlayer from "react-player";
const data = [
  {
    img: `img/banner1.jpg`,
    link: 'https://google.com'
  },
  {
    img: `img/banner2.jpg`,
    link: 'https://google.com'
  },
  {
    img: `img/banner3.jpg`,
    link: 'https://google.com'
  },
  {
    img: `img/banner4.jpg`,
    link: 'https://google.com'
  },
  {
    img: `img/banner5.jpg`,
    link: 'https://google.com'
  },
];
const items = [
  {
    text: `MPPSC (Pre + Mains)`,
    time: `Morning Batch`,
  },
  {
    text: `MPSI`,
    time: `Morning Batch`,
  },
  {
    text: `SSC`,
    time: `Morning Batch`,
  },
  {
    text: `Police`,
    time: `Morning Batch`,
  },
  {
    text: `VYAPAM`,
    time: `Morning Batch`,
  },
  {
    text: `Banking`,
    time: `Morning Batch`,
  },
  {
    text: `ARMY (Agniveer, BSF)`,
    time: `Morning Batch`,
  },
  {
    text: `SAMVIDA (Verg - 1, 2, 3)`,
    time: `Morning Batch`,
  },
];

function Home() {
  const [visible, setVisible] = useState(3);
  const showMoreitem = () => {
    setVisible((prevValue) => prevValue + 3);
  };

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 2500,

    pauseOnHover: true,
  };

  return (
    <>
      <div className="ml-2 w-[91%] sm:w-[97%] ">
        <div className="mt-2">
          <Slider {...settings}>
            {data.map((d,index) => (
              <div key={index} className="flex justify-center items-center">
                <img src={d.img} className=" w-full sm:h-[60vh] h-[25vh]" />
                {/* use for add link */}
               {/* <a href={d.link} target="_blank" rel="noopener noreferrer">show more</a> */}
              </div>
            ))}
          </Slider>
        </div>
      </div>
      <section>
        <div class="w-full p-2  sm:p-1 md:p-1 relative">
          <div
            class="bg-cover bg-center text-center overflow-hidden min-h-[500px] sm:h-[90vh] w-full sm:blur-[2px] "
            style={{
              backgroundImage: "url('img/trip.jpg')",
              backgroundPosition: "top",
            }}
            title="Woman holding a mug"
          ></div>
          <div class="sm:w-[70%] mx-auto">
            <div class="mt-3 bg-white rounded-b lg:rounded-b-none lg:rounded-r flex flex-col justify-between leading-normal">
              <div class="bg-white relative top-0 -mt-32 sm:-mt-[30rem]">
                <div class="h-full max-h-max w-full bg-gray-800 pt-12 p-4">
                  <div class="grid gap-14 md:grid-cols-3 md:gap-5">
                    {items.slice(0, visible).map((item) => (
                      <div class="rounded-xl bg-white p-6 md:mt-5 text-center shadow-xl">
                        <div class="mx-auto flex h-16 w-16 -translate-y-12 transform items-center justify-center rounded-full bg-teal-400 shadow-lg shadow-teal-500/40">
                          <img
                            src="img/SJA.jpg"
                            className="rounded-full w-[95%]"
                          />
                        </div>
                        <h1 class="text-darken mb-3 text-xl font-medium lg:px-14">
                          {item.text}
                        </h1>
                        <div className="flex justify-center items-center gap-2">
                          <IoIosTime className="size-8" />
                          <span>-</span>
                          <p class="text-darken px-4 text-gray-500 -ml-3">
                            {item.time}
                          </p>
                        </div>
                        <hr className="h-[1px] my-1 bg-black w-[80%] ml-[2rem]" />
                        <p>Offline Only</p>
                      </div>
                    ))}
                  </div>
                  <div className="w-full flex justify-center items-center">
                    <button
                      onClick={showMoreitem}
                      className=" px-6 py-2 mt-4 min-w-[120px] text-center text-white bg-violet-600 border border-violet-600 rounded active:text-violet-500 hover:bg-transparent hover:text-violet-600 focus:outline-none focus:ring center"
                    >
                      ShowMore
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section class="text-gray-700 body-font">
        <div class="flex justify-center mt-10 text-4xl font-regular">
          Why Us?
        </div>
        <div class="container px-5 py-12 mx-auto">
          <div class="flex flex-wrap text-center justify-center">
            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image2.jdomni.in/banner/13062021/3E/57/E8/1D6E23DD7E12571705CAC761E7_1623567977295.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Reasonable Rates
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/16/7E/7E/5A9920439E52EF309F27B43EEB_1623568010437.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Time Efficiency
                </h2>
              </div>
            </div>

            <div class="p-4 md:w-1/4 sm:w-1/2">
              <div class="px-4 py-6 transform transition duration-500 hover:scale-110">
                <div class="flex justify-center">
                  <img
                    src="https://image3.jdomni.in/banner/13062021/EB/99/EE/8B46027500E987A5142ECC1CE1_1623567959360.png?output-format=webp"
                    class="w-32 mb-3"
                  />
                </div>
                <h2 class="title-font font-regular text-2xl text-gray-900">
                  Expertise in Industry
                </h2>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="works" class="relative bg-gray-900 py-10 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div class="max-w-2xl mx-auto text-center">
            <h2 class="text-4xl text-white font-extrabold mx-auto md:text-6xl lg:text-5xl">
              What is the thing in a student's life that makes him successful?
            </h2>
            <p class="max-w-2xl mx-auto mt-4 text-base text-gray-400 leading-relaxed md:text-2xl">
              Success in a student’s life often hinges on a combination of
              several key factors. Here are some of the most important ones
            </p>
          </div>
          <div class="relative mt-12 lg:mt-20">
            <div class="absolute inset-x-0 hidden xl:px-44 top-2 md:block md:px-20 lg:px-28">
              <img
                alt=""
                loading="lazy"
                width="1000"
                height="500"
                decoding="async"
                data-nimg="1"
                class="w-full"
                style={{ color: "transparent" }}
                src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg "
              />
            </div>
            <div class="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-3 gap-x-12">
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">1</span>
                </div>
                <h3 class="mt-6 text-xl  text-white font-semibold leading-tight md:mt-10">
                  Effective Time Management
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">2</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Self-Discipline
                </h3>
              </div>
              <div>
                <div class="flex items-center justify-center w-16 h-16 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <span class="text-xl font-semibold text-gray-700">3</span>
                </div>
                <h3 class="mt-6 text-xl text-white font-semibold leading-tight md:mt-10">
                  Consistent Effort
                </h3>
              </div>
            </div>
          </div>
        </div>
        <div class="absolute inset-0 m-auto max-w-xs h-[357px] blur-[118px] sm:max-w-md md:max-w-lg"></div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center gap-2 mb-2 ">
          <div class="rounded-lg shadow-lg bg-white sm:max-w-[60rem] hover:border-4 sm:flex justify-center items-center p-7">
            <ReactPlayer
              url="https://youtu.be/QqUGzuHmV8k?si=95Sc6uS_7J4zSckA"
              height="12rem"
              width="240"
            />

            <div class="p-6 ">
              <h5 class="text-gray-900 text-xl font-medium mb-2">About US</h5>
              <p class="text-gray-700 text-base text-wrap mb-4">
                About Sarkari Job Academy| Amarparan| Best institute for
                competitive exams
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-white sm:max-w-[60rem] hover:border-4  sm:flex justify-center items-center p-7">
            <ReactPlayer
              url="https://youtu.be/WnJX6aHZHQw?si=8CvVRilmHlqrUqRa"
              height="12rem"
              width="240"
            />

            <div class="p-6">
              <h5 class="text-gray-900 text-xl font-medium mb-2">
                Selected Sutdent Riya संविदा वर्ग-3 RANK-159(FC)
              </h5>
              <p class="text-gray-700 text-base mb-4 text-wrap">
                संविदा वर्ग-3 RANK-159(FC)| कैसे 22 की उम्र में first attempt
                में crack किया। Sarkari job academy|
              </p>
            </div>
          </div>
          <div class="rounded-lg shadow-lg bg-white sm:max-w-[60rem] hover:border-4  sm:flex justify-center items-center p-7">
            <ReactPlayer
              url="https://youtu.be/X72xJR2qJ3k?si=b9flPjvnSFRO2JOb"
              height="12rem"
              width="240"
            />

            <div class="p-6 ">
              <h5 class="text-gray-900 text-xl text-wrap font-medium mb-2">
                Selected Student Richa पटवारी
              </h5>
              <p class="text-gray-700 text-base text-wrap mb-4">
                पटवारी बनने का सफर| कैसे घर में रह कर पटवारी का पेपर
                निकाला|Sarkari Job Academy| Amarpatan|PATWARI
              </p>
            </div>
          </div>
        </div>
      </section>

      <section class="w-full mx-auto px-10 dark:bg-gray-800 dark:text-white">
        <div class="flex items-center justify-center flex-col gap-y-2 py-5">
          <h2 class="text-2xl md:text-3xl lg:text-4xl font-bold">
            Students{" "}
            <span className="text-indigo-600">Sarakri Job Academy</span>
          </h2>
          <p class="text-lg font-medium text-slate-700/70 dark:text-gray-400">
            What do selected students say about us?
          </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-5 w-full">
          <div class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div class="flex flex-col gap-y-3.5">
              <p class="font-bold text-xl">Exceptional Teaching Methods</p>
              <p class="font-medium text-slate-700/90 dark:text-gray-300">
                SJA has been guiding me during my preparation Travel
                comprehensive content and exceptional teaching Methods helped me
                to achieve top rank.
              </p>
            </div>
            <div class="flex flex-col">
              <img
                src="img/riyaPathak.jpg"
                alt="Jane Cooper"
                class="h-10 w-10"
              />
              <p class="pt-2 text-sm font-semibold">Richa Pathak</p>
              <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">
                SAMVIDA Verg - 3
              </p>
            </div>
          </div>
          <div class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div class="flex flex-col gap-y-3.5">
              <p class="font-bold text-xl">
                Doubt Sessions, & Constant Support
              </p>
              <p class="font-medium text-slate-700/90 dark:text-gray-300">
                Studying at SJA was a game changer for me. The well structured
                courses, doubt sessions, & constant support from the faculty
                were instrumental in my Agniveer success.
              </p>
            </div>
            <div class="flex flex-col">
              <img src="img/ankulSingh.jpg" alt="John Doe" class="h-10 w-10" />
              <p class="pt-2 text-sm font-semibold">Ankul Singh</p>
              <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">
                Agniveer
              </p>
            </div>
          </div>
          <div class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-3 flex flex-col gap-y-10 justify-between">
            <div class="flex flex-col gap-y-3.5">
              <p class="font-bold text-xl">Expert Guidance</p>
              <p class="font-medium text-slate-700/90 dark:text-gray-300">
                I can't express how grateful I am to SJA for my PATWARI success.
                Their expert guidance, doubt sessions, and test series played a
                pivotal role in my high rank.
              </p>
            </div>
            <div class="flex flex-col">
              <img src="img/richa.jpg" alt="Jane Doe" class="h-10 w-10" />
              <p class="pt-2 text-sm font-semibold">Richa Gautam</p>
              <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">
                PATWARI
              </p>
            </div>
          </div>
          <div class="border p-7 rounded-xl bg-white dark:bg-gray-700 drop-shadow-md border-neutral-200/50 col-span-2 flex flex-col gap-y-10 justify-between">
            <div class="flex flex-col gap-y-3.5">
              <p class="font-bold text-xl">Providing Best Study Materials</p>
              <p class="font-medium text-slate-700/90 dark:text-gray-300">
                Studying at SJA was a game changer for me.Their expert guidance,
                doubt sessions, and test series played a pivotal role in my high
                rank
              </p>
            </div>
            <div class="flex flex-col">
              <img src="img/rohit.jpg" alt="Rohit Sharma" class="h-10 w-10" />
              <p class="pt-2 text-sm font-semibold">Rohit Sharma</p>
              <p class="text-sm font-medium text-slate-700/70 dark:text-gray-400">
                MP Police
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default Home;
