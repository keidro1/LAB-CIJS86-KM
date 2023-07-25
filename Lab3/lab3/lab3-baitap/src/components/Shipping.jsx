import React from "react";

  const Shipping = ({ shippingInfo }) => {
    return (
      <ul>
        {shippingInfo.map((item, index) => (
          <li key={index}>
            <div className="media-icon">
              <i className={item.icon} />
            </div>
            <div className="media-body">
              <h5>{item.title}</h5>
              <span>{item.description}</span>
            </div>
          </li>
        ))}
      </ul>
    );
  };
  

  
export default Shipping;