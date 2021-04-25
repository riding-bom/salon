import Select from "../../components/Select/Select";
import { useDispatch } from "react-redux";
import { accessAction } from "../../redux/reducers/newPost";
import { ChangeEventHandler } from "react";

type AccessSelectProps = {
  className: string;
  defaultValue: string;
  color?: string;
};

const AccessSelector = ({
  className,
  defaultValue = "public",
}: AccessSelectProps) => {
  const access = ["public", "charged", "private"];

  const dispatch = useDispatch();

  const onChangeCategory: ChangeEventHandler<HTMLSelectElement> = ({
    target,
  }) => {
    dispatch(
      accessAction(
        target.value === "public"
          ? "public"
          : target.value === "charged"
          ? "charged"
          : "private"
      )
    );
  };

  return (
    <Select
      className={className}
      id="accessSelect"
      name="access"
      onChange={onChangeCategory}
      defaultValue={defaultValue}
      optionArray={access}
    />
  );
};

export default AccessSelector;
