import { Dialog } from "@radix-ui/react-dialog";
import { useRenameModal } from "@/store/use-rename-modal";

export const RenameModal = () => {
    const { isOpen, initialValues, onOpen, onClose } = useRenameModal();
    return (
    <Dialog open={isOpen} onOpenChange={onClose}>

    </Dialog>)
}


