import "./App.css";
import "modern-normalize";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fecthContacts } from "./redux/contactsOps";
import {
  selectContacts,
  selectLoading,
  selectError,
} from "./redux/contactsSlice.js";
import { selectNameFilter } from "./redux/filtersSlice.js";

function App() {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectNameFilter);
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

export default App;
