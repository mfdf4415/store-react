import "../../Styles/css/error.css"

const Error = ({ message }) => {
  return (
    <div className="err-container flex">
      <p>{message}</p>
    </div>
  );
};

export default Error;
