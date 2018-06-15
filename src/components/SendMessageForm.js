import React, { Component } from 'react';

class SendMessageForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            text: ''
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.onSubmit(this.state.text);
        this.setState({ text: '' }); // make sure we clear the text box after sending message
    }

    onChange(e) {
        this.setState({ text: e.target.value });

        // go to this function every time something changes
        if (this.props.onChange) {
            this.props.onChange()
        }
    }

    render() {

        const styles = {
            container: {
                padding: 20,
                borderTop: '1px #4C758F solid',
                marginBottom: 20,
            },
            form: {
                display: 'flex',
            },
            input: {
                color: 'inherit',
                background: 'none',
                outline: 'none',
                border: 'none',
                flex: 1,
                fontSize: 16,
            },
        }

        return (
            <div style={styles.container}>
                <div> 
                    <form onSubmit={this.onSubmit} style={styles.form}>
                        <input type='text' placeholder='Type message here..' onChange={this.onChange} value={this.state.text} style={styles.input}/>
                        <input type='submit' />
                    </form>
                </div>
            </div>
        );
    }
}

export default SendMessageForm;