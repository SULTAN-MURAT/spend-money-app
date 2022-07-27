import React, { useState } from "react";
import { CgArrowUpO } from "react-icons/cg";
import { StyledButton } from "./Styles";

function ScrollButton() {
  const [visible, setVisible] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 300) {
      setVisible(true);
    } else if (scrolled <= 300) {
      setVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  window.addEventListener("scroll", toggleVisible);

  return (
    <StyledButton style={{ display: visible ? "inline" : "none" }}>
      <CgArrowUpO
        onClick={scrollToTop}
      />
    </StyledButton>
  );
}

export default ScrollButton;
