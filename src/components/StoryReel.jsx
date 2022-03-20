import React from 'react'
import Story from './Story'
import './StoryReel.css'
import img from '../futuristic_land.jpg'

const StoryReel = () => {
  return (
    <div className="storyReel">
        <Story 
            image="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg?20210422121136"
            profileSrc="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg?20210422121136"
            title="Stark"
        />
        <Story 
            image="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg?20210422121136"
            profileSrc="src\facebook.svg"
            title="Stark"
        />
        <Story 
            image="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg?20210422121136" 
            profileSrc="src\facebook.svg"
            title="Stark"
        />
        <Story 
            image="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg?20210422121136" 
            profileSrc="src\facebook.svg"
            title="Stark"
        />
        <Story 
            image="https://upload.wikimedia.org/wikipedia/en/0/0d/Avengers_Endgame_poster.jpg?20210422121136" 
            profileSrc="src\facebook.svg"
            title="Stark"
        />
    </div>
  )
}

export default StoryReel