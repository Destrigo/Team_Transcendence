import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import apiClient from '../api/client';

const useMessages = (otherUserId: string) => {
    const [messages, setMessages] = useState<any>([]);
    
    useEffect(() => {
        apiClient.get(`/messages/${otherUserId}`)
            .then(response => setMessages(response.data));

        const interval = setInterval(() => {
            apiClient.get(`/messages/${otherUserId}`)
                .then(response => setMessages(response.data))
        }, 3000);

        const socket = io('http://localhost:4000');
        socket.on('new_message', (message) => {
            setMessages(prev => [...prev, message]);
        })

        return () => {
            clearInterval(interval);
            socket.disconnect();
        };
    }, [otherUserId]);
    
    return { messages };
}

export default useMessages;