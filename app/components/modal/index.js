import React from 'react';
import { createPortal } from "react-dom";
import styles from './Modal.module.scss';

const Modal = ({ children }) => createPortal(<div className={styles.modal}>{children}</div>, document.getElementById("react-modal"));

export default Modal;
