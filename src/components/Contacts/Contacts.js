import { ListItem } from 'components/ListItem/ListItem';
import PropTypes from 'prop-types';
import { List } from './Contacts.styled';

export const Contacts = ({ contactList, search, deleteContact }) => {
  const filteredContact = contactList.filter(contact =>
    contact.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {contactList ? (
        <List>
          {filteredContact.map(({ id, name, number }) => (
            <ListItem
              key={id}
              contactId={id}
              contactName={name}
              contactNumber={number}
              onDeleteContact={deleteContact}
            />
          ))}
        </List>
      ) : (
        ''
      )}
    </>
  );
};

Contacts.propTypes = {
  contactList: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
      id: PropTypes.string.isRequired,
    })
  ).isRequired,
  search: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};
