import { useFormik } from "formik";
import Select from "react-select";

import { signIn } from "bus/SignIn/shapes";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { useSignIn } from "bus/SignIn/hooks/useSignIn";
import SignInWrapper from "components/SignIn/Wrapper";
import PasswordInput from "components/common/PasswordInput";

import styles from "./styles.module.scss";

const options = [
  { value: "admin", label: "Admin" },
  { value: "member", label: "Member" },
];

function SignIn() {
  const { handleSignIn } = useSignIn();

  const formik = useFormik({
    initialValues: signIn.shape,
    validationSchema: signIn.schema,
    onSubmit: (values) => handleSignIn(values),
  });

  return (
    <SignInWrapper>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign In</h1>

        <form onSubmit={formik.handleSubmit}>
          <div className={styles.wrapperInput}>
            <Input
              name="username"
              onBlur={formik.handleBlur}
              placeholder="Username"
              error={formik.errors.username}
              value={formik.values.username}
              onChange={formik.handleChange}
              touched={formik.touched.username}
            />
          </div>

          <PasswordInput
            name="password"
            onBlur={formik.handleBlur}
            placeholder="Password"
            error={formik.errors.password}
            value={formik.values.password}
            touched={formik.touched.password}
            onChange={(e) => formik.setFieldValue("password", e.target.value)}
          />

          <div className={styles.wrapperRules}>
            Do you agree?
            <input
              name="rules"
              type="checkbox"
              value={formik.values.rules}
              onChange={formik.handleChange}
            />
          </div>

          <div className={styles.wrapperSelect}>
            <Select
              name="role"
              options={options}
              onChange={(option) => formik.setFieldValue("role", option.value)}
              value={options.find(
                (option) => option.value === formik.values.role
              )}
            />
          </div>

          <div className={styles.wrapperBtn}>
            <Button title="Sign In" type="submit" />
          </div>
        </form>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
