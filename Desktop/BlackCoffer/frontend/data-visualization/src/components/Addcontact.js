import React from "react";

class Addcontact extends React.Component {
    render() {
        return (
            <div className="ui main">
                <h2>add contact</h2> 
                <h2>Add contact</h2> 
                
                <form className="ui form">
                    <div className="field">
                        <label>Name</label>
                        <input type="text" name="name" placeholder="Name" />
                    </div>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <button className="ui button blue">add</button>
                </form>
            </div>
        )
    }
}

export default Addcontact;
     