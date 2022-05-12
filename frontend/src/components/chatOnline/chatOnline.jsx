import axios from "axios";
import React, { useEffect } from "react";
import "./chatOnline.css";
//
export default function ChatOnline({ onlineUsers, currentId, setCurrentChat }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER;
  const [friends, setFriends] = React.useState([]);
  const [onlineFriends, setOnlineFriends] = React.useState([]);

  const handleClick = async (user) => {
    try {
      const res = await axios.get(
        `/conversation/find/ ${currentId} / ${user._id}`
      );
      if (res.data !== null) {
        setCurrentChat(res.data);
      } else {
        const newChat = await axios.post(`/conversation/`, {
          senderId: currentId,
          receiverId: user._id,
        });

        setCurrentChat(newChat.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const getFriends = async () => {
      try {
        const res = await axios.get("/users/following/" + currentId);
        setFriends(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getFriends();
  }, [currentId]);

  useEffect(() => {
    setOnlineFriends(friends.filter((f) => onlineUsers.includes(f._id)));
  }, [onlineUsers, friends]);

  return (
    <div>
      {onlineFriends.map((o) => (
        <>
          <div className="chatOnlineFriend" onClick={() => handleClick(o)}>
            <div className="chatOnlineImgContainer">
              <img
                className="chatOnlineImg"
                src={
                  o?.profilePicture
                    ? PF + o.profilePicture
                    : PF + "person/noAvatar.png"
                }
                alt=""
              />
              <div className="chatOnlineBadge"></div>
            </div>
            <span className="chatOnlineUsername">{o?.username}</span>
          </div>
        </>
      ))}
    </div>
  );
}
