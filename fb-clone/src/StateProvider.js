import React, { createContext, useContext, useReducer } from 'react';

// preparing data-layer
export const StateContext = createContext();

// higher order comp to wrap the app
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// use this hook to pull sth from data-layer
export const useStateValue = () => useContext(StateContext);