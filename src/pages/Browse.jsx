import Navbar from "../components/Navbar";
import { FaUserGraduate, FaStar, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { MdChildCare } from "react-icons/md";
import { useRef, useEffect, useState } from "react";

function Browse() {

  // 👉 SLIDER REF
  const scrollRef = useRef(null);

  const [selectedAge, setSelectedAge] = useState(null);

  const [active, setActive] = useState(2);
  
const categories = [
  { name: "Coding", img: "/icons/laptop.png", color: "bg-orange-500" },
  { name: "Public speaking", img: "/icons/mic.png", color: "bg-green-500" },
  { name: "Chess", img: "/icons/chess.png", color: "bg-yellow-400" },
  { name: "Home work help", img: "/icons/book.png", color: "bg-blue-500" },
  { name: "App building", img: "/icons/mobile.png", color: "bg-red-500" },
];
const [activeTime, setActiveTime] = useState(2);
  


  // 👉 AUTO SCROLL
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  // 👉 DYNAMIC DATA
  const courses = [
    {
      title: "Summer robotics camp: fun projects with auto arduino...",
      rating: "4.9",
      learners: "200+",
      age: "7–10 yrs",
      duration: "45",
      price: "299",
      img: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      tag: "Selling Fast",
    },
    {
      title: "Creative Drawing for Kids",
      rating: "4.8",
      learners: "150+",
      age: "6–9 yrs",
      duration: "30",
      price: "199",
      img: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0",
    },
    {
      title: "Basic Coding Bootcamp",
      rating: "4.9",
      learners: "300+",
      age: "8–12 yrs",
      duration: "60",
      price: "499",
      img: "https://images.unsplash.com/photo-1518770660439-4636190af475",
    },
    {
      title: "Maths Made Easy",
      rating: "4.7",
      learners: "180+",
      age: "7–11 yrs",
      duration: "40",
      price: "249",
      img: "https://images.unsplash.com/photo-1509228627152-72ae9ae6848d",
    },
  ];
  console.log(courses);

  return (
    <div>
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="w-full bg-gradient-to-r from-[#2b0a5a] via-[#5b21b6] to-[#7e22ce] text-white relative overflow-hidden">

        <img src="/kid-left.png" className="hidden md:block absolute left-[-20px] bottom-0 h-[340px]" />
        <img src="/kid-right.png" className="hidden md:block absolute right-[-20px] bottom-0 h-[340px]" />

        <div className="max-w-[1200px] mx-auto px-6 py-24 text-center relative z-10">

          <h1 className="text-[56px] font-semibold">Learn a New Skill</h1>

          <h2 className="text-[42px] text-yellow-300 mt-4">
            Everyday, Anytime, and Anywhere.
          </h2>

          <div className="mt-12 flex justify-center">
            <div className="flex items-center bg-white rounded-full px-6 py-3 w-full max-w-[700px] shadow-xl">

              <input
                placeholder="What do you want to learn today?"
                className="flex-1 outline-none text-gray-700 text-sm"
              />

              <button className="px-6 py-2 rounded-full text-white bg-gradient-to-r from-purple-700 to-pink-500">
                Search
              </button>

            </div>
          </div>

        </div>

        {/* BADGES */}
        <div className="hidden md:block absolute left-[270px] top-[80px] bg-white/20 backdrop-blur-md rounded-full px-5 py-2">
          <p className="text-sm font-semibold">500+</p>
          <p className="text-xs">Courses</p>
        </div>

        <div className="hidden md:flex absolute left-[280px] bottom-[40px] bg-white/20 rounded-full px-5 py-2 items-center gap-3">
          <img src="/star.gif" className="w-10 h-10 invert" />
          <div>
            <span className="text-sm font-semibold">4.9</span>
            <p className="text-xs">Rating</p>
          </div>
        </div>

        <div className="hidden md:flex absolute right-[200px] top-[90px] bg-white/20 backdrop-blur-md border border-white/30 rounded-full px-5 py-2 items-center gap-3 shadow-lg">

          <div className="relative w-6 h-6">

            <FaUserGraduate className="absolute text-white text-lg animate-icon1" />
            <MdChildCare className="absolute text-white text-lg animate-icon2" />
            <FaStar className="absolute text-yellow-300 text-lg animate-icon3" />

          </div>

          <div>
            <p className="text-sm font-semibold">10k+</p>
            <p className="text-xs text-white/80">Happy kids</p>
          </div>

        </div>

      </section>

      {/* ================= AGE ================= */}
      {/* AGE PILLS */}
<div className="mt-8 flex flex-wrap justify-center gap-3">

  {[
    { label: "1-2 Years", color: "yellow" },
    { label: "2-3 Years", color: "yellow" },
    { label: "3-4 Years", color: "yellow" },

    { label: "4-5 Years", color: "orange" },
    { label: "5-6 Years", color: "orange" },
    { label: "6-7 Years", color: "orange" },

    { label: "7-8 Years", color: "pink" },
    { label: "8-9 Years", color: "pink" },
    { label: "9-10 Years", color: "pink" },
    { label: "10-11 Years", color: "pink" },
    { label: "11-12 Years", color: "pink" },

    { label: "12-13 Years", color: "green" },
    { label: "13-14 Years", color: "green" },
    { label: "14-15 Years", color: "green" },
    { label: "15-16 Years", color: "green" },

    { label: "16-17 Years", color: "blue" },
    { label: "17-18 Years", color: "blue" },
    { label: "18-19 Years", color: "blue" },
    { label: "19-20 Years", color: "blue" },
  ].map((item, i) => {

    const isSelected = selectedAge === item.label;

    return (
      <div
        key={i}
        onClick={() => setSelectedAge(item.label)}
        className={`
          px-4 py-2 rounded-lg border-2 text-sm cursor-pointer transition

          ${
            item.color === "yellow" &&
            (isSelected
              ? "bg-yellow-400 text-white border-yellow-500"
              : "border-yellow-400 hover:bg-yellow-100")
          }

          ${
            item.color === "orange" &&
            (isSelected
              ? "bg-orange-400 text-white border-orange-500"
              : "border-orange-400 hover:bg-orange-100")
          }

          ${
            item.color === "pink" &&
            (isSelected
              ? "bg-pink-400 text-white border-pink-500"
              : "border-pink-400 hover:bg-pink-100")
          }

          ${
            item.color === "green" &&
            (isSelected
              ? "bg-green-500 text-white border-green-600"
              : "border-green-500 hover:bg-green-100")
          }

          ${
            item.color === "blue" &&
            (isSelected
              ? "bg-blue-500 text-white border-blue-600"
              : "border-blue-500 hover:bg-blue-100")
          }
        `}
      >
        {item.label}
      </div>
    );
  })}
</div>

      {/* ================= NEW LAUNCHES ================= */}
<section className="w-full bg-[#f5f5f7] py-16 relative">

  <div className="max-w-[1200px] mx-auto px-6">

    <div className="text-center mb-10">
      <h2 className="text-4xl font-semibold">New Launches ⭐</h2>
      <p className="text-gray-500 mt-2">
        Our most loved courses that kids absolutely adore!
      </p>
    </div>
    {/* 👉 LEFT ARROW BUTTON */}
<button
  onClick={() => {
        document.getElementById("slider").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
  className="absolute left-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
> 
  <FaChevronLeft />
</button>

    {/* 👉 RIGHT ARROW BUTTON */}
    <button
      onClick={() => {
        document.getElementById("slider").scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }}
      className="absolute right-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
    >
      <FaChevronRight />
    </button>

    {/* 👉 SLIDER */}
    <div
      id="slider"
      className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
    >

      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="min-w-[280px] bg-white rounded-2xl p-3 shadow-sm border border-gray-200 hover:shadow-xl transition relative"
        >

          {/* ✅ FIXED TAG POSITION */}
          {i === 0 && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-md shadow">
              Selling Fast
            </div>
          )}

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="w-full h-[160px] object-cover rounded-xl"
          />

          {/* RATING */}
          <p className="text-xs text-gray-500 mt-2">
            ⭐ 4.9 | 200+ learners
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-2 py-1 border border-blue-300 rounded-full">English</span>
            <span className="text-xs px-2 py-1 border border-red-300 rounded-full">Intermediate</span>
            <span className="text-xs px-2 py-1 border border-yellow-400 rounded-full">4 classes</span>
          </div>

          {/* TITLE */}
          <h3 className="text-sm font-semibold text-gray-800 mt-2">
            Summer robotics camp: fun projects with auto arduino...
          </h3>

          {/* DESC */}
          <p className="text-xs text-gray-500 mt-1">
            Build circuits & smart projects like alarms, weather stations
          </p>

          {/* FOOTER */}
          <div className="flex justify-between items-center mt-3 text-xs text-gray-600">

            <div className="flex gap-3">
              <span>👤 7–10 yrs</span>
              <span>⏱ 45</span>
              <span>₹ 299</span>
            </div>

            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              🛒
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
{/* ================= FEATURED COURSES ================= */}
<section className="w-full bg-[#f5f5f7] py-16 relative">

  <div className="max-w-[1200px] mx-auto px-6">

    {/* TITLE */}
    <div className="text-center mb-10">
      <h2 className="text-4xl font-semibold">Featured Courses ⭐</h2>
      <p className="text-gray-500 mt-2">
        Our most loved courses that kids absolutely adore!
      </p>
    </div>

    {/* LEFT BUTTON */}
    <button
  onClick={() => {
        document.getElementById("featuredSlider").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
  className="absolute left-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
> 
  <FaChevronLeft />
</button>

    {/* RIGHT BUTTON */}
    <button
      onClick={() => {
        document.getElementById("featuredSlider").scrollBy({
          left: 300,
          behavior: "smooth",
        });
      }}
      className="absolute right-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
    >
      <FaChevronRight />
    </button>

    {/* SLIDER */}
    <div
      id="featuredSlider"
      className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
    >

      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="min-w-[280px] bg-white rounded-2xl p-3 shadow-sm border border-gray-200 hover:shadow-xl transition relative"
        >

          {/* SELLING FAST */}
          {i === 0 && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-md shadow">
              Selling Fast
            </div>
          )}

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="w-full h-[160px] object-cover rounded-xl"
          />

          {/* RATING */}
          <p className="text-xs text-gray-500 mt-2">
            ⭐ 4.9 | 200+ learners
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-2 py-1 border border-blue-300 rounded-full">English</span>
            <span className="text-xs px-2 py-1 border border-red-300 rounded-full">Intermediate</span>
            <span className="text-xs px-2 py-1 border border-yellow-400 rounded-full">4 classes</span>
          </div>

          {/* TITLE */}
          <h3 className="text-sm font-semibold text-gray-800 mt-2">
            Summer robotics camp: fun projects with auto arduino...
          </h3>

          {/* AUTHOR */}
          <p className="text-xs text-gray-500 mt-1">
            👤 By Daniel james
          </p>

          {/* FOOTER */}
          <div className="flex justify-between items-center mt-3 text-xs text-gray-600">

            <div className="flex gap-3">
              <span>👤 7–10 yrs</span>
              <span>⏱ 45</span>
              <span>₹ 299</span>
            </div>

            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              🛒
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
{/* ================= TOP TEACHERS ================= */}
<section className="w-full bg-[#f5f5f7] py-16">

  <div className="max-w-[1200px] mx-auto px-6 text-center">

    {/* TITLE */}
    <h2 className="text-4xl font-semibold text-gray-800">
      Learn from Top Teachers
    </h2>

    {/* SUBTITLE */}
    <p className="text-gray-500 mt-2">
      Expert instructors who make learning fun and engaging for every child
    </p>

    {/* SCROLL WRAPPER */}
    <div className="mt-16 overflow-x-auto no-scrollbar pb-6">

      {/* CENTERED ROW */}
      <div className="flex gap-6 justify-center w-max mx-auto">

        {[
          { name: "Andy Brew", subject: "Computer science" },
          { name: "Andy Brew", subject: "English" },
          { name: "Andy Brew", subject: "Early educator" },
          { name: "Andy Brew", subject: "Coding" },
          { name: "Andy Brew", subject: "Computer science" },
          { name: "Andy Brew", subject: "Computer science" },
        ].map((teacher, i) => (

          <div key={i} className="relative min-w-[160px] pt-8">

            {/* AVATAR */}
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              className="w-14 h-14 rounded-full object-cover border-4 border-white shadow absolute left-1/2 -translate-x-1/2 top-0 z-10"
            />

            {/* CARD */}
            <div className="bg-white rounded-2xl pt-10 pb-4 px-3 border border-gray-200 shadow-sm text-center">

              <h3 className="text-sm font-semibold text-gray-800">
                {teacher.name}
              </h3>

              <p className="text-xs text-gray-500 mt-1">
                M.Sc, B.Ed | 15+ Years
              </p>

              <p className="text-xs text-gray-400 mt-1">
                1000+ Students
              </p>

              <div className="mt-2 inline-block px-3 py-1 bg-gray-100 text-xs rounded-full">
                {teacher.subject}
              </div>

            </div>

          </div>

        ))}

      </div>
    </div>

  </div>

</section>
{/* ================= COURSES SLIDER (REUSABLE) ================= */}
<section className="w-full bg-[#f5f5f7] py-16 relative">

    <div className="max-w-[1200px] mx-auto px-6">
 {/* LEFT BUTTON */}
    <button
  onClick={() => {
        document.getElementById("featuredSlider1").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
  className="absolute left-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
> 
  <FaChevronLeft />
</button>

    {/* RIGHT BUTTON */}
    
    <button
      onClick={() => {
        document.getElementById("featuredSlider1").scrollBy({
          left: 300,
          behavior: "smooth",
        }); 
      }}
      className="absolute right-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
    >
      <FaChevronRight />
    </button>

    {/* SLIDER */}
    <div
      id="featuredSlider1"
      className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
    >

      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="min-w-[280px] bg-white rounded-2xl p-3 shadow-sm border border-gray-200 hover:shadow-xl transition relative"
        >

          {/* SELLING FAST */}
          {i === 0 && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-md shadow">
              Selling Fast
            </div>
          )}

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="w-full h-[160px] object-cover rounded-xl"
          />

          {/* RATING */}
          <p className="text-xs text-gray-500 mt-2">
            ⭐ 4.9 | 200+ learners
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-2 py-1 border border-blue-300 rounded-full">English</span>
            <span className="text-xs px-2 py-1 border border-red-300 rounded-full">Intermediate</span>
            <span className="text-xs px-2 py-1 border border-yellow-400 rounded-full">4 classes</span>
          </div>

          {/* TITLE */}
          <h3 className="text-sm font-semibold text-gray-800 mt-2">
            Summer robotics camp: fun projects with auto arduino...
          </h3>

          {/* AUTHOR */}
          <p className="text-xs text-gray-500 mt-1">
            👤 By Daniel james
          </p>

          {/* FOOTER */}
          <div className="flex justify-between items-center mt-3 text-xs text-gray-600">

            <div className="flex gap-3">
              <span>👤 7–10 yrs</span>
              <span>⏱ 45</span>
              <span>₹ 299</span>
            </div>

            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              🛒
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>
{/* ================= WEBINAR SECTION ================= */}
<section className="w-full bg-[#f5f5f7] py-16 relative">

  <div className="max-w-[1200px] mx-auto px-6">

    {/* TITLE WITH LINES */}
    <div className="flex items-center justify-center gap-4 mb-10">

      <div className="hidden md:flex items-center gap-2">
        <div className="w-16 border-t-2 border-dashed border-purple-400"></div>
        <div className="w-2 h-2 bg-purple-500 rotate-45"></div>
      </div>

      <h2 className="text-4xl font-semibold text-gray-800 text-center">
        Webinar starting within 24 hrs
      </h2>

      <div className="hidden md:flex items-center gap-2">
        <div className="w-2 h-2 bg-purple-500 rotate-45"></div>
        <div className="w-16 border-t-2 border-dashed border-purple-400"></div>
      </div>

    </div>

    {/* LEFT BUTTON */}
    <button
  onClick={() => {
        document.getElementById("featuredSlider2").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
  className="absolute left-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
> 
  <FaChevronLeft />
</button>

    {/* RIGHT BUTTON */}
    <button
      onClick={() => {
        document.getElementById("featuredSlider2").scrollBy({
          left: 300,
          behavior: "smooth",
        }); 
      }}
      className="absolute right-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
    >
      <FaChevronRight />
    </button>

    {/* SLIDER */}
    <div
      id="featuredSlider2"
      className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
    >

      {[
        "Starting at 4am",
        "Starting at 7pm",
        "Starting at 10am",
        "Starting at 3pm",
        "Starting at 6pm",
      ].map((time, i) => (

        <div
          key={i}
          className="min-w-[280px] bg-white rounded-2xl p-3 shadow-sm border border-gray-200 hover:shadow-xl transition relative"
        >

          {/* SELLING FAST */}
          {i === 0 && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-md shadow">
              Selling Fast
            </div>
          )}

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="w-full h-[160px] object-cover rounded-xl"
          />

          {/* RATING */}
          <p className="text-xs text-gray-500 mt-2">
            ⭐ 4.9 | 200+ learners
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-2 py-1 border border-blue-300 rounded-full">
              English
            </span>

            <span className="text-xs px-2 py-1 border border-yellow-400 rounded-full">
              {time}
            </span>
          </div>

          {/* TITLE */}
          <h3 className="text-sm font-semibold text-gray-800 mt-2">
            Summer robotics camp: fun projects with auto arduino...
          </h3>

          {/* AUTHOR */}
          <p className="text-xs text-gray-500 mt-1">
            👤 By Daniel james
          </p>

          {/* FOOTER */}
          <div className="flex justify-between items-center mt-3 text-xs text-gray-600">

            <div className="flex gap-3">
              <span>👤 7–10 yrs</span>
              <span>⏱ 45</span>
              <span>₹ 299</span>
            </div>

            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              🛒
            </button>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
{/* ================= POPULAR CATEGORIES ================= */}



 <section className="w-full bg-[#f5f5f7] py-20">

      <div className="max-w-[1200px] mx-auto px-6 text-center">

        {/* TITLE */}
        <h2 className="text-4xl font-semibold text-gray-800">
          Popular Categories
        </h2>

        {/* SUBTITLE */}
        <p className="text-gray-500 mt-3">
          Pick what you love most! These categories have everything you need ✨
        </p>

        {/* ONE LINE FIXED ROW */}
        <div className="mt-16 flex justify-between items-end gap-6">

          {categories.map((cat, i) => {
            const isActive = i === active;

            return (
              <div
                key={i}
                onClick={() => setActive(i)}
                className={`
                  relative flex-1 max-w-[200px] h-[140px] rounded-2xl border 
                  flex items-end justify-center pb-4 text-sm font-medium
                  transition-all duration-300 cursor-pointer

                  ${
                    isActive
                      ? `${cat.color} text-white shadow-xl scale-105`
                      : "bg-white text-gray-700 border-gray-200 hover:shadow-lg hover:-translate-y-1"
                  }
                `}
              >

                {/* ICON */}
                <img
                  src={cat.img}
                  className={`
                    absolute left-1/2 -translate-x-1/2 
                    w-[85px] h-[85px] object-contain 
                    transition-all duration-300
                    ${isActive ? "-top-12 scale-110" : "-top-10"}
                  `}
                />

                {/* TEXT */}
                {cat.name}

              </div>
            );
          })}

        </div>

      </div>

    </section>
    {/* ================= COURSES SLIDER (REUSABLE) ================= */}
<section className="w-full bg-[#f5f5f7] py-16 relative">

    <div className="max-w-[1200px] mx-auto px-6">
 {/* LEFT BUTTON */}
    <button
  onClick={() => {
        document.getElementById("featuredSlider3").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
  className="absolute left-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
> 
  <FaChevronLeft />
</button>

    {/* RIGHT BUTTON */}
    
    <button
      onClick={() => {
        document.getElementById("featuredSlider3").scrollBy({
          left: 300,
          behavior: "smooth",
        }); 
      }}
      className="absolute right-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
    >
      <FaChevronRight />
    </button>

    {/* SLIDER */}
    <div
      id="featuredSlider3"
      className="flex gap-6 overflow-x-auto scroll-smooth no-scrollbar pb-4"
    >

      {[...Array(12)].map((_, i) => (
        <div
          key={i}
          className="min-w-[280px] bg-white rounded-2xl p-3 shadow-sm border border-gray-200 hover:shadow-xl transition relative"
        >

          {/* SELLING FAST */}
          {i === 0 && (
            <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs px-3 py-1 rounded-md shadow">
              Selling Fast
            </div>
          )}

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="w-full h-[160px] object-cover rounded-xl"
          />

          {/* RATING */}
          <p className="text-xs text-gray-500 mt-2">
            ⭐ 4.9 | 200+ learners
          </p>

          {/* TAGS */}
          <div className="flex gap-2 mt-2 flex-wrap">
            <span className="text-xs px-2 py-1 border border-blue-300 rounded-full">English</span>
            <span className="text-xs px-2 py-1 border border-red-300 rounded-full">Intermediate</span>
            <span className="text-xs px-2 py-1 border border-yellow-400 rounded-full">4 classes</span>
          </div>

          {/* TITLE */}
          <h3 className="text-sm font-semibold text-gray-800 mt-2">
            Summer robotics camp: fun projects with auto arduino...
          </h3>

          {/* AUTHOR */}
          <p className="text-xs text-gray-500 mt-1">
            👤 By Daniel james
          </p>

          {/* FOOTER */}
          <div className="flex justify-between items-center mt-3 text-xs text-gray-600">

            <div className="flex gap-3">
              <span>👤 7–10 yrs</span>
              <span>⏱ 45</span>
              <span>₹ 299</span>
            </div>

            <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
              🛒
            </button>

          </div>

        </div>
      ))}

    </div>

  </div>

</section>

{/* ================= FILTER WITH TIME ================= */}
<section className="w-full bg-[#e9f0ef] py-20 relative">

  <div className="max-w-[1200px] mx-auto px-6">

    {/* TITLE */}
    <h2 className="text-4xl font-semibold text-gray-800 text-center">
      Filter with Time
    </h2>

    {/* SUBTITLE */}
    <p className="text-center text-gray-500 mt-2">
      Choose the perfect time that fits your child's schedule
    </p>

    {/* TIME FILTER CARDS */}
    <div className="mt-10 flex justify-center gap-6 flex-wrap">

      {[
        { title: "Morning classes", time: "8am – 12pm", color: "blue" },
        { title: "Afternoon classes", time: "12pm – 4pm", color: "yellow" },
        { title: "Evening classes", time: "4pm – 8pm", color: "orange" },
        { title: "Late evening classes", time: "8pm – 11pm", color: "purple" },
      ].map((item, i) => {

        const isActive = i === activeTime;

        const colorStyles = {
          blue: {
            active: "border-blue-500 bg-blue-50 shadow-[0_10px_25px_rgba(59,130,246,0.25)]",
            hover: "hover:border-blue-400 hover:bg-blue-50",
          },
          yellow: {
            active: "border-yellow-500 bg-yellow-50 shadow-[0_10px_25px_rgba(234,179,8,0.25)]",
            hover: "hover:border-yellow-400 hover:bg-yellow-50",
          },
          orange: {
            active: "border-orange-500 bg-orange-50 shadow-[0_10px_25px_rgba(249,115,22,0.25)]",
            hover: "hover:border-orange-400 hover:bg-orange-50",
          },
          purple: {
            active: "border-purple-500 bg-purple-50 shadow-[0_10px_25px_rgba(168,85,247,0.25)]",
            hover: "hover:border-purple-400 hover:bg-purple-50",
          },
        };

        return (
          <div
            key={i}
            onClick={() => setActiveTime(i)}
            className={`
              relative w-[260px] h-[90px] rounded-xl border px-5 py-4 
              flex flex-col justify-center cursor-pointer transition-all duration-300

              ${
                isActive
                  ? colorStyles[item.color].active
                  : `bg-white border-gray-200 ${colorStyles[item.color].hover}`
              }
            `}
          >

            <h3 className="text-sm font-semibold text-gray-800">
              {item.title}
            </h3>

            <p className="text-xs text-gray-500 mt-1">
              {item.time}
            </p>

            {/* ICON */}
            <div className="absolute bottom-2 right-3 text-3xl opacity-80">
              {i === 0 && "☀️"}
              {i === 1 && "🌤️"}
              {i === 2 && "🌙"}
              {i === 3 && "🌜"}
            </div>

          </div>
        );
      })}

    </div>
    {/* SLIDER BUTTONS */}
    <button
  onClick={() => {
        document.getElementById("featuredSlider4").scrollBy({
          left: -300,
          behavior: "smooth",
        });
      }}
  className="absolute left-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
> 
  <FaChevronLeft />
</button>

    <button
      onClick={() => {
        document.getElementById("featuredSlider4").scrollBy({
          left: 300,
          behavior: "smooth",
        }); 
      }}
      className="absolute right-6 top-[60%] z-10 bg-white shadow p-3 rounded-full hover:bg-gray-100"
    >
      <FaChevronRight />
    </button>

    {/* COURSE CARDS SLIDER */}
    <div
      id="featuredSlider4"
      className="mt-16 flex gap-6 overflow-x-auto no-scrollbar pb-4"
    >

      {[...Array(3)].map((_, i) => (

        <div
          key={i}
          className="min-w-[520px] bg-white rounded-2xl p-4 border border-gray-200 shadow-sm flex gap-4 items-center relative"
        >

          {/* SELLING FAST */}
          {i === 0 && (
            <div className="absolute top-3 left-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-md">
              Selling Fast
            </div>
          )}

          {/* IMAGE */}
          <img
            src="https://images.unsplash.com/photo-1588072432836-e10032774350"
            className="w-[200px] h-[140px] object-cover rounded-xl"
          />

          {/* CONTENT */}
          <div className="flex-1">

            {/* TAGS */}
            <div className="flex gap-2 flex-wrap">
              <span className="text-xs px-2 py-1 border border-yellow-400 rounded-full">English</span>
              <span className="text-xs px-2 py-1 border border-red-300 rounded-full">Intermediate</span>
              <span className="text-xs px-2 py-1 border border-blue-400 rounded-full">Morning class</span>
            </div>

            {/* TITLE */}
            <h3 className="text-sm font-semibold text-gray-800 mt-2">
              Summer robotics camp: fun projects with auto arduino, Tinker cad coding and 3d printing
            </h3>

            {/* AUTHOR */}
            <p className="text-xs text-gray-500 mt-2">
              👤 By Daniel james ⭐ 4.9 | 200+ learners
            </p>

            {/* FOOTER */}
            <div className="flex justify-between items-center mt-3 text-xs text-gray-600">

              <div className="flex gap-4">
                <span>👤 7–10 yrs</span>
                <span>⏱ 45</span>
                <span>₹ 299</span>
              </div>

              <button className="bg-gray-100 p-2 rounded-full hover:bg-gray-200">
                🛒
              </button>

            </div>

          </div>

        </div>

      ))}

    </div>

  </div>

</section>
    

    </div>
  );
}

export default Browse;