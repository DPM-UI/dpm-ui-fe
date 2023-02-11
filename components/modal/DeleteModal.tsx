import { Header, Body, Button } from "@components";
import { Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter } from "@chakra-ui/react";
import axios from "axios";

type DeleteModalProps = {
    isOpen: boolean;
    onClose: () => void;
    title: string;
    body: string;
    target: string;
    jwt?: string;
    id?: number;
};

export const DeleteModal = ({ isOpen, onClose, title, body, target, jwt, id }: DeleteModalProps) => {
    const handleHapus = () => {
        axios.post(`/api/${target}/delete`, { jwt: jwt, id: id });
        onClose();
    };
    return (
        <Modal isOpen={isOpen} onClose={onClose} isCentered>
            <ModalOverlay />
            <ModalContent marginX={5}>
                <ModalCloseButton />{" "}
                <ModalBody>
                    <Header preset="h4" className="text-center text-blue-2 mt-8">
                        {title}
                    </Header>
                    <Header preset="regular" className="text-center mt-4">
                        {body}
                    </Header>
                </ModalBody>
                <ModalFooter>
                    <div className="flex gap-2 h-10">
                        <Button preset="primary" onClick={onClose} padding="py-5 px-4">
                            Tutup
                        </Button>
                        <Button preset="custom" className="bg-error" onClick={handleHapus} padding="py-5 px-4">
                            Hapus
                        </Button>
                    </div>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};
