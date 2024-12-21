import { useEffect } from "react";
import { useOptionsContext } from "../context/categoryOptionsContext";

export default function useOutsideAlerter(ref)
{
  const { setShowOptions } = useOptionsContext()!;
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
              setShowOptions(false);
            }
          }

          document.addEventListener("mousedown", handleClickOutside);

          return () => {
            document.removeEventListener("mousedown", handleClickOutside);
          };
    }, [ref])
}