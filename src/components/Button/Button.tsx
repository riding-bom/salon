import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { CombinedState } from 'redux';
import { post } from '../../constant/type';
import { addPost } from '../../firebase/API';
import { dateAction, resetTitleAction } from '../../redux/reducers/newPost';
// import { StyledModal } from '../Modal/StyledModal';

type buttonProps = {
  className: string;
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset' | undefined;
  width?: string;
  onOpen?: () => void;
};

const Button = ({ className, children, type, onOpen }: buttonProps) => {
  const newPost = useSelector(
    (
      state: CombinedState<{
        post: post;
        newPost: post;
      }>
    ) => state.newPost
  );

  const history = useHistory();

  // console.log(newPost);

  // useSelector(store => store.newPost)
  // newPost의 상태를 확인하여 그 상태가 비어 있는지 확인한 후 비어 있으면 클릭 이벤트가 발생하지 않도록 한다
  const dispatch = useDispatch();

  const onChangeIdAndDate = async (e: any) => {
    if (newPost.title === '' || newPost.content === '') {
      (onOpen as () => void)();
      return;
    } else {
      dispatch(dateAction(new Date()));
      dispatch(resetTitleAction());
      await addPost(newPost);
      dispatch(resetTitleAction());
      history.push(`/${newPost.id}`);
    }
  };

  return (
    <button
      className={className}
      type={type}
      onClick={type === 'submit' ? onChangeIdAndDate : () => {}}
    >
      {children}
    </button>
  );
};

Button.defaultProps = {
  type: 'button'
};

export default Button;
