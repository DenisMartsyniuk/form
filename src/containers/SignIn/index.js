import { Formik } from "formik";
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

  return (
    <SignInWrapper>
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Sign In</h1>

        <Formik
          initialValues={signIn.shape}
          validationSchema={signIn.schema}
          onSubmit={(values) => handleSignIn(values)}
        >
          {({
            values,
            errors,
            touched,
            handleBlur,
            handleSubmit,
            handleChange,
            setFieldValue,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className={styles.wrapperInput}>
                <Input
                  name="username"
                  onBlur={handleBlur}
                  placeholder="Username"
                  error={errors.username}
                  value={values.username}
                  onChange={handleChange}
                  touched={touched.username}
                />
              </div>

              <PasswordInput
                name="password"
                onBlur={handleBlur}
                placeholder="Password"
                error={errors.password}
                value={values.password}
                onChange={(e) => setFieldValue("password", e.target.value)}
                touched={touched.password}
              />

              <div className={styles.wrapperRules}>
                Do you agree?
                <input
                  name="rules"
                  type="checkbox"
                  value={values.rules}
                  onChange={handleChange}
                />
              </div>

              <div className={styles.wrapperSelect}>
                <Select
                  name="role"
                  options={options}
                  onChange={(option) => setFieldValue("role", option.value)}
                  value={options.find((option) => option.value === values.role)}
                />
              </div>

              <div className={styles.wrapperBtn}>
                <Button title="Sign In" type="submit" />
              </div>
            </form>
          )}
        </Formik>
      </div>
    </SignInWrapper>
  );
}

export default SignIn;
