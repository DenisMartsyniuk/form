import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { uiActions } from "bus/ui/actions";

import { ReactComponent as CloseIcon } from "assets/icons/close.svg";

import styles from "./styles.module.scss";

const WrapperForModal = ({ title, children }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapperHeader}>
        <h2 className={styles.title}>{title}</h2>

        <CloseIcon
          width={24}
          className={styles.closeIcon}
          onClick={() => dispatch(uiActions.modal.close())}
        />
      </div>

      <div className={styles.wrapperChildren}>{children}</div>
    </div>
  );
};

WrapperForModal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

export default WrapperForModal;
