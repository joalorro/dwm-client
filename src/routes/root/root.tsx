import './Root.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function Root() {
  return (
    <>
      <section>
        <h3>Welcome to Draw With Me!</h3>
      </section>
      <section>
        <Link to="/rooms/1">
          <Button>Click here to join a room</Button>
        </Link>
      </section>
    </>
  );
}
