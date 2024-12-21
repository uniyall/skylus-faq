import { useRef } from "react";
import useOutsideAlerter from "../hooks/useOutsideAlerter";

function OutsideAlerter({ children }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  return <div ref={wrapperRef}>{children}</div>;
}

export default OutsideAlerter;
