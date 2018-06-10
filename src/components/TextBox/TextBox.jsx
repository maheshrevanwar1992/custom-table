import React from 'react';
import './TextBox.css';

export default class TextBox extends React.PureComponent {

    static defaultProps = {
        onChange: () => null,
        onBlur: () => null,
        value: '',
        isValid: () => true
    }

    constructor(props) {
        super(props);
        this.state = {
            editMode: false,
            value: props.value === undefined ? '' : props.value,
            showError: false
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
    };

    isValid = () => {
        const { value } = this.state;
        if (typeof (this.props.isValid) === 'function' && !this.props.isValid(value)) {
            this.setState({
                showError: true
            });
            return false;
        }
        this.setState({
            showError: false
        });
        return true;
    }

    handleOnBlur = () => {
        if (this.isValid()) {
            this.props.onBlur(this.state.value);
            this.closeEditMode();
        }
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
        const { value, editMode, showError } = this.state;
        return (
            <div className={`textbox ${showError ? 'error' : ''}`} onClick={this.openEditMode}>
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