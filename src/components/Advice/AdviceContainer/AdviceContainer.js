import React, { useState, useEffect } from "react";

import AdviceContent from "../AdviceContent/AdviceContent.js";
import AdvicePatternDivide from "../AdvicePatternDivide/AdvicePatternDivide.js";
import AdviseChangeButton from "../AdviseChangeButton/AdviseChangeButton.js";

import "./AdviceContainer.scss";

export default function AdviceContainer(props) {
  const getSaveAdvice = () => {
    const idAdviceSave = JSON.parse(localStorage.getItem('idAdvice'));
    return idAdviceSave ? +idAdviceSave : 0;
  }

  const [advice, setAdvice] = useState(null);
  const [idAdvice, setIdAdvice] = useState(getSaveAdvice());
  console.log('idAdvice',idAdvice);

  const adviceChangeButton = (e) => {
    idAdvice !== 224 ? setIdAdvice(idAdvice + 1) : setIdAdvice(1);
  };

  
  useEffect(() => {
    const urlRandonAdvice = "https://api.adviceslip.com/advice/" + idAdvice;
    const getOtherAdvice = async (urlRandonAdvice) => {
      try {
        const data = await fetch(urlRandonAdvice);
        const json = await data.json();
        await setAdvice(json.slip.advice);
      } catch (e) {}
    };
    getOtherAdvice(urlRandonAdvice);
  }, [idAdvice]);

  useEffect(()=> {
    return () => {
      localStorage.setItem('idAdvice', JSON.stringify(idAdvice));
    }
  });

  return (
    <div className="advice__border">
      <div className="advice">
        <AdviseChangeButton adviceChangeButton={adviceChangeButton} />
        <AdvicePatternDivide />
        <AdviceContent idAdvice={idAdvice} advice={advice} />
      </div>
    </div>
  );
}
