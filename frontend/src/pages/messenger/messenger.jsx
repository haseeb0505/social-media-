import { React, useContext, useState, useEffect } from "react";
import "./messenger.css";
import Topbar from "../../components/topbar/Topbar";
import Conversation from "../../components/conversations/conversation";
import Message from "../../components/message/Message";
import ChatOnline from "../../components/chatOnline/chatOnline";
import { AuthContext } from "../../components/context/AuthContext";
import axios from "axios";
export default function Messenger() {
  const [conversation, setConversation] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const getConversation = async () => {
      try {
        const res = await axios.get("/conversation/" + user._id);
        setConversation(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversation();
  }, [user._id]);
  return (
    <>
      <Topbar />
      <div className="messenger">
        <div className="chatmenu">
          <div className="chatmenuWrapper">
            <input placeholder="Search for friend" className="chatMenuInput" />
            {conversation.map((c, i) => (
              <Conversation conversation={c} currentUser={user} key={i} />
            ))}
          </div>
        </div>
        <div className="chatBox">
          <div className="chatBoxWrapper">
            <div className="chatBoxTop">
              <Message own={false} />
              <Message own={true} />
              <Message />
              <Message own={false} />
              <Message own={true} />
              <Message />
            </div>
            <div className="chatBoxBottom">
              <textarea
                className="chatMessageInput"
                placeholder="Send Message "
              ></textarea>
              <button className="chatSubmitbutto">Send</button>
            </div>
          </div>
        </div>
        <div className="chatOnline">
          <div className="chatOnlineWrapper">
            <ChatOnline />
            <ChatOnline />
            <ChatOnline />
          </div>
        </div>
      </div>
    </>
  );
}
