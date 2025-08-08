"use client";
import { AlertDialog, AlertDialogAction, AlertDialogCancel } from "@radix-ui/react-alert-dialog";
import { AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "./ui/alert-dialog";


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
    const handleConfirm = () => {
        onConfirm
    };
    return ( 
        <AlertDialog>
            <AlertDialogTrigger>
                    {children}
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>
                        {header}
                    </AlertDialogTitle>
                    <AlertDialogDescription>
                        {description}
                    </AlertDialogDescription>      
                </AlertDialogHeader>

                <AlertDialogFooter>
                    <AlertDialogCancel> Cancel</AlertDialogCancel>
                    <AlertDialogAction disabled={disabled} onClick={handleConfirm}>
                        Confirm
                    </AlertDialogAction>

                </AlertDialogFooter>


            </AlertDialogContent>
        </AlertDialog>
     );
}
 
export default ConfirmModal;