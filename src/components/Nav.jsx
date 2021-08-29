const Nav = () => {
    return <div className="timeline-cover">
        <div className="timeline-nav-bar hidden-sm hidden-xs">
            <div className="row">
                <div className="col-md-3">
                    <div className="profile-info">
                        <img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo"/>
                        <h3>Sarah Cruiz</h3>
                        <p className="text-muted">Creative Director</p>
                    </div>
                </div>
                <div className="col-md-9">
                    <ul className="list-inline profile-menu">
                        <li><a href="timeline.html">Timeline</a></li>
                        <li><a href="timeline-about.html" className="active">About</a></li>
                        <li><a href="timeline-album.html">Album</a></li>
                        <li><a href="timeline-friends.html">Friends</a></li>
                    </ul>
                    <ul className="follow-me list-inline">
                        <li>1,299 people following her</li>
                        <li>
                            <button className="btn-primary">Add Friend</button>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="navbar-mobile hidden-lg hidden-md">
            <div className="profile-info">
                <img src="http://placehold.it/300x300" alt="" className="img-responsive profile-photo"/>
                <h4>Sarah Cruiz</h4>
                <p className="text-muted">Creative Director</p>
            </div>
            <div className="mobile-menu">
                <ul className="list-inline">
                    <li><a href="timline.html">Timeline</a></li>
                    <li><a href="timeline-about.html" className="active">About</a></li>
                    <li><a href="timeline-album.html">Album</a></li>
                    <li><a href="timeline-friends.html">Friends</a></li>
                </ul>
                <button className="btn-primary">Add Friend</button>
            </div>
        </div>
    </div>
}
export default Nav;
