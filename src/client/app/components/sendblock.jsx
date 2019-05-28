import React from "react";

class SendBlock extends React.Component {
    render () {
        return (
            <div className="sendblock-container">
               <img id="icon-add" src="./res/add.svg" />
                <div id="sendblock-text"></div>
                <img id="icon-send" src="./res/send.svg" />
            </div>
        );
    }
}

export default SendBlock;