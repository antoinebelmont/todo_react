import React, {createContext, useReducer} from 'react';

export default function InitRedux(reducer, initialState) {
    const StateContext = createContext(null);
    const DispatchContext = createContext(null);

    function Provider(props) {
        const [appState, dispatch] = useReducer(reducer, initialState);
        return (
            <StateContext.Provider value={appState}>
                <DispatchContext.Provider value={dispatch}>
                    {
                    props.children
                } </DispatchContext.Provider>
            </StateContext.Provider>
        )
    }
}
