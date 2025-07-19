import React from "react";
import Modal from "./modal";
import Button from "./button";

interface ConfirmDialogProps {
  isOpen: boolean;
  title?: string;
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const ConfirmDialog: React.FC<ConfirmDialogProps> = ({
  isOpen,
  title = "Confirm",
  message,
  onConfirm,
  onCancel,
}) => (
  <Modal isOpen={isOpen} onClose={onCancel}>
    <h3 className="text-lg font-semibold mb-4">{title}</h3>
    <p className="mb-6">{message}</p>
    <div className="flex justify-end space-x-2">
      <Button variant="secondary" onClick={onCancel}>
        Cancel
      </Button>
      <Button variant="danger" onClick={onConfirm}>
        Confirm
      </Button>
    </div>
  </Modal>
);

export default ConfirmDialog;
