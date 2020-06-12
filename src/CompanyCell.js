import React from 'react';

function CompanyCell(props) {
    return (
        <td>
            <div>{props.user.company.name}</div>
        </td>
    );
}

export default CompanyCell;
