import React from "react";

const Notification = ({ message = "", type = "", setAlert }) => {
  return (
    <div
      className={`alert alert-${alert.type} alert-dismissible fade show position-fixed top-0 start-50 translate-middle-x mt-3`}
      role={type}
      style={{
        zIndex: 9999,
        minWidth: "300px",
        maxWidth: "90%",
        textAlign: "center",
        backgroundColor: type === "warning" ? "#f8d7da" : "#d4edda",
        color: type === "warning" ? "#721c24" : "#155724",
        border: type === "warning" ? "1px solid #f5c6cb" : "1px solid #c3e6cb",
        borderRadius: "5px",
      }}
    >
      {message}
      <button
        type="button"
        className="btn-close"
        onClick={() => setAlert({ message: "", type: "" })}
      ></button>
    </div>
  );
};

export default Notification;
