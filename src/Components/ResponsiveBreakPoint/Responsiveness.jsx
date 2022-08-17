import React from "react";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  phablet: 550,
  tablet: 768,
  desktop: 992,
});

const OnMobile = layout.is("mobile");
const OnAtLeastTablet = layout.isAtLeast("tablet");
const OnAtMostPhablet = layout.isAtMost("phablet");
const OnDesktop = layout.is("desktop");

const Responisiveness = () => (
  <div>
    <OnMobile>
      <h1>MOBILE</h1>
    </OnMobile>

    <OnAtLeastTablet>
      <h1>Tablets and Desktop</h1>
    </OnAtLeastTablet>

    <OnAtMostPhablet>
      <h1>Mobile and phablet </h1>
    </OnAtMostPhablet>

    <OnDesktop>
      <h1>Desktop</h1>
    </OnDesktop>
  </div>
);
export default Responisiveness;
