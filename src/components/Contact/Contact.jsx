import css from "./Contact.module.css";
import { IoMdContact } from "react-icons/io";
import { MdLocalPhone } from "react-icons/md";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/operations";

export default function Contact({ data: { id, name, number } }) {
  const link = `tel:${number}`;
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteContact(id));
  };

  return (
    <>
      <div className={css.data}>
        <div className={css.dataWrapper}>
          <IoMdContact size={25} />
          <h3>{name}</h3>
        </div>
        <div className={css.dataWrapper}>
          <MdLocalPhone size={23} />
          <a className={css.numberLink} href={link}>
            {number}
          </a>
        </div>
      </div>
      <button className={css.button} type="button" onClick={handleDelete}>
        <MdDelete size={25} />
      </button>
    </>
  );
}
