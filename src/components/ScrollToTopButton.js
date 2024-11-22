import { useState, useEffect } from 'react';

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when user scrolls down
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Scroll to top handler
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // Smooth scrolling
    });
  };

  return (
    isVisible && (
      <button
        onClick={handleScrollToTop}
        className="fixed bottom-8 right-8 bg-purple-600 text-black p-3 rounded-full shadow-lg hover:bg-purple-700 focus:outline-none transition-transform transform hover:scale-105"
        aria-label="Scroll to top"
      >
        ↑
      </button>
    )
  );
}
