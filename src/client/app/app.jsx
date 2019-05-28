import {render} from "react-dom";
import SearchBar from "./components/searchBar";
import People from "./components/people";
import UserInfoBar from "./components/userinfobar";
import Messages from "./components/messages";
import SendBlock from "./components/sendblock";

const App = () => (
    <div style={{display: "flex"}}>
    <div style={{ display: "flex", justifyContent: "left" }}>
        <div>
            <SearchBar />
            <People />
        </div>
    </div>
    <div style={{ display: "flex", justifyContent: "right" }} >
        <div>
            <UserInfoBar />
            <Messages />
            <SendBlock />
        </div>
    </div>
    </div>
);

render(<App />, document.getElementById("app"));
