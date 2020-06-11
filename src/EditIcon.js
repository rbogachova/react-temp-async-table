import React from 'react';

function EditIcon(props) {
    const edit = () => {
    };

    return (
        <button className="btn btn-sm float-right"
                onClick={edit}>
            <i className="fa fa-pencil"/>
        </button>
    );
}

export default EditIcon;
