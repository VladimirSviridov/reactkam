import React from "react";
import MessageItem from "../../Dialogs/MessageItem";



function MyMessages(props) {

    let MessagesElements = props.MessagesData.map(el => <MessageItem key={el.id} text = {el.message}/>);
    return (
        <div>
            {MessagesElements}
        </div>
    );
}

export default MyMessages;