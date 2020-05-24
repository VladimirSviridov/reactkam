import React from "react";
import c from './UserStatus.module.css'


class UserStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    };

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });
            this.props.updateUserStatus(this.state.status);
    };
    onStatusChange = (e) => {
        this.setState({
            status: e.currentTarget.value,
        })
    };

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.status !== this.props.status){
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input onChange={this.onStatusChange} autoFocus={true}
                               onBlur={this.toggleEditMode} type="text" value={this.state.status}/>
                    </div>
                    : <div>
                        <span className={c.statusSpan} onDoubleClick={this.toggleEditMode}>
                            {this.props.status || "No status"}</span>
                    </div>}
            </>
        );

    }

}

export default UserStatus;