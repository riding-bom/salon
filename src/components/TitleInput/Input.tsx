import { useDispatch, useSelector } from "react-redux";
import { CombinedState } from "redux";
import { post } from "../../constant/type";
import { titleAction, subTitleAction } from "../../redux/reducers/newPost";

type InputProps = {
  className: string;
  label: string;
  placeHolder: string;
  width?: string;
};

const Input = ({ className, label, placeHolder }: InputProps) => {
  const newPost = useSelector(
    (
      store: CombinedState<{
        post: post;
        newPost: post;
      }>
    ) => store.newPost
  );

  const value = label==='title' ? newPost.title : newPost.subTitle

  const dispatch = useDispatch();

  const onChangeTitle = ({ target }: { target: HTMLInputElement }) => {
    dispatch(titleAction(target.value));
  };

  const onChangeSubTitle = ({ target }: { target: HTMLInputElement }) => {
    dispatch(subTitleAction(target.value));
  };

  return (
    <div className={className}>
      <input
        id={label}
        type="text"
        value={value}
        onChange={label==='title' ? onChangeTitle : onChangeSubTitle}
      ></input>
      <label htmlFor={label}>
        {value ? "" : placeHolder}
      </label>
    </div>
  );
};

Input.defaultProps = {
  width: "100%",
};

export default Input;
