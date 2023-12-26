import React from "react";

import { companiesData } from "../data";

export const companiesSlides = companiesData?.map((el, index) => (
  <div className="rectangle" key={index}>
    <img src={el?.logo?.img1} alt="Logo" className="logo" />
  </div>
));
