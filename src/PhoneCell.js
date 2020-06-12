import React, {useState} from 'react';

function PhoneCell(props) {
    const [phone, setPhone] = useState(props.user.phone);
    const [editModeEnabled, setEditModeEnabled] = useState(false);

    const onEditButtonClick = () => {
        setPhone(props.user.phone);
        setEditModeEnabled(true);
    };

    const onCancelButtonClick = () => {
        setEditModeEnabled(false);
    };

    const onSaveButtonClick = () => {
        props.saveEdited(props.user.id, {...props.user, phone: phone});
        setEditModeEnabled(false);
    };

    return (
        <td>
            {
                (!editModeEnabled)
                    ?
                    <div style={{ display: "flex" }}>
                        {props.user.phone}
                        <button className="btn btn-sm float-right"
                                style={{ marginLeft: "auto" }}
                                onClick={onEditButtonClick}>
                            <i className="fa fa-pencil"/>
                        </button>
                    </div>
                    :
                    <div style={{ display: "flex" }}>
                        <input type="text"
                               value={phone}
                               onChange={e => setPhone(e.target.value)}/>
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

export default PhoneCell;
