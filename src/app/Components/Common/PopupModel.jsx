import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import ReactDOM from 'react-dom';
function MyVerticallyCenteredModal(props) {
  if (typeof window === 'undefined') return null;

  const portalElement = document.getElementById('portal');
  if (!portalElement) return null;

  return ReactDOM.createPortal(
    <Modal
      {...props}
      size="lg"
      className="custom-modal"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {props?.item && (
          <Image
            src={props?.item?.image}
            height={1200}
            width={600}
            alt={props?.item?.id}
          />
        )}
      </Modal.Body>
    </Modal>,
    portalElement
  );
}
export default MyVerticallyCenteredModal;
