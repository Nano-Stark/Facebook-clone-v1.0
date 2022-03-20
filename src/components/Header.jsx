import { Add, ExpandMore, Flag, Forum, Home, NotificationsActive, Search, 
  StorefrontOutlined, 
  SubscriptionsOutlined, 
  SupervisedUserCircle } from '@mui/icons-material'
import { Avatar, IconButton } from '@mui/material'
import React from 'react'
import './Header.css'
import { useStateValue } from './StateProvider'

const Header = () => {

  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="header">
        <div className="header_left">
          <img src="src\facebook.svg"
               alt="facebook-logo" 
           />
           <div className="header_input">
              <Search />
              <input placeholder="Search..." type="text" name="" />
           </div>
        </div>

        <div className="header_center">
            <div className="header_option header_option--active">
              <Home fontSize="large" />
            </div>
            <div className="header_option">
              <Flag fontSize="large" />
            </div>
            <div className="header_option">
              <SubscriptionsOutlined fontSize="large" />
            </div>
            <div className="header_option">
              <StorefrontOutlined fontSize="large" />
            </div>
            <div className="header_option">
              <SupervisedUserCircle fontSize="large" />
            </div>
        </div>

        <div className="header_right">
            <div className="header_info">
            {/* sx={{ width: 23, height:24 }} */}
              <Avatar src={user?.photoURL} />
              <h4>{user?.displayName}</h4>
            </div>
            <div className="header_icons">
            <IconButton>
              <Add />
            </IconButton>
            <IconButton>
              <Forum />
            </IconButton>
            <IconButton>
              <NotificationsActive />
            </IconButton>
            <IconButton>
              <ExpandMore />
            </IconButton>
            </div>
        </div>

    </div>
  )
}

export default Header