import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./css/FriendPage.css";

const Friends = () => {
  const [friendId, setFriendId] = useState("1234");
  const [friends, setFriends] = useState([1234, 32432, 324, 234]);
  const navigate = useNavigate();

  const addFriend = () => {
    if (friendId.trim() !== "") {
      setFriends([...friends, friendId.trim()]);
      setFriendId("");
    }
  };

  const removeFriend = (index) => {
    const newFriends = [...friends];
    newFriends.splice(index, 1);
    setFriends(newFriends);
  };

  const navigateToHome = () => {
    navigate("/");
  };

  return (
    <div className="Homepage">
      <div className="card">
        <div className="button-row">
          <input
            type="text"
            placeholder="Enter friend ID"
            value={friendId}
            onChange={(e) => setFriendId(e.target.value)}
          />
          <button onClick={addFriend}>Search Friend ID</button>
          <button onClick={navigateToHome}>View All Friends</button>
        </div>
        <div className="friend-list">
          <h3>Friends List</h3>
          {friends.length > 0 ? (
            friends.map((friend, index) => (
              <div key={index} className="friend-item">
                <span>{friend}</span>
                <button onClick={() => removeFriend(index)}>Remove</button>
              </div>
            ))
          ) : (
            <p>No friends added yet.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Friends;
