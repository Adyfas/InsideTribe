import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // console.log("Scroll triggered to top:", pathname);

    if (window.lenis) {
      window.scrollTo({ top: 0, left: 0 });
      //   window.lenis.scrollTo(0);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

export default ScrollToTop;
