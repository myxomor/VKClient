import React from "react";
import ReactList from "react-list";

class People extends React.Component {
    state = {
        accounts: [
            {
                name: "Евгений Грибов",
                icon: "./res/1.jpg",
                dateLastMes: "09.05.2019",
                lastMessage: "Закладка"
            },
            {
                name: "Денис Блох",
                dateLastMes: "10.05.2019",
                lastMessage: "завтра к 11"
            },
            {
                name: "Гоша Подхалдин",
                dateLastMes: "10.05.2019",
                lastMessage: "вот методичка"
            },
            {
                name: "Евгений Грибов",
                icon: "./res/1.jpg",
                dateLastMes: "09.05.2019",
                lastMessage: "Закладка"
            },
            {
                name: "Денис Блох",
                dateLastMes: "10.05.2019",
                lastMessage: "завтра к 11"
            },
            {
                name: "Гоша Подхалдин",
                dateLastMes: "10.05.2019",
                lastMessage: "вот методичка"
            }

        ]
    };

    renderItem (index, key) {
        return (
        <div key={key} className="user">
            <div style={{display: "flex", justifyContent: "left", width: "190px"}}>
                <img className="user-icon" src={this.state.accounts[index].icon}/>
                <div style={{display: "block"}}>
                    <div className="user-name">{this.state.accounts[index].name}</div>
                    <div className="user-lastMessage">{this.state.accounts[index].lastMessage}</div>
                </div>
            </div>
            <div style={{display: "flex", justifyContent: "right"}}>
                <div className="user-dateLastMes">{this.state.accounts[index].dateLastMes}</div>
            </div>
        </div>
        );
    }

    render () {
        return (
            <div>
                <div className="user-list" >
                    <ReactList
                        itemRenderer={::this.renderItem}
                        length={this.state.accounts.length}
                        type='uniform'
                    />
                </div>
            </div>
        );
    }
}

export default People;