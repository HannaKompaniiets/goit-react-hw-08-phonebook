import { useState } from 'react';
import css from './form.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/operations';

const Form = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleInputChange = event => {
    switch (event.currentTarget.name) {
      case 'name':
        setName(event.currentTarget.value);
        break;
      case 'phone':
        setPhone(event.currentTarget.value);
        break;
      default:
        break;
    }
  };

  const contactButtonSubmit = event => {
    event.preventDefault();
    const data = {
      name,
      phone,
    };
    if (
      contacts.find(
        contact => contact.name.toLowerCase() === data.name.toLowerCase()
      )
    ) {
      alert(`${data.name} is already in Contacts.`);
      return;
    }
    dispatch(addContact(data));
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };

  return (
    <form className={css.form} onSubmit={contactButtonSubmit}>
      <label className={css.label_name}>
        {' '}
        Name
        <input
          className={css.intup}
          value={name}
          onChange={handleInputChange}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>

      <label className={css.label_name}>
        {' '}
        Number
        <input
          className={css.intup}
          value={phone}
          onChange={handleInputChange}
          type="tel"
          name="phone"
          // pattern="\+?\d{1,4}?[\-.\s]?\(?\d{1,3}?\)?[\-.\s]?\d{1,4}[\-.\s]?\d{1,4}[\-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>
      <button className={css.button_add} type="submit">
        {' '}
        Add contact
      </button>
    </form>
  );
};

export default Form;
