import { useDispatch } from "react-redux";
import { createCloseAction, createOpenAction } from "redux/reducers/openModal";

const useDisplaySpinner = (display: boolean) => {
  const dispatch = useDispatch();

  display
    ? dispatch(createOpenAction("isOpenSpinner"))
    : dispatch(createCloseAction("isOpenSpinner"));
};

export default useDisplaySpinner;
