import React from 'react';

// keeps track of app state
export default React.createContext({
    user: {},
    loginUser: (credentials) => {},
    logoutUser: () => {},
    isLoggedIn: () => {},
    getUser: () => {},
    getID: () => {},
    id: {}
});