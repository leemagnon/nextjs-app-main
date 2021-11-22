import { useState, useMemo, useContext, createContext } from 'react';

type ITokenStateContext = {
    token: string, 
    setToken: React.Dispatch<React.SetStateAction<string>>
};

export const TokenStateContext = createContext<ITokenStateContext>({token: '', setToken: () => null});

export const TokenProvider = ({children}) => {
    const [token, setToken] = useState('');
    const value = useMemo(() => ({token, setToken}), [token]);

    return (
        <TokenStateContext.Provider value={value}>
            {children}
        </TokenStateContext.Provider>
    )
}

export const useToken = () => useContext(TokenStateContext);