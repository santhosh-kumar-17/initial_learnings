import React from "react";

const Contactlist= (props)=>{
    console.log(props)
    const renderContactList = props.contacts.map((contacts)=>{
        return(
            <div className="item">
                <div className="content">
                    <div className="header">
                        <div>
                            {contacts.name} 
                        </div>
                        <div>{contacts.email}</div>
                    </div>
                    <i className="trash alternate outline icon"></i>
                </div>
            </div>
        )
    })

    
    return(
        <div className="ui celled list">
            {renderContactList}
        </div>
    )
}

export default Contactlist;