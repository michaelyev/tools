// "use client";

// import { useEffect, useState } from "react";
// import debounce from "lodash/debounce";

// export default function useWindowSize() {
//   const [width, setWidth] = useState<number>(null);

//   const windowListener = debounce(() => {
//     if (window) setWidth(window.innerWidth);
//   }, 250);

//   useEffect(() => {
//     if (window) {
//       setWidth(window.innerWidth);
//       window.addEventListener("resize", windowListener);
//     }

//     return () => window.removeEventListener("resize", windowListener);
//   }, []);

//   return width;
// }

"use client";

import { useEffect, useMemo, useState } from "react";
import debounce from "lodash/debounce";

export default function useWindowSize() {
  const [width, setWidth] = useState<number | undefined>(undefined);

  const windowListener = useMemo(() => debounce(() => setWidth(window.innerWidth), 250), []);

  useEffect(() => {
    setWidth(window.innerWidth);
    window.addEventListener("resize", windowListener);
    return () => window.removeEventListener("resize", windowListener);
  }, [windowListener]);

  return width;
}
