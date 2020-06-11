import React from 'react';

function Address(props) {
    return (
        <td scope="col">
            <div>Street: {props.user.address.street}</div>
            <div>Suite: {props.user.address.suite}</div>
            <div>City: {props.user.address.city}</div>
            <div>Zipcode: {props.user.address.zipcode}</div>
            <div>Geo: {props.user.address.geo.lat}, {props.user.address.geo.lng}</div>
        </td>
    );
}

export default Address;
