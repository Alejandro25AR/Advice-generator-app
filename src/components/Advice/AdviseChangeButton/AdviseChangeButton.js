import React, { useRef } from "react";

import "./AdviseChangeButton.scss";
import diceFive from "../../../images/diceFive.svg";

export default function AdviseChangeButton(props) {
  const refButton = useRef();

  const handleOnClick = () => {
    refButton.current.disabled = true;
    setTimeout(()=> {
      refButton.current.checked = false;
      refButton.current.disabled = false;
    },1000)
  }

  return (
    <div className="advice__button">
      <input
        type="checkbox"
        ref={refButton}
        id="next-advice"
        onClick={() => {
          props.adviceChangeButton();
          handleOnClick()
        }}
        onTouchEnd={() => {
          props.adviceChangeButton();
          handleOnClick()
        }}
      />
      <label htmlFor="next-advice">
        <img srcSet={diceFive} aria-label="change advice"/>
      </label>
    </div>
  );
}
