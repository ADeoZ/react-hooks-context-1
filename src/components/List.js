import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export default function List({ selectUser }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_DATA_URL}users.json`)
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <ul className="List">
      {users.map((item) => {
        return <li key={item.id} className="List-item" onClick={selectUser(item)}>{item.name}</li>
      })}
    </ul>
  );
}

List.propTypes = {
  selectUser: PropTypes.func.isRequired,
}