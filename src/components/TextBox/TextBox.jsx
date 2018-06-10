import React from 'react';
import './TextBox.css';

export default class TextBox extends React.PureComponent {

    static defaultProps = {
        onChange: () => null,
        onBlur: () => null,
        value: ''
    }

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            value: props.value === undefined ? '' : props.value
        }
    }

    openEditMode = () => {
        this.setState({
            editMode: true
        });
    };

    closeEditMode = () => {
        if (this.state.editMode) {
            this.setState({
                editMode: false
            });
        }
    };

    handleOnChange = (e) => {
        this.setState({
            value: e.target.value
        });
        this.props.onChange(e.target.value);
    };

    handleOnBlur = () => {
        this.props.onBlur(this.state.value);
        this.closeEditMode();
    };

    componentDidUpdate() {
        this.setFocus();
    }

    setFocus = () => {
        if (this.textInput) {
            this.textInput.focus();
        }
    }

    render() {
        const { value, editMode } = this.state;
        return (
            <div className='textbox' onClick={this.openEditMode}>
                {
                    editMode ?
                        (<div className='input-field'>
                            <input ref={(ref) => this.textInput = ref} value={value} onChange={this.handleOnChange} onBlur={this.handleOnBlur} />
                        </div>)
                        :
                        (<div className='text'>{value}</div>)
                }
            </div>
        );
    }
}