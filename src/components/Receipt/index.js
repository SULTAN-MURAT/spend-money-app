import React,{useEffect} from "react";
import {useSelector } from "react-redux";


function Receipt() {
  const products = useSelector((state) => state.products.items);
  const receipts=products.filter(item=>item.count>0);
  
  console.log("receipts", receipts);
  const total = receipts.reduce((prev, next) => {
    return prev + next.count * +next.productPrice;
  }, 0);

  const numFormatter = (num) => {
    if (num >= 1000000000) {
      return (num / 1000000000).toFixed(1).replace(/\.0$/, "") + "B";
    }
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1).replace(/\.0$/, "") + "M";
    }
    if (num >= 1000) {
      return (num / 1000).toFixed(1).replace(/\.0$/, "") + "K";
    }
    return num;
  };

  if (receipts.length === 0) {
    return null;
  }
  return (
    <div className="receipt">
      <div className="receipt-headline">Your Receipt</div>
      {receipts &&
        receipts.map((item) => (
          <div key={Math.random() * Date.now()} className="receipt-container">
            <span>{item.productName}</span>
            <span>{`x${item.count}`}</span>
            <span className="price">{`${numFormatter(
              +item.productPrice * item.count
            )}`}</span>
          </div>
        ))}
      <div className="line"></div>
      <div className="receipt-container">
        <span>TOTAL</span>
        <span></span>
        <span className="price">
          {total.toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
            maximumFractionDigits: 0,
          })}
        </span>
      </div>
    </div>
  );
}

export default Receipt;
