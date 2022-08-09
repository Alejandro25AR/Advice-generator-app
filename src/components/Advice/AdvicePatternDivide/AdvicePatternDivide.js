import React from "react";
import patternDividerDesktop from "../../../images/patternDividerDesktop.svg";
import patternDividerMobile from "../../../images/patternDividerMobile.svg";

export default function AdvicePatternDivide() {
  return (
    <picture>
      <source media="(min-width:728px)" srcSet={patternDividerDesktop} />
      <img src={patternDividerMobile} alt="Pattern divider"/>
    </picture>
  );
}