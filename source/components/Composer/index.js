// Core
import React from 'react';

// Components
import { Consumer } from 'components/HOC/withProfile';

// Instruments
import Styles from './styles.m.css';

export const Composer = () => {
    return (
        <Consumer>
            {(context) => (
                <section className = { Styles.composer }>
                    <img src = { context.avatar } />
                    <form>
                        <textarea placeholder = { `What's on your mind, ${ context.currentUserFirstName }?` } />
                        <input type = 'submit' value = 'Post' />
                    </form>
                </section>
            )}
        </Consumer>
    );
};

