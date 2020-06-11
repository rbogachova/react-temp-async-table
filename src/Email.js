import React from 'react';

function Email(props) {
    return (
        <td scope="col">
            {props.user.email}
        </td>
    );
}

export default Email;
