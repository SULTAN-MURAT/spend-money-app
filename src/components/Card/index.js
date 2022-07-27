import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateBalance, sell, buy } from "../../redux/Products/productSlice";

function Card({ id }) {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const product = products.find((item) => item.id === id);
  const balance = useSelector((state) => state.products.balance);

  const { count, image, productName, productPrice } = product;

  const [input, setInput] = useState(product.count);
  const [isBuyable, setIsBuyable] = useState(true);

  let maximumBuy = Math.floor(balance / +productPrice);
  let maximumAmount = count + maximumBuy;

  useEffect(() => {
    dispatch(updateBalance({ id, input }));
  }, [dispatch, id, input]);

  const handleChange = (value) => {
    console.log("input", value);
    if (+value > maximumAmount && balance > 0) {
      setInput(maximumAmount);
    } else if (balance === 0 && +value < +count) {
      setInput(+value);
    } else {
      setInput(+value);
    }
  };

  const handleSell = () => {
    dispatch(sell({ id }));
  };

  const handleBuy = () => {
    dispatch(buy({ id }));
  };

  useEffect(() => {
    productPrice > balance ? setIsBuyable(false) : setIsBuyable(true);
  }, [balance]);

  return (
    <article className="product-card">
      <div className="product-info">
        <img src={image} alt={productName} className="product-image" />
        <p className="product-name">{productName}</p>
        <p className="price">
          {`${(+productPrice).toLocaleString("tr-TR", {
            style: "currency",
            currency: "TRY",
            maximumFractionDigits: 2,
          })}`}
        </p>
      </div>
      <div className="buttons">
        <button
          className={`sell-button ${input > 0 && "active"}`}
          onClick={handleSell}
          disabled={input <= 0}
        >
          Sell
        </button>
        <input
          type="number"
          className="num-input"
          value={input}
          onChange={(e) => {
            +e.target.value >= 0
              ? handleChange(+e.target.value)
              : handleChange(0);
          }}
        />
        <button
          className="buy-button"
          type="button"
          onClick={handleBuy}
          disabled={!isBuyable}
        >
          Buy
        </button>
      </div>
    </article>
  );
}

export default Card;
