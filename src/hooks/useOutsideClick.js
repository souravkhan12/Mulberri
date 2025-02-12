import { useEffect, useRef } from "react";

function useOutsideClick(handler, listenCapturing = true) {
  const ref = useRef();
  useEffect(
    function () {
      function handleClick(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          //
          handler();
        }
      }

      // Bubbling Up
      //   const timeoutId = setTimeout(() => {
      //     document.addEventListener("click", handleClick, listenCapturing);
      //   }, 0);

      // or Another way
      document.addEventListener("click", handleClick, listenCapturing);

      return () => {
        document.removeEventListener("click", handleClick, listenCapturing);
        // clearTimeout(timeoutId);
      };
    },
    [handler, listenCapturing]
  );

  return ref;
}

export default useOutsideClick;
