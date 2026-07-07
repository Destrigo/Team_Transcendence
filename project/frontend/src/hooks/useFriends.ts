 import { useState, useEffect } from 'react';
 import apiClient from '../api/client';

 const useFriends = () => {
    const [friends, setFriends] = useState<any>([]);
    const [pendingRequests, setPendingRequests] = useState<any>([]);

    useEffect(() => {
        apiClient.get('/friends')
            .then(response => {
                setFriends(response.data);
            })
        apiClient.get('/friends/requests')
            .then(response => {
                setPendingRequests(response.data);
            });
    },  []);
    
    return { friends, pendingRequests };
}

export default useFriends