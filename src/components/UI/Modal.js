import { forwardRef } from "react";

const Modal = forwardRef(({ onCloseModal, children }, ref) => {
	return (
		<dialog className='modal' ref={ref}>
			{children}
			<div className='modal-actions'>
				<button onClick={onCloseModal}>Tagasi</button>
			</div>
		</dialog>
	);
});

export default Modal;
