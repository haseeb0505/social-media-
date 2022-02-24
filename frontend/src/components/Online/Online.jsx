import "./online.css"

export default function Online({ user }) {
    const PF = process.env.REACT_APP_PUBLIC_FOLDER;

    return <li className="rightbarFriend">
        <div className="rightbarprofileImgContainer">
            <img className="rightbarprofileImg" src={PF + user.profilePicture} alt="" />
            <span className="rightbarOnline"></span>
        </div>
        <span className="onlineUsername">{user.username}</span>
    </li>;
}
