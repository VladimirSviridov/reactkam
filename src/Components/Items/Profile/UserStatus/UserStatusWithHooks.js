import React, {useEffect, useState} from "react";
import c from './UserStatus.module.css'


const UserStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect( () => {
        setStatus(props.status)
    }, [props.status] );

    const activateEditMode = () => {
        setEditMode(true);
    };
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateUserStatus(status);
    };

    const onStatusChange = (e) => {
        setStatus( e.currentTarget.value)
    };

    return (
        <>
            {editMode && <div>
                <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode} type="text"
                       value={status}/>
            </div>}
            {!editMode && <div>
                <span className={c.statusSpan} onDoubleClick={activateEditMode}>
                    {props.status || "No status"}</span>
            </div>}
        </>
    );
};

export default UserStatusWithHooks;