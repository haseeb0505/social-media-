import "../topbar/topbar.css"
// import SearchIcon from '@mui/icons-material/Search';
// import { Home, LocationOn, Notifications } from '@material-ui/icons';
// import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Person, Search, Chat, Notifications } from '@mui/icons-material';
import { Link } from "react-router-dom";



export default function Topbar() {
    return <div className="topbarContainer">
        <div className="topbarLeft">
            <Link to="/" style={{ textDecoration: "none" }} >

                <span className="logo">HZ Social</span>
            </Link>
        </div>
        <div className="topbarCenter">
            <div className="searchBar">
                <Search className="searchIcon" />
                <input placeholder="Search for friends, posts or videos" className="SearchInput" />
            </div>
        </div>
        <div className="topbarRight">
            <div className="topbarLinks">
                <span className="topbarLink">Home Page</span>
                <span className="topbarLink">Timeline</span>
            </div>
            <div className="topbarIcons">
                <div className="topbarIconItem">
                    <Person />
                    <span className="topbarIconBadge">1</span>
                </div>
                <div className="topbarIconItem">
                    <Chat />
                    <span className="topbarIconBadge">2</span>
                </div>
                <div className="topbarIconItem">
                    <Notifications />
                    <span className="topbarIconBadge">1</span>
                </div>
            </div>
<Link to={`/profile/Haseeb`}>

            <img src="/assets/person/7.jpeg" alt="" className="topbarImg" />
</Link>
        </div>


    </div>;
}
