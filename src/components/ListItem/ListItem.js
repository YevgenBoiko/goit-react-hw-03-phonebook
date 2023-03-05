import { Button, Item, TextName } from './ListItem.styled';

export const ListItem = ({
  contactName,
  contactId,
  contactNumber,
  onDeleteContact,
}) => {
  return (
    <Item>
      <TextName>{contactName}: </TextName>
      <p>{contactNumber}</p>
      <Button type="button" onClick={() => onDeleteContact(contactId)}>
        Delete
      </Button>
    </Item>
  );
};
