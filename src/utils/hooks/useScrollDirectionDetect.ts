import { useState, useEffect } from "react";

/**
 *  debounce 대신 threshold 설정으로 성능 최적화.
 */
const useScrollDirectionDetect = (): any => {
  const [scrollDirection, setScrollDirection] = useState("init");
  const [footerShowing, setFooterShowing] = useState(false);
  useEffect(() => {
    const threshold = 100;
    let lastScrollY = window.scrollY;
    let ticking = false;

    const updateScrollDir = () => {
      const scrollY = window.scrollY;
      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false;
        return;
      }
      setScrollDirection(scrollY > lastScrollY ? "down" : "up");
      lastScrollY = scrollY > 0 ? scrollY : 0;
      ticking = false;

      // document.documentElement.clientHeight, // 현재화면 길이 = window.innerHeight
      // document.documentElement.scrollHeight, // 전체 길이
      // window.scrollY // 스크롤 위치(위쪽)/
      if (
        document.documentElement.scrollHeight -
          document.documentElement.clientHeight * 2 <=
        scrollY
      ) {
        setFooterShowing(true);
      } else {
        setFooterShowing(false);
      }
    };
    const onScroll = () => {
      if (!ticking) {
        // 브라우저의 frame 능력을 초과할 때 제어. (threshold가 낮으므로 사실상 무의미. 보험용.)
        window.requestAnimationFrame(updateScrollDir);
        ticking = true;
      }
    };
    // passive: true. 메인 스레드를 거치지 않고 컴포지터 스레드에 즉시 수행 요청 -> 더 빠른 반응속도, 남발하면 CPU/GPU균형 깨짐
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollDirection]);

  return { footerShowing: footerShowing, scrollDirection: scrollDirection };
};

export default useScrollDirectionDetect;
