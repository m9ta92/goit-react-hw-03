import css from './Contact.module.css';

import { TbUserFilled } from 'react-icons/tb';
import { TbPhoneFilled } from 'react-icons/tb';

const Contact = contacts => {
  return (
    <div>
      <div className={css.asd}>
        <TbUserFilled />
        <p>{contacts.name}</p>
      </div>
      <div className={css.asd}>
        <TbPhoneFilled />
        <p>{contacts.number}</p>
      </div>
    </div>
  );
};

export default Contact;
