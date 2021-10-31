import React, { useState } from "react";

const ProfileStatusWithHooks = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [status, setstatus] = useState(props.status);

  const activateEditMode = () => setEditMode(true);

  const deactivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(status);
  }

  const onStatusChange = (e) => {
    setstatus(e.currentTarget.value);
  }

  return (
    <div>
      {!editMode && 
        <div> 
          <span onDoubleClick={activateEditMode}>
            {props.status || "No status..."}
          </span>
        </div>
      }
      {editMode && (
        <div>
          <input
            autoFocus={true}
            onBlur={deactivateEditMode}
            onChange={onStatusChange}
            value={status}
          />
        </div>
      )}
    </div>
  );
}

export default ProfileStatusWithHooks;