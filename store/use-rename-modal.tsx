import {create} from 'zustand';

const defaultValues = {id:"",title:""}
 interface RenameModalStore {       
    isOpen: boolean;    
    initialValues: typeof defaultValues;
    onOpen: (id:string, title:string) => void;
    onClose: () => void;
}


export const useRenameModal = create<RenameModalStore>()