import React, { createContext, useState, useCallback } from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

interface SnackbarContextProps {
  createAlert: (severity: "success" | "error" | "info" | "warning", message: string) => void;
}

interface SnackbarProviderProps {
  children: React.ReactNode;
}

export const SnackbarContext = createContext<SnackbarContextProps>({
  createAlert: () => {},
});

export function SnackbarProvider({
  children,
}: SnackbarProviderProps): JSX.Element {
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error" | "info" | "warning">("success");
  const [snackbarMessage, setSnackbarMessage] = useState("");

  const createAlert = useCallback(
    (severity: "success" | "error" | "info" | "warning", message: string) => {
      setSnackbarSeverity(severity);
      setSnackbarMessage(message);
      setSnackbarOpen(true);

      setTimeout(() => {
        setSnackbarOpen(false);
      }, 1200);
    },
    []
  );

  const handleCloseSnackbar = () => {
    setSnackbarOpen(false);
  };

  return (
    <SnackbarContext.Provider value={{ createAlert }}>
      {children}
      
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={1200}
        onClose={handleCloseSnackbar}
        
      >
        <Alert onClose={handleCloseSnackbar} severity={snackbarSeverity}>
            {snackbarMessage}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  );
}
