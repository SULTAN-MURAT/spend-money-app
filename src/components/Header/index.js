import React from "react";
import { useSelector } from "react-redux/es/exports";
import CountUp from "react-countup";
function Header() {
  const balance = useSelector((state) => state.products.balance);
const initialBalance=useSelector((state) => state.products.initialBalance);
  return (
    <>
      <header className="header">
        <div>
          <img
            src="https://neal.fun/spend/billgates.jpg"
            alt="Bill Gates"
            className="image"
          />
        </div>
        <h1>Spend Bill Gates' Money</h1>
      </header>
      <div className="money">
        <CountUp
          start={initialBalance}
          end={balance}
          duration={1.5}
          separator="."
          decimal=","
          prefix="₺"
        />
      </div>
    </>
  );
}

export default Header;
