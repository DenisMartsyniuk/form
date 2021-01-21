import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.scss";

const Button = ({ title, disabled, extraСlassName, fullWidth, ...props }) => {
  const buttonStyle = useMemo(
    () =>
      classNames(styles.button, extraСlassName, {
        [styles.disabled]: disabled,
      }),
    [disabled, extraСlassName]
  );

  const wrapperStyles = useMemo(
    () => classNames(styles.wrapperButton, { [styles.fullWidth]: fullWidth }),
    [fullWidth]
  );

  return (
    <div className={wrapperStyles}>
      <button
        type="button"
        disabled={disabled}
        className={buttonStyle}
        {...props}
      >
        {title}
      </button>
      {!disabled && <div className={styles.shaddow} />}
    </div>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  disabled: PropTypes.bool,
  fullWidth: PropTypes.bool,
  extraСlassName: PropTypes.string,
};

export default Button;
