import useLeaderboard  from '../hooks/useLeaderboard';

const Leaderboard = () => {
    const { data, loading } = useLeaderboard();

    if (loading) return <p>loading...</p>;

    return (
        <div>
            <h1>Leaderboard</h1>
            { data.map((user, index) => (
                <div key={user.id}>
                    <p>{user.username}</p>
                    <p> Rank {index + 1} </p>
                    <p> ${Number(user.totalValue).toFixed(2)} </p>
                </div>
            ))}
        </div>
    )
}

export default Leaderboard;