import s from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/phoneBook';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <label className={s.label}>
      
      <input
        className={s.input}
        type="text"
        placeholder="Знайти контакт за іменем" 
        name="filter"
        onChange={e => dispatch(filterContacts(e.target.value.toLowerCase()))}
      />
    </label>
  );
};

export default Filter;


