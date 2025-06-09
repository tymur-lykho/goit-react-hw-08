import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm.jsx";
import SearchBox from "../components/SearchBox/SearchBox.jsx";
import ContactList from "../components/ContactList/ContactList.jsx";
import { fecthContacts } from "../redux/contacts/operations.js";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "../redux/contacts/selectors.js";
import { selectQueryFilter } from "../redux/filters/selectors.js";

export default function ContactsPage() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectQueryFilter);
  const isLoading = useSelector(selectLoading);
  const error = useSelector(selectError);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fecthContacts());
  }, [dispatch]);

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      {contacts.length !== 0 && <SearchBox inputValue={filter} />}
      {isLoading && !error && <b>Request in progress...</b>}
      <ContactList contacts={contacts} />
    </>
  );
}
