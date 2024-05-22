import styles from './style.module.scss';

import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import cx from 'classnames';

interface IModalProps {
  isVisible: boolean;
  children?: React.ReactNode;
  className?: string;
  overlayClassName?: string;
  onClose: () => void;
}

const Modal = ({ isVisible, children, className, overlayClassName, onClose }: IModalProps) => {
  return createPortal(
    <AnimatePresence>
      {isVisible && (
        <motion.div className={cx(styles.overlay, overlayClassName)} onClick={() => onClose()}>
          <motion.div className={styles.modalPosition}>
            <motion.div className={styles.modalContainer}>
              <div className={cx(styles.modal, className)} onClick={(e) => e.stopPropagation()}>
                {children}
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
};

{
  /* <div className="modal">modal</div> */
}

export default Modal;
