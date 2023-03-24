import { Button } from '@mui/material';
import { useState, ChangeEvent } from 'react';
import styles from './username-input.module.css';

export const UsernameInput = ({ handleUsernameSubmit }: UsernameInputProps) => {
  const [username, setUsername] = useState<string>('');
  const handleChange = (event: ChangeEvent) => {
    setUsername((event.target as HTMLInputElement).value);
  };
  return (
    <div className="center-page-align page">
      <label className={styles['input-label']}>
        Please enter your username
      </label>
      <input type="text" value={username} onChange={handleChange} />
      <Button onClick={handleUsernameSubmit(username)}>Submit</Button>
    </div>
  );
};

// TODO: update handleChange type
export interface UsernameInputProps {
  handleUsernameSubmit: any;
}
