import css from './new_contacts.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  return (
    <ul className={css.contact_list}>
      {contacts.map(({ id, name, phone }) => (
        <li className={css.contact_item} key={id}>
          <p className={css.contact_title}>
            {name} : {phone}
          </p>
          <button
            className={css.button_delete}
            type="button"
            onClick={() => dispatch(deleteContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;
