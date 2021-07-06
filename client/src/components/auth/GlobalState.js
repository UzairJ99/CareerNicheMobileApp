import React from 'react';
import Context from './context';

const GlobalState = (props) => {
  // state for holding the currently authenticated user
  const [user, setUser] = React.useState(null);
  const [id, setID] = React.useState(null);
  const [loaded, setLoaded] = React.useState(false);

  /**
   * Sets the state of the app to have an authenticated user.
   * @param {string} email user email
   */
  const loginUser = async (email, userId) => {
    setUser(email);
    setID(userId);
  }

  const logoutUser = () => {
    setUser(null);
    console.log('user logged out.');
  }

  /**
   * Get user information
   * @returns {string} user email
   */
  const getUser = () => {
    return user;
  }

  /**
   * Get user ID
   * @returns {string}
   */
  const getID = () => {
    return id;
  }

  /**
   * Checks if there's a user logged in currently.
   * @returns {boolean}
   */
  const isLoggedIn = () => {
    return user ? true : false;
  }

  return (
    <Context.Provider
      value={{
        user: user,
        loginUser: loginUser,
        logoutUser: logoutUser,
        isLoggedIn: isLoggedIn,
        getUser: getUser,
        getID: getID,
        id: id
      }}
    >
      {props.children}
    </Context.Provider>
  )
}

export default GlobalState;