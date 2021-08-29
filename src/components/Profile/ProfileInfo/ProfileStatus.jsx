import React from "react";

class ProfileStatus extends React.Component {
  state = {
    editMode: false,
    title: "Yo",
  };

  toggleEditMode = (isEditable) => {
    this.setState({
      editMode: isEditable,
    });
  };

  render() {
    return (
      <div>
        {!this.state.editMode && (
          <div>
            <span onDoubleClick={() => this.toggleEditMode(true)}>
              {this.props.status}
            </span>
          </div>
        )}
        {this.state.editMode && (
          <div>
            <input
              autoFocus={true}
              onBlur={() => this.toggleEditMode(false)}
              value={this.props.status}
            />
          </div>
        )}
      </div>
    );
  }
}

export default ProfileStatus;
