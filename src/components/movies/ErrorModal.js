import { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const ErrorModal = ({ visible }) => {
   const [show, setShow] = useState(visible);
   const [disabled, setDisabled] = useState(true);
   const [elapsed, setElapsed] = useState(0);
   const history = useHistory();

   const handleClose = () => {
      setShow(false);
      history.goBack();
   };

   useEffect(() => {
      const timer = setInterval(() => {
         if (elapsed === 10) {
            clearInterval(timer);
            setDisabled(false);
            return;
         }

         setElapsed(elapsed + 1);
      }, 1 * 1000);

      return () => clearInterval(timer);
   });

   return (
      <Modal
         show={show}
         centered
         size='lg'
         onHide={handleClose}
         backdrop='static'
         keyboard={false}>
         <Modal.Header>
            <Modal.Title>Too many requests</Modal.Title>
         </Modal.Header>
         <Modal.Body>
            You're not a robot are you? Please wait a few moments before
            requesting a new page of reviews.
         </Modal.Body>
         <Modal.Footer>
            <Button variant='primary' onClick={handleClose} disabled={disabled}>
               {disabled ? `(${10 - elapsed}) ` : ''}I'm not a robot
            </Button>
         </Modal.Footer>
      </Modal>
   );
};

export default ErrorModal;
