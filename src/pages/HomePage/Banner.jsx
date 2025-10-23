// // banner section code here
// import React from "react";
// import { Link } from "react-router";

// const Banner = () => {
//   return (
//     <div className="BannerBg bg-no-repeat md:bg-cover bg-center h-screen flex items-center justify-center px-4">
//       <div className="max-w-6xl text-center">
//         <h2 className="text-2xl sm:text-4xl md:text-5xl font-semibold text-[#d60231] mb-1.5 md:mb-4">
//           Experience the Taste of Perfection 🍽️
//         </h2>
//         <h1 className="text-3xl sm:text-5xl md:text-8xl font-bold text-orange mb-2.5 md:mb-6 leading-tight">
//           It's The Food You Love
//         </h1>
//         <p className="text-base sm:text-xl md:text-2xl text-gray-700 leading-relaxed px-2 md:px-8">
//           Welcome to your ultimate dining companion. From discovering delicious
//           dishes to managing restaurant operations seamlessly — everything is
//           just a click away.
//         </p>
//         <Link to="/all_foods">
//           <button className="mt-3.5 md:mt-10 py-3 px-8 sm:px-10 md:px-12 text-lg sm:text-xl font-semibold bg-orange hover:bg-white border-2 hover:text-orange cursor-pointer hover:border-orange  text-white rounded-2xl transition duration-300">
//             Explore All Foods
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default Banner;


// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight, Sparkles, Clock, Award, Star } from 'lucide-react';

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const [isAutoPlaying, setIsAutoPlaying] = useState(true);

//   const slides = [
//     {
//       title: "Experience Fine Dining",
//       subtitle: "Exquisite Flavors Await",
//       description: "Indulge in our chef's signature dishes crafted with the finest ingredients and passion for culinary excellence.",
//       image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=1920&q=80",
//       icon: <Sparkles className="w-12 h-12" />,
//       badge: "Chef's Special"
//     },
//     {
//       title: "Fresh & Delicious",
//       subtitle: "Farm to Table Experience",
//       description: "Every ingredient is carefully sourced from local farms to bring you the freshest and most authentic flavors.",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80",
//       icon: <Award className="w-12 h-12" />,
//       badge: "Locally Sourced"
//     },
//     {
//       title: "Perfect Ambiance",
//       subtitle: "Dine in Style & Comfort",
//       description: "Experience exceptional service in our beautifully designed dining space, perfect for any occasion.",
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
//       icon: <Star className="w-12 h-12" />,
//       badge: "5-Star Rated"
//     }
//   ];

//   useEffect(() => {
//     if (!isAutoPlaying) return;
    
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 6000);

//     return () => clearInterval(interval);
//   }, [isAutoPlaying, slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//     setIsAutoPlaying(false);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//     setIsAutoPlaying(false);
//   };

//   return (
//     <div className="relative h-screen overflow-hidden bg-slate-900">
//       {/* Background Images with Ken Burns Effect */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <div className={`w-full h-full ${index === currentSlide ? 'animate-ken-burns' : ''}`}>
//             <img
//               src={slide.image}
//               alt={slide.title}
//               className="w-full h-full object-cover"
//             />
//           </div>
//           {/* Multi-layer Overlay for Depth */}
//           <div className="absolute inset-0 bg-gradient-to-r from-slate-900/65 via-slate-900/50 to-slate-900/30"></div>
//           <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent"></div>
//         </div>
//       ))}

//       {/* Decorative Animated Elements */}
//       <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-orange-500/10 rounded-full blur-3xl animate-pulse"></div>
//       <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>

//       {/* Main Content */}
//       <div className="relative h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
//         <div className="max-w-7xl w-full">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute inset-0 flex items-center transition-all duration-700 ${
//                 index === currentSlide
//                   ? 'opacity-100 translate-x-0'
//                   : index < currentSlide
//                   ? 'opacity-0 -translate-x-20'
//                   : 'opacity-0 translate-x-20'
//               }`}
//             >
//               <div className="w-full lg:w-2/3 px-6 lg:px-12">
//                 {/* Badge */}
//                 <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-sm border border-orange-500/30 rounded-full px-4 py-2 mb-6 animate-fade-in">
//                   {slide.icon}
//                   <span className="text-orange-400 font-semibold text-sm">{slide.badge}</span>
//                 </div>

//                 {/* Title */}
//                 <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight animate-slide-left" style={{ animationDelay: '0.2s' }}>
//                   {slide.title}
//                 </h2>

