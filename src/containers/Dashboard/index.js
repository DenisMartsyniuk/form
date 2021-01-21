import { useSelector, useDispatch } from "react-redux";

import { uiActions } from "bus/ui/actions";
import TestModal from "containers/TestModal";
import Button from "components/common/Button";
import { selectOpenModal } from "bus/ui/selectors";

import styles from "./styles.module.scss";

const Dashboard = () => {
  const dispatch = useDispatch();
  const openModal = useSelector(selectOpenModal);

  console.log(openModal);

  return (
    <div>
      Dashboard
      <div className={styles.wrapperBtn}>
        <Button
          title="Open Modal"
          onClick={() => dispatch(uiActions.modal.open())}
        />
      </div>
      {openModal && <TestModal />}
    </div>
  );
};

export default Dashboard;
