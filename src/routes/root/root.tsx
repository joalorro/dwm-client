import './Root.module.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

export function Root() {
  return (
    <div className="app-background center-page-align page">
      <section>
        <h3>Welcome to Draw With Me!</h3>
      </section>
      <section>
        <Link to="/rooms">
          <Button>Click here to join a room</Button>
        </Link>
      </section>
    </div>
  );
}
