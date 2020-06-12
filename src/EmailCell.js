import React, {useState} from 'react';

function EmailCell(props) {
    const [email, setEmail] = useState(props.user.email);
    const [editModeEnabled, setEditModeEnabled] = useState(false);

    const onEditButtonClick = () => {
        setEmail(props.user.email);
        setEditModeEnabled(true);
    };

    const onCancelButtonClick = () => {
        setEditModeEnabled(false);
    };

    const onSaveButtonClick = () => {
        props.saveEdited(props.user.id, {...props.user, email: email});
        setEditModeEnabled(false);
    };

    return (
        <td>
            {
                (!editModeEnabled)
                    ?
                    <div style={{ display: "flex" }}>
                        {props.user.email}
                        <button className="btn btn-sm float-right"
                                style={{ marginLeft: "auto" }}
                                onClick={onEditButtonClick}>
                            <i className="fa fa-pencil"/>
                        </button>
                    </div>
                    :
                    <div style={{ display: "flex" }}>
                        <input type="text"
                               value={email}
                               onChange={e => setEmail(e.target.value)}/>
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

export default EmailCell;
