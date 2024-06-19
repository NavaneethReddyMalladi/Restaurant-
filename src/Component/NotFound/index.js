import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <img
      className="not-found-image"
      alt="not-found"
      src="https://res-console.cloudinary.com/dktwlx0dz/thumbnails/transform/v1/image/upload/Yl9hdXRvOnByz"
    />
    <h1>Page Not Found</h1>
    <Link to="/">
      <button type="button">GO Home</button>
    </Link>
  </div>
)

export default NotFound
