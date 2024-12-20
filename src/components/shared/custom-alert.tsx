import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface CustomAlertProps {
  message: string;
  type: "success" | "error";
  isVisible: boolean;
  onClose: () => void;
}

export function CustomAlert({
  message,
  type,
  isVisible,
  onClose,
}: CustomAlertProps) {
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className={`fixed top-4 right-4 max-w-sm p-4 rounded-lg shadow-lg ${
            type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          <div className="flex items-center justify-between">
            <p className="font-medium">{message}</p>
            <button
              onClick={onClose}
              className="ml-4 text-white hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
