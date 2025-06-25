// hooks/useToastActions.ts

import { useToast } from "@/components/Toster/ToastProvider";

export const useToastActions = () => {
  const { addToast } = useToast();

  const showSuccess = (message: string, duration?: number) => {
    addToast({ message, type: "success", duration });
  };

  const showError = (message: string, duration?: number) => {
    addToast({ message, type: "error", duration });
  };

  const showWarning = (message: string, duration?: number) => {
    addToast({ message, type: "warning", duration });
  };

  const showInfo = (message: string, duration?: number) => {
    addToast({ message, type: "info", duration });
  };

  return {
    showSuccess,
    showError,
    showWarning,
    showInfo,
  };
};
