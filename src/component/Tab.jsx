import React from "react";

const Tab = ({setActiveTab, carts}) => {
  return (
    <div>
      {/* name of each tab group should be unique */}
      <div className="tabs tabs-box justify-center">
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label="Model"
          onClick={()=> setActiveTab("model")}
          defaultChecked
        />
        <input
          type="radio"
          name="my_tabs_1"
          className="tab rounded-full w-40"
          aria-label= {`Cart (${carts.length})`}
          onClick={()=> setActiveTab('cart')}
          
        />
    
      </div>
    </div>
  );
};

export default Tab;
