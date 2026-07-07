import { useState } from 'react';
import useFriends from '../hooks/useFriends';
import useMessages from '../hooks/useMessages';
import apiClient from '../api/client';

const Messages = () => {

    const [selectedFriend, setSelectedFriend] = useState('')
    const [newMessage, setNewMessage] = useState('');
    const { friends } = useFriends();
    const { messages } = useMessages(selectedFriend);

    return (
        <div>
            <div>
                <h2>My Friends</h2>
                { friends.map((friend) => (
                    <div
                        key={friend.id}
                        onClick={() => setSelectedFriend(friend.addresseeId)}
                    >
                        <p>{friend.requesterId}</p>
                    </div>
                ))}

            </div>

            <div>
                <h2>Chat</h2>
                { messages.map((message) => (
                    <p key={message.id}>{message.content}</p>
                ))}
                <input value={newMessage} onChange={e => setNewMessage(e.target.value)}/>
                <button onClick={() => apiClient.post(`/messages/${selectedFriend}`, {content: newMessage})}>Send</button>
            </div>
        </div>
    );
};

export default Messages;