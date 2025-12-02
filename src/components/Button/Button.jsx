import "./Button.css"
function Button({ text, onClick, isactive }) {
  return (
    <button onClick={onClick} className={isactive ? "active" : null}>
      {text}
    </button>
  );
}
export default Button;
