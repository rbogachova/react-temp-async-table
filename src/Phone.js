import React from 'react';

function Phone(props) {
    return (
        <td scope="col">
            {props.user.phone}
        </td>
    );
}

export default Phone;
