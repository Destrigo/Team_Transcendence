import { useState, useEffect } from 'react';
import { io, Socket } from 'socket.io-client';
import apiClient from '../api/client';

const useMessages = (otherUserId: string) => {
    const [messages, setMessages] = useState<any[]>([]);
    const [socket, setSocket] = useState<Socket | null>(null);

    useEffect(() => {
        apiClient.get(`/messages/${otherUserId}`)
            .then(response => setMessages(response.data));

        const newSocket = io('http://localhost:4000', { query: { userId: 'placeholder-user-id' } });
        setSocket(newSocket);

        newSocket.on('new_message', (message) => {
            setMessages(prev => [...prev, message]);
        });

        return () => { newSocket.disconnect(); };
    }, [otherUserId]);

    const sendMessage = (content: string) => {
        if (socket) {
            socket.emit('send_message', { receiverId: otherUserId, content });
        }
    };

    return { messages, sendMessage };
};

export default useMessages;
