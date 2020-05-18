import React from 'react'

class BasicInfo extends React.Component {
    render() {
        return (
            <div>
                <p>Name: {this.props.name}</p>
                <p>Number: {this.props.number}</p>
                <p>Email: {this.props.email}</p>
                <p>DOB: {this.props.dob}</p>
            </div>
        )
    };
}

export default BasicInfo;