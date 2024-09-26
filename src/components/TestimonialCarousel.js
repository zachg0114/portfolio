'use client';

import { useEffect, useRef } from 'react';
import { Card, CardBody, CardFooter } from '@nextui-org/react';

export default function TestimonialCarousel() {
  // Reference for the auto-scrolling effect
  const scrollContainerRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    
    const cloneElements = () => {
      const children = scrollContainer.children;
      const totalWidth = Array.from(children).reduce((acc, child) => acc + child.offsetWidth, 0);

      // Clone the children for seamless scrolling
      if (scrollContainer.scrollWidth <= totalWidth * 2) {
        Array.from(children).forEach((child) => {
          const clone = child.cloneNode(true);
          scrollContainer.appendChild(clone);
        });
      }
    };

    const scroll = () => {
      scrollContainer.scrollLeft += 1; // Adjust the speed here
      if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
        scrollContainer.scrollLeft = 0; // Reset back for continuous scroll
      }
    };

    cloneElements(); // Clone the cards initially
    const scrollInterval = setInterval(scroll, 50); // Speed of the scroll
    return () => clearInterval(scrollInterval);
  }, []);

  return (
    <section className="mt-16 relative">
      <h2 className="text-3xl font-semibold text-center mb-8">What People Are Saying</h2>

      {/* Container to hold both the gradient effects and the carousel */}
      <div className="relative">
        {/* Left Fade Effect */}
        <div className="absolute top-0 left-0 h-full w-12 bg-gradient-to-r from-[#0a0c1a] to-transparent z-10 pointer-events-none"></div>

        {/* Carousel Container */}
        <div
          ref={scrollContainerRef}
          className="flex overflow-x-hidden space-x-6 py-4"
          style={{ whiteSpace: 'nowrap', paddingLeft: '1rem', paddingRight: '1rem' }}
        >
          {/* Testimonial Cards */}
          <Card className="flex-shrink-0 w-96 bg-[#1b1b1e] p-6 rounded-lg shadow-lg">
            <CardBody className="px-4 py-2">
              <p className="text-lg text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                "Zach's work ethic and attention to detail are unparalleled."
              </p>
            </CardBody>
            <CardFooter className="mt-4">
              <p className="text-gray-400" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                — John Doe, CEO of Example Corp.
              </p>
            </CardFooter>
          </Card>

          <Card className="flex-shrink-0 w-96 bg-[#1b1b1e] p-6 rounded-lg shadow-lg">
            <CardBody className="px-4 py-2">
              <p className="text-lg text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                "A fantastic collaborator with a deep understanding of technology."
              </p>
            </CardBody>
            <CardFooter className="mt-4">
              <p className="text-gray-400" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                — Jane Smith, CTO of Tech Innovations
              </p>
            </CardFooter>
          </Card>

          <Card className="flex-shrink-0 w-96 bg-[#1b1b1e] p-6 rounded-lg shadow-lg">
            <CardBody className="px-4 py-2">
              <p className="text-lg text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                "Always goes the extra mile to deliver quality work."
              </p>
            </CardBody>
            <CardFooter className="mt-4">
              <p className="text-gray-400" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                — Michael Brown, Project Manager at Creative Solutions
              </p>
            </CardFooter>
          </Card>

          <Card className="flex-shrink-0 w-96 bg-[#1b1b1e] p-6 rounded-lg shadow-lg">
            <CardBody className="px-4 py-2">
              <p className="text-lg text-white" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                "Zach consistently delivers high-quality results ahead of schedule."
              </p>
            </CardBody>
            <CardFooter className="mt-4">
              <p className="text-gray-400" style={{ whiteSpace: 'normal', wordWrap: 'break-word' }}>
                — Sarah Thompson, Senior Developer at WebTech
              </p>
            </CardFooter>
          </Card>
        </div>

        {/* Right Fade Effect */}
        <div className="absolute top-0 right-0 h-full w-12 bg-gradient-to-l from-[#0a0c1a] to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
}
