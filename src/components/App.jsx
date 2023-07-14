import Form from './form/Form';
import ContactList from './new_contact/ContactList';
import Filter from './filter/Filter';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectError,
  selectFilteredContacts,
  selectIsLoading,
} from 'redux/selectors';
import Loader from './Loader/Loader';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/operations';

export const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <h2>Phonebook</h2>
      <Form />
      {isLoading && <Loader />}
      {error && <div>Oopps, something went wrong...{error.message}</div>}
      <h2>Contacts</h2>
      <Filter />
      {contacts.length ? <ContactList /> : <p>Contact not found</p>}
    </>
  );
};

export default App;
