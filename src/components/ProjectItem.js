import React, { useState, useEffect } from 'react';
import { FaYoutube, FaGithub, FaFileAlt, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useSwipeable } from 'react-swipeable';

function ProjectItem({ title, description, images, technologies, youtubeLink, githubLink, documentLink }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      if (!isTransitioning) {
        handleNext();
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length, isTransitioning]);

  const handleNext = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlePrevious = () => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
    setTimeout(() => setIsTransitioning(false), 500);
  };

  const handlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrevious,
    preventDefaultTouchmoveEvent: true,
    trackMouse: true
  });


  // Desktop version
  const desktopVersion = (
    <div className="hidden md:flex my-4 bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
      <div 
        {...handlers}
        className="relative w-1/2 h-[400px] overflow-hidden bg-gray-100 dark:bg-gray-700 my-auto"
      >
        <div 
          className="h-full flex transition-transform duration-500 ease-out "
          style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
        >
          {images.map((image, index) => (
            <div key={index} className="h-full min-w-full ">
              <img
                src={image}
                alt={`${title} - Image ${index + 1}`}
                className="w-full h-full object-contain"
                draggable="false"
              />
            </div>
          ))}
        </div>
        
        {images.length > 1 && (
          <>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrevious();
              }}
              className="absolute left-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300 z-10"
              aria-label="Previous image"
            >
              <FaChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="absolute right-2 top-1/2 -translate-y-1/2 p-2 rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors duration-300 z-10"
              aria-label="Next image"
            >
              <FaChevronRight className="w-4 h-4" />
            </button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={(e) => {
                    e.stopPropagation();
                    if (!isTransitioning) {
                      setIsTransitioning(true);
                      setCurrentImageIndex(index);
                      setTimeout(() => setIsTransitioning(false), 500);
                    }
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    currentImageIndex === index 
                      ? 'bg-white scale-125' 
                      : 'bg-white/50 hover:bg-white/75'
                  }`}
                  aria-label={`Go to image ${index + 1}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="w-1/2 p-8 flex flex-col">
        <div className="flex-grow">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-3xl font-bold text-gray-800 dark:text-gray-100">
              {title}
            </h3>
            <div className="flex gap-2">
              {youtubeLink && (
                <a
                  href={youtubeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all duration-300 group"
                >
                  <FaYoutube className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
                </a>
              )}
              {githubLink && (
                <a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all duration-300 group"
                >
                  <FaGithub className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
                </a>
              )}
              {documentLink && (
                <a
                  href={documentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-teal-100 dark:hover:bg-teal-900/30 transition-all duration-300 group"
                >
                  <FaFileAlt className="w-5 h-5 text-gray-600 dark:text-gray-300 group-hover:text-teal-600 dark:group-hover:text-teal-400 transition-colors duration-300" />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-600 dark:text-gray-300 mb-8 text-lg leading-relaxed">
            {description}
          </p>
        </div>

        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span
              key={index}
              className="px-4 py-2 text-sm font-medium rounded-full bg-teal-600 text-white hover:bg-teal-700 transition-colors duration-300"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <>
      {desktopVersion}
    </>
  );
}

export default ProjectItem;