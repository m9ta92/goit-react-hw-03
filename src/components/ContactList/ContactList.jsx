import Contact from '../Contact/Contact';

const ContactList = props => {
  const { contacts, onDeleteContact } = props;

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
            <button type="button" onClick={() => onDeleteContact(contact.id)}>
              ❌
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
