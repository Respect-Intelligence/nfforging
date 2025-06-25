import { CircleX } from "lucide-react";
import React from "react";

function Popup({
  isOpen,
  onClose,
  children,
  className,
}: {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <>
      {isOpen && (
        <div className={`popup ${isOpen ? "" : "d-none"} ${className}`}>
          <div className="content" data-aos="zoom-in">
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
