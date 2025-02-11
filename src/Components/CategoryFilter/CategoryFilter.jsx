"use client";

import { useRef, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function CategoryFilter({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  const scrollContainerRef = useRef(null);
  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(true);

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } =
        scrollContainerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", handleScroll);
      handleScroll(); // Check initial state
    }
    return () => scrollContainer?.removeEventListener("scroll", handleScroll);
  }, []); // Removed scrollContainerRef.current from dependencies

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 200;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative mb-8">
      <div
        className="flex items-center overflow-x-auto scrollbar-hide scroll-smooth"
        ref={scrollContainerRef}
      >
        <div className="flex gap-2 px-4">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              className={`whitespace-nowrap px-6 ${
                selectedCategory === category
                  ? "bg-primary text-black hover:bg-primary/90"
                  : "text-primary hover:text-primary hover:bg-primary/10"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
      {showLeftArrow && (
        <button
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
          onClick={() => scroll("left")}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
      )}
      {showRightArrow && (
        <button
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70"
          onClick={() => scroll("right")}
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      )}
    </div>
  );
}
