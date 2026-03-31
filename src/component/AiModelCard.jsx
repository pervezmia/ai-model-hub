import React, { useState } from 'react';
import { toast } from 'react-toastify';
const AiModelCard = ({model, carts, setCarts}) => {
    const [isSubcribed, setIsSubcribed] = useState(false)
    const handleSubscription = () => {
        setIsSubcribed(true)
        const isfound = carts.find(item => item.id === model.id)
        if(isfound) {
            toast.warning("Item already in cart");
            return;
        }
        setCarts([...carts, model]);

        toast.success("Item added to cart!")
    }
    return (
        <div className="border mb-3 rounded-2xl space-y-2 overflow-hidden">
                    <div className="flex items-center justify-center h-56   bg-zinc-200 ">
                        <img className="h-40 w-40 object-contain " src={model.image} alt="" />
                    </div>
                    <div className="p-4 space-y-3">
                        <h3 className="text-2xl font-bold">{model.title}</h3>
                        <p>{model.description}</p>
                        <div className="text-2xl font-bold">$ {model.price} / Month</div>
                    </div>
                    <div className="flex items-center justify-start p-4">
                        <button onClick= {handleSubscription}className="btn w-full bg-red-500 text-white rounded-lg mt-5">{isSubcribed? "Subscribed" : "Subscribe Now"}</button>
                    </div>
                </div>
    );
};

export default AiModelCard;