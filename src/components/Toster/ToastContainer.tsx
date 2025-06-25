// components/ToastContainer.tsx
"use client";
import React, { useState, useEffect } from "react";

import "@/scss/sections/toster.scss";
import { Toast } from "@/assets/static/types";
import { useToast } from "./ToastProvider";

const ToastItem: React.FC<{
  toast: Toast;
  onRemove: (id: string) => void;
}> = ({ toast, onRemove }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation
    setTimeout(() => setIsVisible(true), 10);

    // Auto remove
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(() => onRemove(toast.id), 300);
    }, toast.duration || 5000);

    return () => clearTimeout(timer);
  }, [toast.id, toast.duration, onRemove]);

  const handleClose = () => {
    setIsVisible(false);
    setTimeout(() => onRemove(toast.id), 300);
  };

  return (
    <div
      className={`toast-item toast-${toast.type} ${
        isVisible ? "toast-visible" : "d-none"
      }`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      <div className="toast-content">
        {/* <div className="toast-icon">
          {toast.type === "success" && "✓"}
          {toast.type === "error" && "✕"}
          {toast.type === "warning" && "⚠"}
          {toast.type === "info" && "ℹ"}
        </div> */}
        <div className="toast-message">{toast.message}</div>
        <button
          type="button"
          className="toast-close"
          aria-label="Close"
          onClick={handleClose}
        >
          ×
        </button>
      </div>
      <div className="toast-progress">
        <div
          className="toast-progress-bar"
          style={{
            animationDuration: `${toast.duration || 5000}ms`,
          }}
        />
      </div>
    </div>
  );
};

export const ToastContainer: React.FC = () => {
  const { toasts, removeToast } = useToast();
  const [currentToast, setCurrentToast] = useState<Toast | null>(null);

  useEffect(() => {
    if (!currentToast && toasts.length > 0) {
      // Show first toast if none is currently showing
      setCurrentToast(toasts[0]);
    } else if (currentToast && !toasts.find((t) => t.id === currentToast.id)) {
      // Current toast was removed, show next one
      const remaining = toasts.filter((t) => t.id !== currentToast.id);
      if (remaining.length > 0) {
        setCurrentToast(remaining[0]);
      } else {
        setCurrentToast(null);
      }
    }
  }, [toasts, currentToast]);

  const queuedToasts = toasts.filter((t) => t.id !== currentToast?.id);

  return (
    <div className="toast-container">
      {currentToast && (
        <ToastItem
          key={currentToast.id}
          toast={currentToast}
          onRemove={removeToast}
        />
      )}
      {queuedToasts.length > 0 && (
        <div className="toast-queue-indicator">
          {queuedToasts.length} more notification
          {queuedToasts.length > 1 ? "s" : ""} waiting
        </div>
      )}
    </div>
  );
};
