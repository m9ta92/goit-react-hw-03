import Contact from '../Contact/Contact';

const ContactList = props => {
  const { contacts } = props;

  return (
    <div>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Contact name={contact.name} number={contact.number} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
