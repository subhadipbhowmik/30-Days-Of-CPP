import React, { useState } from "react";
import "./toastStyles.css"; // Import CSS file for styling

const ToastMessage = () => {
  const [showToast, setShowToast] = useState(false);

  const toggleToast = () => {
    setShowToast(!showToast);
    // Automatically hide the toast after 3 seconds (3000 milliseconds)
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  return (
    <div>
      <button onClick={toggleToast}>Show Toast</button>

      {showToast && (
        <div className="toast">
          <span className="toast-text">This is a toast message!</span>
        </div>
      )}
    </div>
  );
};

export default ToastMessage;
