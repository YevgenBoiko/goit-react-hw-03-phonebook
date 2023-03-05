import React from 'react';
import { Container, Section, Title } from './App.styled';
import { Contacts } from './Contacts/Contacts';
import { Filter } from './Filter/Filter';
import GlobalStyle from './GlobalStyle';
import Form from './Form/Form';

class App extends React.Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      const parsedContacts = JSON.parse(savedContacts);
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(preProps, prevState) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  handleFilter = event => {
    this.setState({ filter: event.currentTarget.value });
  };

  formSubmitHandler = data => {
    const ContactAlert = this.state.contacts.find(
      contact => contact.name === data.name
    );

    if (ContactAlert) {
      alert(`${data.name} is already in contacts`);
      return;
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, data],
      }));
    }
  };

  onContactDelete = contactID => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(
          contact => contact.id !== contactID
        ),
      };
    });
  };

  render() {
    return (
      <Container>
        <Section>
          <Title>Phonebook</Title>
          <Form onSubmit={this.formSubmitHandler} />
        </Section>
        <Section>
          <Title>Contacts</Title>
          <Filter onFilterHandle={this.handleFilter} />
          <Contacts
            contactList={this.state.contacts}
            search={this.state.filter}
            deleteContact={this.onContactDelete}
          />
        </Section>
        <GlobalStyle />
      </Container>
    );
  }
}

export default App;
