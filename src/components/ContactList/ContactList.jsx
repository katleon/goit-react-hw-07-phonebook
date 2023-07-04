import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from '../redux/operations';
import { selectFilteredContacts } from '../redux/selectors';
import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  return (
    <ul className={css.list}>
      {contacts.map(({ id, name, phone }) => (
        <li key={id} className={css.item}>
          <p className={css.contact}>
            {name}: {phone}
          </p>
          <button
            className={css.btn}
            type="submit"
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
