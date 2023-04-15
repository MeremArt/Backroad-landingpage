import React, { useState, useEffect, useRef } from "react";

const TypingAnimation = ({ texts }) => {
  const [visibleCharacters, setVisibleCharacters] = useState(
    Array(texts.length).fill(0)
  );
  const refs = useRef(texts.map(() => React.createRef()));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const intervalId = setInterval(() => {
              setVisibleCharacters((prevVisibleCharacters) => {
                const newVisibleCharacters = [...prevVisibleCharacters];
                newVisibleCharacters[index] = newVisibleCharacters[index] + 1;
                return newVisibleCharacters;
              });
            }, texts[index].delay);

            return () => clearInterval(intervalId);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold: 0.5,
      }
    );

    refs.current.forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => observer.disconnect();
  }, [texts]);

  return (
    <div>
      {texts.map((text, index) => (
        <div key={index} ref={refs.current[index]}>
          {text.text.substring(0, visibleCharacters[index])}
        </div>
      ))}
    </div>
  );
};

export default TypingAnimation;
