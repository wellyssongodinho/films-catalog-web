import { AxiosRequestConfig, AxiosResponse } from 'axios';
import { createContext, useContext, useEffect, useState } from 'react';
import { api } from '../service/api';

const FILMS_STORAGE = '@challenge:films';

type Film = {
    id: string;
    title: string;
    description: string;
    producer: string,
    url: string,
    createdAt: string,
    updatedAt: string
}

type AppContextType = {
    films: Film[];
    handleFilms: (addFilms?: any) => Promise<void>;
};

const AppContextDefaultValues: AppContextType = {
    films: [],
    handleFilms: async (any) => {Promise<void>}
};

const AppContext = createContext<AppContextType>(AppContextDefaultValues);

export function useAppContext() {
    return useContext(AppContext);
}

type AppProviderProps = {
    children: React.ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
    const [films, setFilms] = useState<Film[]>([] as Film[]);

    useEffect(() => {
        async function getFilms () {
            console.log('getFilms');
            if (Object.keys(films).length === 0){
                const queryParams: AxiosRequestConfig = {
                    params: {limit: 10},
                };
                const response: AxiosResponse = await api.get('/films', queryParams);
                setFilms(response.data);
            }
        }
        getFilms();
    });

    const handleFilms = async (addFilms?: Film[]) => {
        console.log('handleFilms');
        try {
            if (addFilms === undefined) {
                const response: AxiosResponse = await api.post('/films/api');
                const jsonFilms = JSON.parse(response.data);
                setFilms(jsonFilms)
            }else {
                setFilms(addFilms);
            }
        } catch (error: any) {
            return error;
        }
    };
    
    return (
        <>
            <AppContext.Provider value={{films, handleFilms}}>
                {children}
            </AppContext.Provider>
        </>
    );
}