//                 {/* Subtitle */}
//                 <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-400 to-orange-500 mb-6 leading-tight animate-slide-left" style={{ animationDelay: '0.4s' }}>
//                   {slide.subtitle}
//                 </h1>

//                 {/* Description */}
//                 <p className="text-lg sm:text-xl md:text-2xl text-slate-300 leading-relaxed mb-8 max-w-2xl animate-slide-left" style={{ animationDelay: '0.6s' }}>
//                   {slide.description}
//                 </p>

//                 {/* CTA Buttons */}
//                 <div className="flex flex-wrap gap-4 animate-slide-left" style={{ animationDelay: '0.8s' }}>
//                   <button className="group relative px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-full overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-orange-500/50">
//                     <span className="relative z-10 cursor-pointer flex items-center gap-2">
//                       Explore Menu
//                       <span className="group-hover:translate-x-1 transition-transform duration-300">→</span>
//                     </span>
//                     <div className="absolute inset-0 bg-gradient-to-r from-orange-600 to-amber-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
//                   </button>
                  
//                   <button className="group  px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-bold text-lg rounded-full border-2 border-white/30 hover:bg-white hover:text-slate-900 transition-all duration-300 hover:scale-105">
//                     Book a Table
//                   </button>
//                 </div>

//                 {/* Stats */}
//                 <div className="flex flex-wrap gap-8 mt-12 animate-slide-left" style={{ animationDelay: '1s' }}>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-orange-400">500+</div>
//                     <div className="text-sm text-slate-400">Dishes</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-orange-400">50K+</div>
//                     <div className="text-sm text-slate-400">Happy Customers</div>
//                   </div>
//                   <div className="text-center">
//                     <div className="text-3xl font-bold text-orange-400">4.9★</div>
//                     <div className="text-sm text-slate-400">Rating</div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute cursor-pointer left-4 lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-orange-500 z-20 shadow-2xl group"
//         aria-label="Previous slide"
//       >
//         <ChevronLeft className="w-7 h-7 lg:w-9 lg:h-9 group-hover:-translate-x-1 transition-transform duration-300" />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute cursor-pointer right-4 lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 lg:w-16 lg:h-16 bg-white/10 backdrop-blur-md hover:bg-orange-500 text-white rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 border border-white/20 hover:border-orange-500 z-20 shadow-2xl group"
//         aria-label="Next slide"
//       >
//         <ChevronRight className="w-7 h-7 lg:w-9 lg:h-9 group-hover:translate-x-1 transition-transform duration-300" />
//       </button>

//       {/* Slide Indicators */}
//       <div className="absolute bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`transition-all duration-300 rounded-full ${
//               index === currentSlide
//                 ? 'w-12 h-3 bg-orange-500 shadow-lg shadow-orange-500/50'
//                 : 'w-3 h-3 bg-white/30 hover:bg-white/60 hover:scale-125'
//             }`}
//             aria-label={`Go to slide ${index + 1}`}
//           />
//         ))}
//       </div>

//       {/* Auto-play Timer Visual */}
//       {isAutoPlaying && (
//         <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10 z-20">
//           <div
//             className="h-full bg-gradient-to-r from-orange-500 to-amber-500 shadow-lg shadow-orange-500/50 animate-progress"
//             key={currentSlide}
//           />
//         </div>
//       )}

//       {/* Scroll Indicator */}
//       <div className="absolute bottom-20 lg:bottom-24 left-1/2 -translate-x-1/2 z-20 animate-bounce">
//         <div className="flex flex-col items-center gap-2 text-white/60">
//           <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
//             <div className="w-1 h-3 bg-white/60 rounded-full animate-scroll"></div>
//           </div>
//           <span className="text-xs font-medium">Scroll</span>
//         </div>
//       </div>

//       <style jsx>{`
//         @keyframes slide-left {
//           from {
//             opacity: 0;
//             transform: translateX(-50px);
//           }
//           to {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         @keyframes fade-in {
//           from {
//             opacity: 0;
//             transform: scale(0.9);
//           }
//           to {
//             opacity: 1;
//             transform: scale(1);
//           }
//         }

//         @keyframes ken-burns {
//           0% {
//             transform: scale(1);
//           }
//           100% {
//             transform: scale(1.1);
//           }
//         }

//         @keyframes progress {
//           from {
//             width: 0%;
//           }
//           to {
//             width: 100%;
//           }
//         }

