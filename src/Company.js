import React from 'react';

function Company(props) {
    return (
        <td scope="col">
            <div>{props.user.company.name}</div>
        </td>
    );
}

export default Company;
