import React from 'react';

function Username(props) {
    return (
        <td scope="col">
            {props.user.username}
        </td>
    );
}

export default Username;