//         @keyframes scroll {
//           0% {
//             transform: translateY(0);
//             opacity: 1;
//           }
//           100% {
//             transform: translateY(12px);
//             opacity: 0;
//           }
//         }

//         .animate-slide-left {
//           animation: slide-left 0.8s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-fade-in {
//           animation: fade-in 0.6s ease-out forwards;
//           opacity: 0;
//         }

//         .animate-ken-burns {
//           animation: ken-burns 8s ease-out forwards;
//         }

//         .animate-progress {
//           animation: progress 6s linear forwards;
//         }

//         .animate-scroll {
//           animation: scroll 1.5s ease-in-out infinite;
//         }
//       `}</style>
//     </div>
//   );
// };

// export default Banner;

// import React, { useState, useEffect } from 'react';
// import { ChevronLeft, ChevronRight } from 'lucide-react';

// const Banner = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const slides = [
//     {
//       title: "Authentic Italian Cuisine",
//       subtitle: "Handcrafted pasta & wood-fired pizzas",
//       image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80",
//       textPosition: "left"
//     },
//     {
//       title: "Fresh Seasonal Ingredients",
//       subtitle: "Locally sourced, expertly prepared",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80",
//       textPosition: "left"
//     },
//     {
//       title: "A Place to Gather",
//       subtitle: "Perfect for any occasion",
//       image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80",
//       textPosition: "left"
//     }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentSlide((prev) => (prev + 1) % slides.length);
//     }, 5000);
//     return () => clearInterval(interval);
//   }, [slides.length]);

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev + 1) % slides.length);
//   };

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
//   };

//   const goToSlide = (index) => {
//     setCurrentSlide(index);
//   };

//   return (
//     <div className="relative h-screen w-full overflow-hidden bg-neutral-900">
//       {/* Image Slides */}
//       {slides.map((slide, index) => (
//         <div
//           key={index}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? 'opacity-100' : 'opacity-0'
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40"></div>
//         </div>
//       ))}

//       {/* Content */}
//       <div className="relative h-full max-w-7xl mx-auto px-6 lg:px-12 flex items-center">
//         {slides.map((slide, index) => (
//           <div
//             key={index}
//             className={`w-full lg:w-3/5 transition-all duration-700 ease-out ${
//               index === currentSlide
//                 ? 'opacity-100 translate-y-0'
//                 : 'opacity-0 translate-y-8 pointer-events-none'
//             }`}
//           >
//             <div className="space-y-6">
//               <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
//                 {slide.title}
//               </h1>
//               <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-light tracking-wide">
//                 {slide.subtitle}
//               </p>
//               <div className="pt-4 flex gap-4">
//                 <button className="px-8 py-4 bg-orange-500 text-white text-lg font-medium hover:bg-orange-600 transition-colors duration-200">
//                   View Menu
//                 </button>
//                 <button className="px-8 py-4 border-2 border-white text-white text-lg font-medium hover:bg-white hover:text-black transition-colors duration-200">
//                   Reserve Table
//                 </button>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Navigation */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200 z-20"
//         aria-label="Previous"
//       >
//         <ChevronLeft className="w-8 h-8" strokeWidth={1.5} />
//       </button>

//       <button
//         onClick={nextSlide}
//         className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 flex items-center justify-center text-white hover:bg-white/10 transition-colors duration-200 z-20"
//         aria-label="Next"
//       >
//         <ChevronRight className="w-8 h-8" strokeWidth={1.5} />
//       </button>

//       {/* Dots */}
//       <div className="absolute bottom-8 left-6 lg:left-12 flex gap-3 z-20">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => goToSlide(index)}
//             className={`h-0.5 transition-all duration-300 ${
//               index === currentSlide
//                 ? 'w-12 bg-white'
//                 : 'w-8 bg-white/40 hover:bg-white/60'
//             }`}
//             aria-label={`Slide ${index + 1}`}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Banner;



