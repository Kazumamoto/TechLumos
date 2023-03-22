const ContactButton = (props) => {
  return (
    <button
      style={{
        flex: 1,
        backgroundColor: "rgba(46, 46, 43, 1)",
        height: 114,
        width: 40,
        border: "none",
        fontFamily: "Brandon-Grotesque",
        color: "#E3DCD0",
        marginLeft: 80,
        fontSize: 28,
      }}
    >
      {props.text}
    </button>
  );
};

export default ContactButton;
