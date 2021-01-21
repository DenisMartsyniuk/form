import React, { useMemo } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import styles from "./styles.module.scss";

const Input = ({
  error,
  value,
  touched,
  onReset,
  onChange,
  placeholder,
  type = "text",
  ...props
}) => {
  const hasError = useMemo(() => error && touched, [error, touched]);

  const inputStyle = useMemo(
    () =>
      classNames(styles.input, {
        [styles.error]: hasError,
        [styles.usedInput]: Boolean(value),
      }),
    [hasError, value]
  );

  return (
    <div className={styles.wrapperInput}>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={inputStyle}
        placeholder={placeholder}
        {...props}
      />

      {hasError && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

Input.propTypes = {
  type: PropTypes.string,
  touched: PropTypes.bool,
  error: PropTypes.string,
  onReset: PropTypes.func,
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};

export default Input;
