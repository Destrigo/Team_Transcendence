import { useState, useEffect } from 'react';
import apiClient from '../api/client';

const useLeaderboard = () => {
    const [data, setData] = useState<any>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        apiClient.get('/leaderboard')
            .then(response => {
                setData(response.data);
                setLoading(false);
            });
    },  []);

    return { data, loading };
};

export default useLeaderboard;
