import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <div>
      <div>Page not found</div>{' '}
      <div>
        <Link to="/">Go back home</Link>
      </div>
    </div>
  );
}

export default NotFound;
//  <div>Page not found</div>
//         <div>
//             <Link to='/'>Go back home</Link>
//         </div>
