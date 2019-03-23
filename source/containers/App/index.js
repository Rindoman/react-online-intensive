// Core
import React from 'react';
import { hot } from 'react-hot-loader';

// Components
import { Provider } from 'components/HOC/withProfile';
import { Feed } from 'components/Feed';

// Instruments
import avatar from 'theme/assets/lisa';

const options = {
    avatar,
    currentUserFirstName: 'Lisa',
    currentUserLastName:  'Simpson',
};

export const App = hot(module)(() => {
    return (
        <Provider value = { options }>
            <Feed />
        </Provider>
    );
});
