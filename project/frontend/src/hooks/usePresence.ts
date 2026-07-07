import { useEffect } from 'react'
import { io } from "socket.io-client"

const usePresence = () => {

    useEffect (() => {
        const socket = io('http://localhost:4000',  {
            query: { userId: 'placeholder-user-id' }
        });
    
        return () => { socket.disconnect(); };

    }, []); 
};

export default usePresence;