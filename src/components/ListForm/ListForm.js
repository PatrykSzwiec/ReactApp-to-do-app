import styles from '../ListForm/ListForm.module.scss';
import TextInput from '../TextInput/TextInput';
import Button from '../Button/Button.js';

import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addList } from '../../redux/listsRedux';

const ListForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Dispatch the action to add the new list to Redux store
    dispatch(addList(title, description));

    // Reset the form inputs
    setTitle('');
    setDescription('');
  };


  return (
    <form className={styles.listForm} onSubmit={handleSubmit}>
      <span className={styles.inputText}>Title:</span>
      <TextInput
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        required>
      </TextInput>

      <span className={styles.inputText}>Description:</span>
      <TextInput
        type="text"
        value={description}
        onChange={e => setDescription(e.target.value)}>
      </TextInput>
      <Button>add list</Button>
    </form>
  );
};

export default ListForm;