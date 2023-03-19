import Form from './Form/Form';
import Contacts from './Contacts/Contacts';
import Filter from './Filter/Filter';

function App() {
  return (
    <>
      <h1 className="primary-title">ТелефонBook</h1>
      <Form />
      <Filter />
      <Contacts />
    </>
  );
}

export { App };
