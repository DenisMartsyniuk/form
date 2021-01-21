import React, { useState } from "react";
import PropTypes from "prop-types";
import classNames from "classnames";

import { ReactComponent as EyeIcon } from "assets/icons/eye.svg";

import styles from "./styles.module.scss";

const PasswordInput = ({
  error,
  value,
  touched,
  onChange,
  placeholder,
  type = "password",
  extraСlassNameInput,
  extraСlassNameWrapper,
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  const inputWrapper = classNames(styles.wrapperInput, extraСlassNameWrapper);

  const inputStyle = classNames(styles.input, extraСlassNameInput, {
    [styles.usedInput]: Boolean(value),
    [styles.error]: Boolean(error) && touched,
  });

  return (
    <div className={inputWrapper}>
      <input
        value={value}
        onChange={onChange}
        className={inputStyle}
        placeholder={placeholder}
        type={showPassword ? "text" : type}
        {...props}
      />

      <div className={styles.icon}>
        <EyeIcon name="eye" onClick={() => setShowPassword(!showPassword)} />
      </div>

      {error && touched && <div className={styles.errorText}>{error}</div>}
    </div>
  );
};

PasswordInput.propTypes = {
  type: PropTypes.string,
  error: PropTypes.string,
  value: PropTypes.string,
  touched: PropTypes.bool,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
  extraСlassNameInput: PropTypes.string,
  extraСlassNameWrapper: PropTypes.string,
};

export default PasswordInput;
