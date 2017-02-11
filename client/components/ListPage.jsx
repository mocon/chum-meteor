import React from 'react';

export default class ListPage extends React.Component {
    render() {
        return (
            <p>ListPage component goes here</p>
        )
    }
}

ListPage.propTypes = {
    list: React.PropTypes.object,
    todos: React.PropTypes.array,
    loading: React.PropTypes.bool,
    listExists: React.PropTypes.bool,
};
