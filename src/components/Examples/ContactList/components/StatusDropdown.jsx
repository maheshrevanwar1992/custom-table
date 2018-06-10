import React from 'react'
import { STATUS } from '../ConstactList.constants.js';
import Dropdown from '../../../Dropdown/Dropdown.jsx';

const getStatus = () => {

    return Object.keys(STATUS).map((key) => ({
        id: STATUS[key],
        label: STATUS[key]
    }));
};

const StatusDropdown = ({ value, onChange }) => (
    <Dropdown value={value} values={getStatus()}
        onChange={onChange} placeholder='Select' />
);


export default StatusDropdown;