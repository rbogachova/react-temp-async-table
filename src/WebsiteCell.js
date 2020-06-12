import React, {useState} from 'react';

function WebsiteCell(props) {
    const [website, setWebsite] = useState(props.user.website);
    const [editModeEnabled, setEditModeEnabled] = useState(false);

    const onEditButtonClick = () => {
        setWebsite(props.user.website);
        setEditModeEnabled(true);
    };

    const onCancelButtonClick = () => {
        setEditModeEnabled(false);
    };

    const onSaveButtonClick = () => {
        props.saveEdited(props.user.id, {...props.user, website: website});
        setEditModeEnabled(false);
    };

    return (
        <td>
            {
                (!editModeEnabled)
                    ?
                    <div style={{ display: "flex" }}>
                        <a href={props.user.website}>{props.user.website}</a>
                        <button className="btn btn-sm float-right"
                                style={{ marginLeft: "auto" }}
                                onClick={onEditButtonClick}>
                            <i className="fa fa-pencil"/>
                        </button>
                    </div>
                    :
                    <div style={{ display: "flex" }}>
                        <input type="text"
                               value={website}
                               onChange={e => setWebsite(e.target.value)}/>
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

export default WebsiteCell;
