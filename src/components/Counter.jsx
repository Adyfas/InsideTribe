"use client";
import { useEffect, useState } from "react";
const Counter = ({ target, duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(target / (duration / 16));
    const interval = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(interval);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(interval);
  }, [target, duration]);

  const formatCount = (count) => {
    if (count >= 1000000) {
      return `${(count / 1000000).toFixed(0)}M`;
    } else if (count >= 1000) {
      return `${(count / 1000).toFixed(0)}K`;
    } else {
      return count.toLocaleString();
    }
  };

  return <span>{formatCount(count)}+</span>;
};

export default Counter;
