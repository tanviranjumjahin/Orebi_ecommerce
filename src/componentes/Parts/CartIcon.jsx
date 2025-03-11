import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";


const Cart = () => {
  const data = useSelector((state) => state.counter.value);
  return (
    <div className="relative">
      <Link to={"/Carts"}>
        <FaShoppingCart />
      <span className="absolute -top-3 -right-5 bg-red-500 text-white w-5 h-5 flex justify-center items-center rounded-full">
        {data}
      </span>
      </Link>

    </div>
  );
};

export default Cart;
