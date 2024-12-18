import Image from 'next/image';
import Modal from 'react-bootstrap/Modal';
import { createPortal } from 'react-dom';
function MyVerticallyCenteredModal(show, onClose, children) {
  if (!show) return null;

  const portalElement = document.getElementById('portal');
  if (!portalElement) return null;

  return createPortal(
    // <Modal
    //   {...props}
    //   size="lg"
    //   className="custom-modal"
    //   aria-labelledby="contained-modal-title-vcenter"
    //   centered
    // >
    //   <Modal.Header closeButton></Modal.Header>
    //   <Modal.Body>
    //     {props?.item && (
    //       <Image
    //         src={props?.item?.image}
    //         height={1200}
    //         width={600}
    //         alt={props?.item?.id}
    //       />
    //     )}
    //   </Modal.Body>
    // </Modal>,
    <div className="popup-overlay">
      <div className="popup">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        {children}
      </div>
    </div>,
    portalElement
  );
}
export default MyVerticallyCenteredModal;
