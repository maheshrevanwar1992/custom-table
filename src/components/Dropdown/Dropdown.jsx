import React from 'react';
import './Dropdown.css';

export default class Dropdown extends React.PureComponent {


    render() {
        const { values, value, onChange } = this.props;
        return (
            <div className='drop-down'>
                <select value={value} onChange={onChange}>
                    {
                        values.map((option) => {
                            return <option value={option.id}>{option.label}</option>
                        })
                    }
                </select>
            </div>
        )
    }
}