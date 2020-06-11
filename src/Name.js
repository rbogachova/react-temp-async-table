import React from 'react';
import EditIcon from "./EditIcon";

function Name(props) {
    return (
        <td scope="col">
            {props.user.name}
            <EditIcon user={props.user}/>
        </td>
    );
}

export default Name;
