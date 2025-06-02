import { CircleX } from "lucide-react";
import React from "react";

function Popup({
  isOpen,
  onClose,
  children,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}) {
  return (
    <>
      {isOpen && (
        <div className={`popup ${isOpen ? "" : "d-none"}`}>
          <div className="content">
            <button type="button" className="closeBtn" onClick={onClose}>
              <CircleX />
            </button>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Popup;
