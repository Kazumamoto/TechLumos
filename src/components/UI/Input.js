import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={classes.inputTag}>
      <label for={props.id}>{props.label}</label>
      <input
        name={props.name}
        type={props.type}
        id={props.id}
        placeholder={props.placeholder}
      ></input>
    </div>
  );
};

export default Input;
