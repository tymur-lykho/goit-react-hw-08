import { selectFilteredContacts } from "../../redux/contactsSlice";
import Contact from "../Contact/Contact";
import css from "./ContactList.module.css";
import { useSelector } from "react-redux";

export default function ContactList(contacts) {
  const visibleContacts = useSelector(selectFilteredContacts);
  return (
    <>
      {contacts.length === 0 && (
        <div className={css.empty}>Phonebook is empty</div>
      )}
      <ul className={css.list}>
        {visibleContacts.map((contact) => (
          <li key={contact.id} className={css.card}>
            <Contact data={contact} />
          </li>
        ))}
      </ul>
    </>
  );
}
