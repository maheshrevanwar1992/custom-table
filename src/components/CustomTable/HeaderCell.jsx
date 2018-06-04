import React from 'react';

export default class HeaderCell extends React.PureComponent {

    render() {
        return (
            <div className='column-title cell'>{this.props.children}</div>
        );
    }
}