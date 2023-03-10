import { Link } from 'react-router-dom';
import './notefound.css';

function NoteFound() {
  return (
    <div id='oopss'>
    <div id='error-text'>
        <img src="https://cdn.rawgit.com/ahmedhosna95/upload/1731955f/sad404.svg" alt="404" />
        <span> 404</span>
        <p className="p-a">
          . The meal you were looking for could not be found</p>
        <p className="p-b">
            ... Back to previous page
        </p>
        <Link to='/' className="back">... Back to previous page</Link>
    </div>
</div>
  );
}

export default NoteFound;