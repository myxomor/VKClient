import React from "react";
import ReactList from "react-list";

class Messages extends React.Component {
    state = {
        mess: [
            {
                author: "outMes",
                text: "Привет!"
            },
            {
                author: "inMes",
                text: "Привет)"
            },
            {
                author: "outMes",
                text: "Всего тебе хорошего!"
            },
            {
                author: "inMes",
                text: "Спасибо!!!"
            }
        ]
    };

    renderItem (index, key) {
        return <div key={key} className={"message-container " + this.state.mess[index].author}>
            <div className="message" >
                {this.state.mess[index].text}
            </div>
        </div>;
    }

    render () {
        return (
            <div>
                <div className="mes-list" >
                    <ReactList
                        itemRenderer={::this.renderItem}
                        length={this.state.mess.length}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
};

export default Messages;
