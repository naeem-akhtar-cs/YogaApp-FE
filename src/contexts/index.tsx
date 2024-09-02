import { useContext } from 'react';
import { GlobalContext } from './authContext';

export const useGlobalContext = () => useContext(GlobalContext)
