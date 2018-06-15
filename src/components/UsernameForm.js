import React from 'react';

class UsernameForm extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            username: ''
        }

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange(e) {
        this.state({
            username: e.target.value,
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.username);
    }

    render() {
        return 
            <div>
                <form onSubmit={this.onSubmit}>
                    <input type='text' placeholder='Username fam' onChange={this.onChange}/>
                    <input type='submit' />
                </form>
            </div>
    }
}

export default UsernameForm;