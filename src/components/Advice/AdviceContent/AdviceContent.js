import React from 'react';
import "./AdviceContent.scss";

export default function AdviceContent(props) {
  return (
    <>
      <p className="advice__text">“{props.advice ? props.advice : props.adviceDefault}”</p>
      <h1 className="advice__title">ADVICE # {props.idAdvice ? props.idAdvice : props.idAdviceDefault}</h1>
    </>
  );
}

AdviceContent.defaultProps = {
  adviceDefault: "It is easy to sit up and take notice, what is difficult is getting up and taking action.",
  idAdviceDefault: 117
}