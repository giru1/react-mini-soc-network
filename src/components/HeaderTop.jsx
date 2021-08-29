const HeaderTop = () => {
    return <header className="header header--logout" id="site-header">
        <div className="header-content-wrapper">
            <form id="top-search-form" action="https://olympus.crumina.net/" method="GET"
                  className="search-bar w-search notification-list friend-requests">
                <div className="form-group with-button">
                    <div className="selectize-control form-control js-user-search multi">
                        <div className="selectize-input items not-full has-options">
                            <input type="text" autoComplete="off" name="s" id="s" value=""
                                   placeholder="Search here people or pages..."/>
                        </div>
                        <div className="selectize-dropdown multi form-control js-user-search mCustomScrollbar ps"
                             style="display: none;">
                            <div className="selectize-dropdown-content"></div>
                            <div className="ps__rail-x" style="left: 0px; bottom: 0px;">
                                <div className="ps__thumb-x" tabIndex="0" style="left: 0px; width: 0px;"></div>
                            </div>
                            <div className="ps__rail-y" style="top: 0px; right: 0px;">
                                <div className="ps__thumb-y" tabIndex="0" style="top: 0px; height: 0px;"></div>
                            </div>
                        </div>
                    </div>
                    <button>
                        <i className="olympus-icon olympus-icon-Magnifying-Glass-Icon"></i>
                        <svg className="olymp-search-spinner" width="135" height="135" viewBox="0 0 135 135"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M67.447 58c5.523 0 10-4.477 10-10s-4.477-10-10-10-10 4.477-10 10 4.477 10 10 10zm9.448 9.447c0 5.523 4.477 10 10 10 5.522 0 10-4.477 10-10s-4.478-10-10-10c-5.523 0-10 4.477-10 10zm-9.448 9.448c-5.523 0-10 4.477-10 10 0 5.522 4.477 10 10 10s10-4.478 10-10c0-5.523-4.477-10-10-10zM58 67.447c0-5.523-4.477-10-10-10s-10 4.477-10 10 4.477 10 10 10 10-4.477 10-10z">
                                <animatetransform attributeName="transform" type="rotate" from="0 67 67" to="-360 67 67"
                                                  dur="2.5s" repeatCount="indefinite"></animatetransform>
                            </path>
                            <path
                                d="M28.19 40.31c6.627 0 12-5.374 12-12 0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 6.626 5.372 12 12 12zm30.72-19.825c4.686 4.687 12.284 4.687 16.97 0 4.686-4.686 4.686-12.284 0-16.97-4.686-4.687-12.284-4.687-16.97 0-4.687 4.686-4.687 12.284 0 16.97zm35.74 7.705c0 6.627 5.37 12 12 12 6.626 0 12-5.373 12-12 0-6.628-5.374-12-12-12-6.63 0-12 5.372-12 12zm19.822 30.72c-4.686 4.686-4.686 12.284 0 16.97 4.687 4.686 12.285 4.686 16.97 0 4.687-4.686 4.687-12.284 0-16.97-4.685-4.687-12.283-4.687-16.97 0zm-7.704 35.74c-6.627 0-12 5.37-12 12 0 6.626 5.373 12 12 12s12-5.374 12-12c0-6.63-5.373-12-12-12zm-30.72 19.822c-4.686-4.686-12.284-4.686-16.97 0-4.686 4.687-4.686 12.285 0 16.97 4.686 4.687 12.284 4.687 16.97 0 4.687-4.685 4.687-12.283 0-16.97zm-35.74-7.704c0-6.627-5.372-12-12-12-6.626 0-12 5.373-12 12s5.374 12 12 12c6.628 0 12-5.373 12-12zm-19.823-30.72c4.687-4.686 4.687-12.284 0-16.97-4.686-4.686-12.284-4.686-16.97 0-4.687 4.686-4.687 12.284 0 16.97 4.686 4.687 12.284 4.687 16.97 0z">
                                <animatetransform attributeName="transform" type="rotate" from="0 67 67" to="360 67 67"
                                                  dur="8s" repeatCount="indefinite"></animatetransform>
                            </path>
                        </svg>
                    </button>
                </div>
            </form>
            <a href="https://olympus.crumina.net/members/crumina/#!" className="side-menu-open" data-toggle="tooltip"
               data-placement="left" data-original-title="Login / Register">
                <i className="olymp-login-icon olymp-menu-icon olympus-icon-Login-Icon"></i> </a>
        </div>
    </header>
}

export default HeaderTop;