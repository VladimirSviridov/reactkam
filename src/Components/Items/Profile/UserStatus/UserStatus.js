import React from "react";


class UserStatus extends React.Component {

    state = {
        editMode: false
    };

    toggleEditMode = () => {
        this.setState({
            editMode: !this.state.editMode
        });

    };

    render() {
        return (
            <>
                {this.state.editMode
                    ? <div>
                        <input autoFocus={true} onBlur={this.toggleEditMode} type="text" value={this.props.status}/>
                    </div>
                    : <div>
                        <span onDoubleClick={this.toggleEditMode}>{this.props.status}</span>
                    </div>}
            </>
        );

    }

}

export default UserStatus;