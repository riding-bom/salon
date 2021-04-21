import Select from "../../components/Select/Select";
import { useDispatch } from "react-redux";
import { categoryAction } from "../../redux/reducers/newPost";
import { ChangeEventHandler } from "react";

type CategorySelectProps = {
  className: string;
  color?: string;
};

const CategorySelector = ({ className }: CategorySelectProps) => {
  //TODO: 작가별 카테고리 배열을 가져와야함
  const category = ["All", "Novel", "Poem", "Essay"];

  const dispatch = useDispatch();

  const onChangeCategory: ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => {
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
    <Select
      className={className}
      id="categorySelect"
      name="category"
      onChange={onChangeCategory}
      optionArray={category}
    />
  );
};

export default CategorySelector;
