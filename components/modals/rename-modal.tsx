import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@radix-ui/react-dialog";
import { useRenameModal } from "@/store/use-rename-modal";
import { DialogHeader } from "../ui/dialog";

export const RenameModal = () => {
    const { isOpen, initialValues, onOpen, onClose } = useRenameModal();
    return (
    <Dialog open={isOpen} onOpenChange={onClose}>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>
                    Edit board Title
                </DialogTitle>
            </DialogHeader>
            <DialogDescription>
                Enter new title for the board.
            </DialogDescription>
        </DialogContent>

    </Dialog>)
}


