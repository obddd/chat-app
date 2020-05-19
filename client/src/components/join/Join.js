import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import './Join.css';

const Join = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <div className="form__group field">
          <input
            className="form__field"
            placeholder="Name"
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
          <label for="name" class="form__label">
            Name
          </label>
        </div>
        <div className="form__group field">
          <input
            className="form__field"
            placeholder="Room"
            type="text"
            value={room}
            onChange={(event) => setRoom(event.target.value)}
          />
          <label for="room" className="form__label">
            Room
          </label>
        </div>
        <Link to={`/chat?name=${name}&room=${room}`}>
          <button
            className="btn"
            onClick={(event) =>
              (!name || !room) ? event.preventDefault() : null
            }
          >
            Join Now
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Join;
