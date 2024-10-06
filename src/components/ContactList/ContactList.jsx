import Contact from '../Contact/Contact';
import css from './ContactList.module.css';

const ContactList = props => {
  const { contacts, onDeleteContact } = props;

  return (
    <div>
      <ul className={css.contacts}>
        {contacts.map(contact => (
          <li className={css.contact} key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
            <button
              className={css.deleteBtn}
              type="button"
              onClick={() => onDeleteContact(contact.id)}
            >
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
