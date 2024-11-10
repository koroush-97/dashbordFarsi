import React, { useEffect } from "react";
import "./EditModal.css";
import "../../cms.css";

export default function EditModal({ children, onClose, onsubmit }) {
  useEffect(() => {
    const checkkey = (Event) => {
      console.log(Event);
      if (Event.keyCode === 27) {
        onClose();
      }
    };

    window.addEventListener("keydown", checkkey);

    return () => window.removeEventListener("keydown", checkkey);
  });

  return (
    <div className="modal-parent active">
      <form className="edit-modal-form">
        <h1>اطلاعات جدید را وارد نمایید</h1>

        {children}

        <button className="edit-form-submit" onClick={onsubmit}>
          {" "}
          ثبت اطلاعات جدید{" "}
        </button>
      </form>
    </div>
  );
}
