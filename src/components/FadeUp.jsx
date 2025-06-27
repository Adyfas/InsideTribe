import React, { useRef, useEffect, useState } from "react";

function FadeUp({ children, delay = 0, className = "" }) {
  const ref = useRef();
  const [show, setShow] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new window.IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setShow(true), delay);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 opacity-0 translate-y-8 ${show ? "opacity-100 translate-y-0" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default FadeUp; 