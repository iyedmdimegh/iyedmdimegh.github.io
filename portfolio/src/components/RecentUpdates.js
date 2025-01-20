import React, { useState, useEffect } from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';
import { recentUpdates, BASE_URL } from '../data/constants';

function RecentUpdates() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (recentUpdates.length <= 1) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev + 1) % recentUpdates.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrev = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentIndex((prev) => (prev - 1 + recentUpdates.length) % recentUpdates.length);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });

  return (
    <section className="mb-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-16">
      <h2 className="text-3xl font-bold mb-8 text-gray-800 dark:text-gray-200 text-center">
        Recent Updates
      </h2>
      <div className="relative h-[400px] md:h-[500px] overflow-hidden rounded-xl bg-gray-100 dark:bg-gray-800">
        <div
          {...handlers}
          className="h-full w-full flex transition-transform duration-500 ease-out cursor-grab active:cursor-grabbing"
          style={{
            transform: `translateX(-${currentIndex * 100}%)`,
          }}
        >
          {recentUpdates.map((update, index) => (
            <div key={update.id} className="w-full h-full flex-shrink-0 relative">
              <img
                src={BASE_URL + update.image}
                alt={update.title}
                className="w-full h-full object-cover"
                draggable="false"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                    {update.title}
                  </h3>
                  <p className="text-sm md:text-base text-gray-200">
                    {update.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {recentUpdates.length > 1 && (
          <>
            <button
              onClick={handlePrev}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
              aria-label="Previous update"
            >
              <FaChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300"
              aria-label="Next update"
            >
              <FaChevronRight className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {recentUpdates.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentIndex === index
                      ? 'bg-white scale-125'
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to update ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}

export default RecentUpdates;