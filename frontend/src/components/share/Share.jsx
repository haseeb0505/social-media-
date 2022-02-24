import "./share.css";
import { PermMedia, Label, Room, EmojiEmotions } from "@mui/icons-material"

export default function share() {
    return <div className="share">
        <div className="shareWrapper">
            <div className="sharetop">
                <img className="shareProfilePicture" src="/assets/person/7.jpeg" alt="" />
                <input placeholder="What's in your mind Haseeb?" className="shareInput" />
            </div>
            <hr className="shareHr" />
            <div className="shareBottom">
                <div className="shareOptions">
                    <div className="shareOption">
                        <PermMedia htmlColor="tomato" className="shareIcon" />
                        <span className="shareOptionsText">Photo Or Video</span>
                    </div>
                    <div className="shareOption">
                        <Label htmlColor="blue" className="shareIcon" />
                        <span className="shareOptionsText">Tag</span>
                    </div>
                    <div className="shareOption">
                        <Room htmlColor="green" className="shareIcon" />
                        <span className="shareOptionsText">Location</span>
                    </div>
                    <div className="shareOption">
                        <EmojiEmotions htmlColor="goldenrod" className="shareIcon" />
                        <span className="shareOptionsText">Feelings</span>
                    </div>

                </div>
                <button className="shareButton">share</button>
            </div>
        </div>
    </div>;
}

