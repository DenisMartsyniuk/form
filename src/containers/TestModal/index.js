import Portal from "components/common/Portal";
import WrapperForModal from "components/common/WrapperForModal";

const TestModal = () => {
  return (
    <Portal>
      <WrapperForModal title="Test modal">
        <div>Test Content</div>
      </WrapperForModal>
    </Portal>
  );
};

export default TestModal;