import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "Authentic Italian Cuisine",
      subtitle: "Handcrafted pasta & wood-fired pizzas",
      description: "Experience the rich flavors of traditional Italian cooking",
      image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=1920&q=80"
    },
    {
      title: "Fresh Seasonal Ingredients",
      subtitle: "Locally sourced, expertly prepared",
      description: "From farm to table, we bring you the finest quality",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1920&q=80"
    },
    {
      title: "A Place to Gather",
      subtitle: "Perfect for any occasion",
      description: "Create lasting memories in our warm, welcoming space",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=1920&q=80"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5500);
    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative h-screen w-full overflow-hidden bg-neutral-950">
      {/* Image Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover scale-105"
            style={{
              animation: index === currentSlide ? 'slowZoom 8s ease-out forwards' : 'none'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`w-full lg:w-3/5 transition-all duration-700 ease-out ${
              index === currentSlide
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-8 pointer-events-none absolute'
            }`}
          >
            <div className="space-y-6">
              {/* Small badge */}
              <div className="inline-flex items-center gap-2 border border-white/30 rounded-full px-4 py-2 backdrop-blur-sm">

                <span className="text-sm text-white/90 font-medium tracking-wide">Michelin Recommended</span>
              </div>

              <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-white leading-tight tracking-tight">
                {slide.title}
              </h1>
              
              <p className="text-2xl sm:text-3xl lg:text-4xl text-orange-400 font-light tracking-wide">
                {slide.subtitle}
              </p>

              <p className="text-lg sm:text-xl text-white/80 font-light max-w-xl leading-relaxed">
                {slide.description}
              </p>

              <div className="pt-6 flex flex-wrap gap-4">
                <button className="group cursor-pointer relative px-10 py-4 bg-orange-500 text-white text-lg font-medium overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-orange-500/30">
                  <span className="relative z-10">View Menu</span>
                  <div className="absolute inset-0 bg-orange-600 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </button>
                <button className="px-10 cursor-pointer py-4 border-2 border-white/80 text-white text-lg font-medium hover:bg-white hover:text-black transition-all duration-300">
                  Reserve Table
                </button>
              </div>

              {/* Info badges */}
              <div className="flex flex-wrap gap-6 pt-4">
                <div className="flex items-center gap-2">
                  <div className="w-px h-8 bg-white/30"></div>
                  <div>
                    <div className="text-2xl font-bold text-white">4.9</div>
                    <div className="text-xs text-white/60">Rating</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-px h-8 bg-white/30"></div>
                  <div>
                    <div className="text-2xl font-bold text-white">200+</div>
                    <div className="text-xs text-white/60">Menu Items</div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-px h-8 bg-white/30"></div>
                  <div>
                    <div className="text-2xl font-bold text-white">15+</div>
                    <div className="text-xs text-white/60">Years Serving</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation */}
      <button
        onClick={prevSlide}
        className="absolute cursor-pointer left-6 rounded-full lg:left-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white border border-white/20 backdrop-blur-sm hover:bg-white/50 hover:text-black transition-all duration-300 z-20 group"
        aria-label="Previous"
      >
        <ChevronLeft className="w-7 h-7 group-hover:-translate-x-0.5 transition-transform" strokeWidth={1.5} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-6 cursor-pointer rounded-full lg:right-8 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center text-white border border-white/20 backdrop-blur-sm hover:bg-white/50 hover:text-black transition-all duration-300 z-20 group"
        aria-label="Next"
      >
        <ChevronRight className="w-7 h-7 group-hover:translate-x-0.5 transition-transform" strokeWidth={1.5} />
      </button>

      {/* Dots Navigation */}
      <div className="absolute bottom-10 left-6 sm:left-8 lg:left-12 flex items-center gap-4 z-20">
        <div className="text-white/40 text-sm font-light">
          {String(currentSlide + 1).padStart(2, '0')} / {String(slides.length).padStart(2, '0')}
        </div>
        <div className="flex gap-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-0.5 transition-all duration-500 ${
                index === currentSlide
                  ? 'w-16 bg-orange-500'
                  : 'w-8 bg-white/30 hover:bg-white/50'
              }`}
              aria-label={`Slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 right-6 sm:right-8 lg:right-12 z-20 hidden lg:block">
        <div className="flex flex-col items-center gap-2 text-white/60">
          <span className="text-xs font-light tracking-wider rotate-180" style={{ writingMode: 'vertical-rl' }}>
            SCROLL
          </span>
          <div className="w-px h-12 bg-white/20 relative overflow-hidden">
            <div className="w-full h-full bg-orange-500 animate-scroll-line"></div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slowZoom {
          from {
            transform: scale(1);
          }
          to {
            transform: scale(1.05);
          }
        }

        @keyframes scroll-line {
          0% {
            transform: translateY(-100%);
          }
          100% {
            transform: translateY(100%);
          }
        }

        .animate-scroll-line {
          animation: scroll-line 2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Banner;