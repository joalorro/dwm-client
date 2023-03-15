import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import styles from './header.module.css';

export const Header = () => {
  return (
    <header id={styles['app-header']}>
      <Link to="/">
        <Button variant="contained">Return to homepage</Button>
      </Link>
    </header>
  );
};
