import "./Button.css";

const Button = () => {
  return (
    <div className="Button">
      <button className="proceed">Proceed to Payment</button>
      <div>
        <button className="cancel">Cancel Order</button>
      </div>
    </div>
  );
};

export default Button;
