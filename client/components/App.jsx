import React from 'react';
import ListPageContainer from './ListPageContainer';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <ListPageContainer params={{ id: '7' }}/>
            </div>
        );
    }
}
