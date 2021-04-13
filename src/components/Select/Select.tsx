import { useDispatch } from "react-redux";
import { categoryAction } from "../../redux/reducers/newPost";

type selectProps = {
  className: string;
};

const Select = ({ className }: selectProps) => {
  //TODO: 작가별 카테고리 배열을 가져와야함
  const category = ['All', 'Novel', 'Poem', 'Essay']

  const dispatch = useDispatch();

  const onChangeCategory = ({ target }: { target: HTMLSelectElement }) => {
    dispatch(
      categoryAction(
        target.value === "All"
          ? "All"
          : target.value === "Poem"
          ? "Poem"
          : target.value === "Novel"
          ? "Novel"
          : "Essay"
      )
    );
  };

  return (
    <select name="category" id="categorySelect" onChange={onChangeCategory}>
      {/* <option value="poem">POEM</option>
      <option value="novel">NOVEL</option>
      <option value="essay">ESSAY</option> */}
      {category.map((v, i) => {
          return (
            <option value={v} key={i}>{v}</option>
          )
        })}
    </select>
  );
};

export default Select;
