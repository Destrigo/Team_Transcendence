import apiClient from "../api/client";
import useFriends from "../hooks/useFriends";

const Friends = () => {
    const { friends, pendingRequests } = useFriends();

    return (
        <div>
            <h1>My Friends</h1>
            {friends.map(friendship => (
                <div key={friendship.id}>
                    <p>{friendship.requesterId}</p>
                </div>
            ))}

            <h2>Pending Requests</h2>
            {pendingRequests.map(request => (
                <div key={request.id}>
                    <p>{request.requesterId}</p>
                    <button onClick={() => apiClient.put(`/friends/${request.id}/accept`)}> 
                        Accept
                    </button>
                    <button onClick={() => apiClient.put(`/friends/${request.id}/decline`)}>
                        Decline
                    </button>
                </div>
            ))}
        </div>
    );
}

export default Friends;