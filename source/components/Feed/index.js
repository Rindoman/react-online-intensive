import React, { Component } from 'react';

// Components
import { Composer, StatusBar, Post } from 'components';

// Instruments
import Styles from './styles.m.css';

export class Feed extends Component {
    render () {
        const {
            avatar,
            currentUserFirstName,
        } = this.props;

        return (
            <section className = { Styles.feed }>
                <StatusBar { ...this.props } />
                <Composer
                    avatar = { avatar }
                    currentUserFirstName = { currentUserFirstName }
                />
                <Post { ...this.props } />
            </section>
        );
    }
}
