"use client";

import { useEffect, useRef } from "react";
import Typed from "typed.js";

const TypedText = ({ strings, className }) => {
  const typedRef = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedRef.current, {
      strings,
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
    });

    return () => typed.destroy();
  }, [strings]);

  return <span ref={typedRef} className={className} />;
};

export default TypedText;