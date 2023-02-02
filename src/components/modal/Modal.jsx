import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

import "./modal.scss";
const Modal = (props) => {
  useEffect(() => {
    console.log("Modal Here");
    console.log(props);
  }, []);

  const { user } = useSelector((state) => state.auth);

  const handlePurchase = async () => {
    // props.onClose();
    try {
      const data = {
        game_id: props.id,
        user_id: user.user_id,
        amount: props.price,
      };

      console.log(data);
      const response = await axios.post(
        "http://localhost:4001/api/payments/add",
        data
      );

      if (response.data) {
        props.onClose();
        toast.success("Payment Success");
      }
    } catch (error) {
      toast(error.message);
    }
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
