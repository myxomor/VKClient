import React from "react";

class UserInfoBar extends React.Component {
    render () {
        return (
            <div id="info">
                <div id="info-user-name">Денис Блох</div>
                <div id="info-online-status">online</div>
            </div>
        );
    }
}

export default UserInfoBar;