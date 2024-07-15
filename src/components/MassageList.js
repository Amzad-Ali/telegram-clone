import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import SearchIcon from '@mui/icons-material/Search';
import { ListItemSecondaryAction } from '@mui/material';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Masseges from './Masseges';
import Profile from './Profile';

export default function MassageList() {
  const [data, setData] = useState([]);
  const [selectedChat, setSelectedChat] = useState(null);
  const [showProfile, setShowProfile] = useState(false);

  console.log('data===>', data);
  async function fetchData() {
    try {
      const response = await axios.get('https://devapi.beyondchats.com/api/get_all_chats?page=1');
      setData(response.data.data.data);
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData();
  }, [])

  const handleChatClick = (chatId) => {
    setSelectedChat(chatId);
  };
  const toggleProfile = () => {
    setShowProfile(!showProfile);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <Box sx={{ width: '360px', flexShrink: 0 }}>
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }} onClick={toggleProfile}>
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit" component="div" sx={{ flexGrow: 1 }}>
                Telegram
              </Typography>
              <IconButton edge="end" color="inherit" aria-label="search" >
                <SearchIcon/>
              </IconButton>
            </Toolbar>
          </AppBar>
        </Box>
        {/* Left side: Chat list */}
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', flex: 1, overflowY: 'auto' }}>
          {data.map((messageData, index) => (
            <React.Fragment key={index}>
              <ListItem
                alignItems="flex-start"
                button
                selected={selectedChat === messageData.id}
                onClick={() => handleChatClick(messageData.id)}
              >
                <ListItemAvatar>
                  <Avatar alt={messageData.creator.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText
                  primary={messageData.creator.name}
                  secondary={`${messageData.msg_count} messages`}
                />
                <ListItemSecondaryAction>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                  >
                    {new Date(messageData.updated_at).toLocaleString()}
                  </Typography>
                </ListItemSecondaryAction>
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
          <Divider variant="inset" component="li" />
        </List>
      </Box>

      {/* Right side: Messages section */}
      <Masseges selectedChat={selectedChat} />
       {/* Profile Overlay */}
       {showProfile && <Profile onClose={toggleProfile} />}
    </Box>
  );
}
