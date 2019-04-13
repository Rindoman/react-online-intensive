import React, { Component } from 'react';
import moment from 'moment';

// Components
import { Composer, StatusBar, Post } from 'components';
import { Consumer } from 'components/HOC/withProfile';
import { Spinner } from 'components/Spinner';

// Instruments
import Styles from './styles.m.css';
import { getUniqueID, delay } from 'Instruments';

export class Feed extends Component {
    constructor () {
        super();

        this._createPost = this._createPost.bind(this);
        this._setPostsFetchingState = this._setPostsFetchingState.bind(this);
        this._likePost = this._likePost.bind(this);
    }

    state = {
        posts: [
            {
                id:      '123',
                comment: 'Hi there',
                created: 1526825076849,
                likes:   [],
            },
            {
                id:      '456',
                comment: 'Hello',
                created: 2526825076856,
                likes:   [],
            },
        ],
        isPostsFetching: false,
    };

    _setPostsFetchingState (state) {
        this.setState({
            isPostsFetching: state,
        });
    }

    async _createPost (comment) {
        this._setPostsFetchingState(true);

        const post = {
            id:      getUniqueID(),
            created: moment().utc(),
            comment,
            likes:   [],
        };

        await delay(1200);

        this.setState(({ posts }) => ({
            posts:           [ post, ...posts ],
            isPostsFetching: false,
        }));
    }

    async _likePost (id) {
        const { currentUserFirstName, currentUserLastName } = this.props;
        this._setPostsFetchingState(true);

        await delay(1200);

        const newPosts = this.state.posts.map((post) => {
            if (post.id === id) {
                return {
                    ...post,
                    likes: [
                        {
                            id:        getUniqueID(),
                            firstName: currentUserFirstName,
                            lastName:  currentUserLastName,
                        },
                    ],
                };
            }

            return post;
        });

        this.setState({
            posts:           newPosts,
            isPostsFetching: false,
        });
    }

    render () {
        const { posts, isPostsFetching } = this.state;

        const postsJSX = posts.map((post) => {
            return (
                <Post
                    key = { post.id }
                    { ...post }
                    _likePost = { this._likePost }
                />
            );
        });

        return (
            <Consumer>
                {(context) => (
                    <section className = { Styles.feed }>
                        <Spinner isSpinning = { isPostsFetching } />
                        <StatusBar { ...context } />
                        <Composer
                            _createPost = { this._createPost }
                            { ...context }
                        />
                        { postsJSX }
                    </section>
                )}
            </Consumer>
        );
    }
}
