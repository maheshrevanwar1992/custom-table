import React from 'react';
import TableHeader from './TableHeader';
import './CustomTable.css';

export default class CustomTable extends React.PureComponent {

    render() {
        return (
            <div className='custom-table-wrapper'>
                {
                    React.Children.map(this.props.children, (child) => {
                        if (child.type === TableHeader) {
                            return <TableHeader>{child.props.children}</TableHeader>
                        }
                        return child;
                    })
                }
            </div>
        );
    }
};