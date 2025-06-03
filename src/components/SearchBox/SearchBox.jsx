import { useDispatch } from "react-redux";
import css from "./SerchBox.module.css";
import { changeFilters } from "../../redux/filters/slice";

export default function SearchBox({ inputValue }) {
  const dispatch = useDispatch();
  const onUpdate = (event) => {
    dispatch(changeFilters(event.target.value));
  };
  return (
    <div className={css.searchBox}>
      <label htmlFor="searchBox">Find contacts by name</label>
      <input
        type="text"
        id="searchBox"
        value={inputValue}
        onChange={onUpdate}
      />
    </div>
  );
}
