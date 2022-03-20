import { InsertEmoticon, PhotoLibrary, Videocam } from '@mui/icons-material'
import { Avatar } from '@mui/material'
import React, { useState } from 'react'
import db from '../firebase'
import './MessageSender.css'
import { useStateValue } from './StateProvider'
import firebase from 'firebase/compat/app'

const MessageSender = () => {
    const [input, setInput] =useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [{ user }, dispatch] = useStateValue();

    const handleSubmit = (e) => {
        e.preventDefault();
        //db stuff
        db.collection('posts').add({
            message: input,
            timestamp: firebase.firestore.FieldValue.
            serverTimestamp(),
            profilePic: user?.photoURL,
            username: user?.displayName,
            image: imageUrl,
        })

        setInput('');
        setImageUrl('');
    }
  return (
    <div className="messageSender">
        <div className="messageSender_top">
            <Avatar src={user?.photoURL} />
            <form>
                <input type="text" 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="messageSender_input"
                    placeholder= {`What's on your mind ${user?.displayName}`}
                />
                <input type="text"
                    value={imageUrl}
                    onChange={(e) => setImageUrl(e.target.value)}
                    placeholder="Image Url (Optional)" />
                <button onClick={handleSubmit} type="submit">
                    Hidden Submit
                </button>
            </form>
        </div>

        <div className="messageSender_bottom">
            <div className="messageSender_option">
                <Videocam style={{ color: "red" }} />
                <h3>Live Video</h3>
            </div>

            <div className="messageSender_option">
                <PhotoLibrary style={{ color: "green" }} />
                <h3>Photo/Video</h3>
            </div>

            <div className="messageSender_option">
                <InsertEmoticon style={{ color: "orange" }} />
                <h3>Feeling/Activity</h3>
            </div>
        </div>

    </div>
  )
}

export default MessageSender