import React, { Component } from 'react';

// Components
import { Composer, StatusBar, Post } from 'components';
import { Consumer } from 'components/HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

export class Feed extends Component {
    render () {
        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.feed }>
                        <StatusBar { ...context } />
                        <Composer { ...context } />
                        <Post { ...context } />
                    </section>
                )}
            </Consumer>
        );
    }
}
