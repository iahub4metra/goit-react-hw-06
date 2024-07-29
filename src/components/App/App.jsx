import { useEffect, useState } from "react"
import ContactForm from "../ContactForm/ContactForm"
import ContactList from "../ContactList/ContactList"
import SearchBox from "../SearchBox/SearchBox"

function App() {
  const [contacts, setContact] = useState(() => {
      const savedContacts = window.localStorage.getItem('contacts');
      if (savedContacts !== null) {
        return JSON.parse(savedContacts);
      }
      return [
        {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26'},
        {id: 'id-5', name: 'Rosie Simpson', number: '459-12-56'},
        {id: 'id-6', name: 'Hermione Kline', number: '443-89-12'},
        {id: 'id-7', name: 'Eden Clements', number: '645-17-79'},
      ]
    }
  )
  const [filter, setFilter] = useState('')
  const deleteContact = (contactId) => {
    setContact((values) => {
      return values.filter((contact)=> contact.id !== contactId)
    })
  }

  useEffect(() => {
      window.localStorage.setItem('contacts', JSON.stringify(contacts), [contacts])
    }
  )

  const visibleContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(filter.toLowerCase()));
  
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm setContact={setContact} contacts={contacts} />
      <SearchBox value={filter} onFilter={setFilter} />
      <ContactList contacts={visibleContacts} onDelete={deleteContact} />
    </>
  )
}

export default App
