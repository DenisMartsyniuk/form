import PropTypes from "prop-types";

import SignInHeader from "components/SignIn/Header";

import styles from "./styles.module.scss";

const SignInWrapper = ({ children }) => (
  <div className={styles.wrapper}>
    <SignInHeader />

    <div className={styles.wrapperChildren}>{children}</div>
  </div>
);

SignInWrapper.propTypes = {
  children: PropTypes.node,
};

export default SignInWrapper;
