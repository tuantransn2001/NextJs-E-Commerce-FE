/* eslint-disable import/extensions */
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import ModalSuccess from './success';

interface MyModalProps {
  isOpen: boolean;
  header?: JSX.Element;
  body?: JSX.Element;
<<<<<<< HEAD
=======
  footer?: JSX.Element;
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
  type?: string;
  message?: string;
  nextActionContent?: string;
  handleOnClose: () => void;
  handleOnSwitchNextAction: () => void;
}

const MyModal = ({
  message,
  nextActionContent,
  type,
  isOpen,
  header,
  body,
<<<<<<< HEAD
=======
  footer,
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
  handleOnClose,
  handleOnSwitchNextAction,
}: MyModalProps) => {
  const { onClose } = useDisclosure();

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay style={{ zIndex: 1 }} />
      {type ? (
        <ModalSuccess
          type={type}
          message={message}
          nextActionContent={nextActionContent}
          handleOnClose={handleOnClose}
          handleOnSwitchNextAction={handleOnSwitchNextAction}
        />
      ) : (
        <ModalContent>
          <ModalHeader>{header}</ModalHeader>
          <ModalBody>{body}</ModalBody>
<<<<<<< HEAD
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={handleOnClose}>
              Close
            </Button>
            <Button onClick={handleOnSwitchNextAction} variant="ghost">
              {nextActionContent ? nextActionContent : `Secondary Action`}
            </Button>
          </ModalFooter>
=======
          {footer ? (
            footer
          ) : (
            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={handleOnClose}>
                Close
              </Button>
              <Button onClick={handleOnSwitchNextAction} variant="ghost">
                {nextActionContent ? nextActionContent : `Secondary Action`}
              </Button>
            </ModalFooter>
          )}
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
        </ModalContent>
      )}
    </Modal>
  );
};

export default MyModal;
