import { useEffect } from "react";

import "./modal.scss";
const Modal = (props) => {
  useEffect(() => {
    console.log("Modal Here");
    console.log(props);
  }, []);

  const handlePurchase = () => {
    props.onClose();
    setTimeout(() => {
      alert(
        JSON.stringify("You have successfuly purchased " + props.title, null, 4)
      );
    }, 1000);
  };

  return (
    <div className="a_modal">
      <div className="a_modal-content">
        <h3>
          {props.title} - <span> kshs. {props.price}</span>
        </h3>

        <input
          type="text"
          placeholder="Enter phone number"
          className="w-full mt-4 px-2 py-1 border outline-none"
        />
        <button
          className="mt-4 bg-orange-500 text-gray-50 px-4 py-1 rounded-md"
          onClick={handlePurchase}
        >
          Purchase
        </button>
      </div>
    </div>
  );
};

export default Modal;
