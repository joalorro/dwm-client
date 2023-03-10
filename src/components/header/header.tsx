import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import './header.css';

export const Header = () => {
  return (
    <header id="app-header">
      <Link to="/">
        <Button variant="contained">Return to homepage</Button>
      </Link>
    </header>
  );
};
