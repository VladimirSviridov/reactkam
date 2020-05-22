import React from "react";
import DialogItem from "../DialogItem";


function MyDialogs(props) {

    let Dialogs = props.UsersToDialog.map(users => <DialogItem img={users.img} name={users.name}
                                                               key={users.id} id={users.id}/>);
    return (
        <div>
            {Dialogs}
        </div>
    );
}

export default MyDialogs;