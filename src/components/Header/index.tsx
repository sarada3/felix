import React, { useState, useContext, useCallback } from "react";
import { RouteContext, actionTypes } from "../../context";

import HeaderSmall from "./HeaderSmall";
import HeaderBig from "./HeaderBig";

type HeaderProps = {
  scrollDirection: string;
};

const Header = (props: HeaderProps) => {
  const { scrollDirection } = props;

  const { dispatch } = useContext(RouteContext);
  const [yellowBoxSlidingTo, setyellowBoxSlidingTo] = useState("init"); // init, up, down
  const [bigHeaderVisible, setBigHeaderVisible] = useState(false);

  const toggleBigHeader = useCallback(() => {
    const current = yellowBoxSlidingTo;
    if (current === "up" || current === "init") {
      setyellowBoxSlidingTo("down");
      setBigHeaderVisible(true);
      document.body.style.overflow = "hidden";
    } else {
      setyellowBoxSlidingTo("up");
      // setBigHeaderVisible(false); => 이 로직은 자연스러운 애니메이션을 위해 YellowBox sliding up이 끝난 직후 실행됨. See HeaderBig.tsx - handleAnimationEnd - turnOffBigHeaderVisible
      document.body.style.overflow = "overlay";
    }
  }, [yellowBoxSlidingTo]);
  const handleRoute = useCallback(
    (url: string) => {
      if (bigHeaderVisible) {
        toggleBigHeader();
      }
      dispatch({ type: actionTypes.setUrl, value: url });
      window.scrollTo({ top: 0 });
    },
    [bigHeaderVisible, dispatch, toggleBigHeader]
  );
  const turnOffBigHeaderVisible = useCallback(() => {
    setBigHeaderVisible(false);
  }, []);
  return (
    <header>
      <HeaderSmall
        scrollDirection={scrollDirection}
        yellowBoxSlidingTo={yellowBoxSlidingTo}
        bigHeaderVisible={bigHeaderVisible}
        toggleBigHeader={toggleBigHeader}
        handleRoute={handleRoute}
      />
      <HeaderBig
        bigHeaderVisible={bigHeaderVisible}
        yellowBoxSlidingTo={yellowBoxSlidingTo}
        turnOffBigHeaderVisible={turnOffBigHeaderVisible}
        handleRoute={handleRoute}
      />
    </header>
  );
};

export default React.memo(Header);
