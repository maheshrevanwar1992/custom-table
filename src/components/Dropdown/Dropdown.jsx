import React from 'react';
import './Dropdown.css';

export default class Dropdown extends React.PureComponent {


    onChange = (e) => {
        this.props.onChange(e.target.value);
    }
    render() {
        const { values, value, placeholder } = this.props;
        return (
            <div className='drop-down'>
                <select onChange={this.onChange}>
                    {
                        placeholder &&
                        <option value={null} selected={value === null}>{placeholder}</option>
                    }
                    {
                        values.map((option) => {
                            return <option key={option.id} value={option.id} selected={value === option.id}>{option.label}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}