import React, {useState} from 'react';

function NameCell(props) {
    const [name, setName] = useState(props.user.name);
    const [editModeEnabled, setEditModeEnabled] = useState(false);

    const onEditButtonClick = () => {
        setName(props.user.name);
        setEditModeEnabled(true);
    };

    const onCancelButtonClick = () => {
        setEditModeEnabled(false);
    };

    const onSaveButtonClick = () => {
        props.saveEdited(props.user.id, {...props.user, name: name});
        setEditModeEnabled(false);
    };

    return (
        <td>
            {
                (!editModeEnabled)
                    ?
                    <div>
                        {props.user.name}
                        <button className="btn btn-sm float-right"
                                onClick={onEditButtonClick}>
                            <i className="fa fa-pencil"/>
                        </button>
                    </div>
                    :
                    <div>
                        <input type="text"
                               className="form-control"
                               value={name}
                               onChange={e => setName(e.target.value)}/>
                        <button className="btn btn-sm float-right"
                                onClick={onCancelButtonClick}>
                            <i className="fa fa-times"/>
                        </button>
                        <button className="btn btn-sm float-right"
                                onClick={onSaveButtonClick}>
                            <i className="fa fa-check"/>
                        </button>
                    </div>
            }
        </td>
    );
}

export default NameCell;
