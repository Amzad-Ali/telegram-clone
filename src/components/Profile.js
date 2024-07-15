import * as React from 'react';
import { Box, Typography, Avatar, Divider,ListItemButton,ListItemIcon,ListItemText} from '@mui/material';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import PersonIcon from '@mui/icons-material/Person';
import CallIcon from '@mui/icons-material/Call';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import TryIcon from '@mui/icons-material/Try';
import SettingsIcon from '@mui/icons-material/Settings';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import HelpIcon from '@mui/icons-material/Help';
import { useEffect,useRef } from 'react';


export default function Profile({ onClose }) {
    const profileRef = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
          if (profileRef.current && !profileRef.current.contains(event.target)) {
            onClose();
          }
        }
    
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
          document.removeEventListener('mousedown', handleClickOutside);
        };
      }, [onClose]);

    return (
        <Box 
        ref={profileRef}
        sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '360px',
            height: '100%',
            bgcolor: 'background.paper',
            zIndex: 1300,
            boxShadow: 3,
            padding: 2,
        }}>
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom: 2 }}>
                <Avatar alt="User Name" src="/static/images/avatar/1.jpg" sx={{ width: 80, height: 80, marginBottom: 2 }} />
                <Typography variant="h6">Amzad Ali</Typography>
                <Typography variant="body2" color="text.secondary">+91 9110902423</Typography>
            </Box>
            <Divider sx={{ marginY: 2 }} />
            {/* <Typography variant="body1">Additional profile information goes here...</Typography> */}

                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon />
                    </ListItemIcon>
                    <ListItemText primary="My Profile" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <SupervisorAccountIcon />
                    </ListItemIcon>
                    <ListItemText primary="New Group" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <PersonIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contacts" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <CallIcon />
                    </ListItemIcon>
                    <ListItemText primary="Calls" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <PersonPinIcon/>
                    </ListItemIcon>
                    <ListItemText primary="People Nearby" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <TryIcon />
                    </ListItemIcon>
                    <ListItemText primary="Saved messages" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText primary="Settings" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <PersonAddIcon />
                    </ListItemIcon>
                    <ListItemText primary="Invite Friends" />
                </ListItemButton>

                <ListItemButton>
                    <ListItemIcon>
                        <HelpIcon />
                    </ListItemIcon>
                    <ListItemText primary="Telegram Features" />
                </ListItemButton>
        </Box>
    );
}
