import React from "react";
import { toast } from "react-toastify";

const Cart = ({ carts, setCarts}) => {
    const total = carts.reduce(
        (sum, item) => sum + item.price
    ,0);
    const handlePayment = () => {
      setCarts([]);
      toast.success("Payment successfully!")
    }

    const handleDelete = (cart) => {
      const filterArray = carts.filter(common => common.id !== cart.id )
      setCarts(filterArray);
      toast.error("Item deleted to cart!")
    }
  return (
    <div className="space-y-5 my-10 p-5 max-w-7xl mx-auto ">
        <h2 className="text-4xl font-bold">Your cart</h2>

        {
          carts.length === 0 ? 
          <p className="text-3xl font-bold text-red-500 text-center border-2 p-4 rounded-2xl">Cart is Empty <br /> go to model tap <br /> and subscribe wonderful model </p>:
          <>
          {carts.map((cart) => (
            <div key={cart.id} className=" md:flex justify-between items-center border p-7 rounded-2xl space-y-3">
              <div className="md:flex items-center gap-6">
                <img className="w-20 h-20" src={cart.image} alt="" />
                <div className="">
                    <h2 className="text-3xl font-bold ">{cart.title}</h2>
                    <p>{cart.description}</p>
                </div>
              </div>
              <div className="font-bold text-3xl md:flex gap-2">
                <h2>${cart.price}/Month</h2>
              <button onClick={() => handleDelete(cart)} className="btn btn-error text-2xl font-bold text-white">x</button>
              </div>
            </div>
          ))}
    
          <div className="bg-black text-white font-bold text-2xl flex justify-between items-center p-10 rounded-2xl">
            <h3>Total</h3>
            <h2>$ {total}</h2>
          </div>
          <button onClick={handlePayment} className="btn w-full py-10 rounded-2xl font-bold text-2xl bg-red-300">Proceed to checkout</button>
          
          </>
        }
    </div>
  );
};

export default Cart;
