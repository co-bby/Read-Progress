// src/ReadProgress.tsx
import { useEffect, useState } from "react";
var ProgressBar = ({ color = "#FF0000", height = 4, scrollOffset = 0, zIndex = "999" }) => {
  const [scrollProgress, setScrollProgress] = useState(scrollOffset);
  useEffect(() => {
    const handleScroll = () => {
      const totalScrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const windowScrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
      const progress = windowScrollTop / totalScrollHeight * 100;
      setScrollProgress(progress);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return /* @__PURE__ */ React.createElement(
    "div",
    {
      style: {
        height: `${height}px`,
        left: 0,
        position: "fixed",
        top: 0,
        width: "100%",
        zIndex: `${zIndex}`
      }
    },
    /* @__PURE__ */ React.createElement(
      "div",
      {
        style: {
          backgroundColor: `${color}`,
          height: "100%",
          width: `${scrollProgress}%`
        }
      }
    )
  );
};
var ReadProgress_default = ProgressBar;
export {
  ReadProgress_default as default
};
