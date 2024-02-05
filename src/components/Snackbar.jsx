import "../styles/app/snackbar.css";
import { useState, forwardRef, useImperativeHandle } from "react";

const Snackbar = forwardRef((props, ref) => {
  const [isSnackbarShowing, setIsSnackbarShowing] = useState(false);
  const [message, setMessage] = useState("");

  useImperativeHandle(ref, () => ({
    show(message) {
      setMessage(message);
      setIsSnackbarShowing(true);
      setTimeout(() => {
        setIsSnackbarShowing(false);
      }, 3000);
    },
  }));

  return (
    <div id={isSnackbarShowing ? "show" : "hide"} className="snackbar">
      {message}
    </div>
  );
});

export default Snackbar;
