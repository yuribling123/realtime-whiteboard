"use client";
import { AlertDialog } from "@radix-ui/react-alert-dialog";
import { AlertDialogTrigger } from "./ui/alert-dialog";


interface ConfirmModalProps {
    children: React.ReactNode;
    onConfirm: () => void;
    disabled?: boolean;
    header: string;
    description?: string;
}

const ConfirmModal = (
    {children, onConfirm, disabled, header, description}: ConfirmModalProps 
) => {
    return ( 
        <AlertDialog>
            <AlertDialogTrigger>
                    {children}
            </AlertDialogTrigger>
        </AlertDialog>
     );
}
 
export default ConfirmModal;