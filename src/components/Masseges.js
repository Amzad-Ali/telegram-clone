import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Typography ,Box,TextField,Button} from '@mui/material';

const Masseges = ({ selectedChat }) => {
  const [messages, setMessages] = useState([]);
  const [sendMessages, setSendMessage] = useState('');
  const [loading, setLoading] = useState(false);
    console.log('selectedChat===>',selectedChat);
    const handleSend = (e) => {
        setSendMessage(e.target.value);
      };
      const handleClick = () => {
        console.log(sendMessages);
      }
  useEffect(() => {
    const fetchMessages = async () => {
      try {
        setLoading(true);
        // Replace with your API URL to fetch messages based on chat ID
        const response = await axios.get(`https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${selectedChat}`);
        setMessages(response.data.data); // Assuming data is in response.data.data
        setLoading(false);
      } catch (error) {
        console.error('Error fetching messages:', error);
        setLoading(false);
      }
    };

    if (selectedChat) {
      fetchMessages();
    }
  }, [selectedChat]);

  return (
// {/* <Box sx={{ flexGrow: 1, padding: '20px', borderLeft: '1px solid #ccc', width: '80%', overflowY: 'auto', maxHeight: '100vh' }}>
// {loading && <Typography variant="body1">Loading messages...</Typography>}
// {!loading && messages.length === 0 && (
//   <Typography variant="body1">No messages found.</Typography>
// )}
// {!loading && messages.length > 0 && (
//   <div>
//     {messages.map((message, index) => (
//       <Box
//         key={index}
//         sx={{
//           display: 'flex',
//           flexDirection: 'row',
//           justifyContent: message.sender_id === 1 ? 'flex-end' : 'flex-start',
//           marginBottom: '10px',
//         }}
//       >
//         <Box
//           sx={{
//             backgroundColor: message.sender_id === 1 ? '#DCF8C6' : '#f0f0f0',
//             borderRadius: '8px',
//             padding: '10px 15px',
//             maxWidth: '70%',
//             wordWrap: 'break-word',
//             alignSelf: 'flex-end',
//             position: 'relative',
//             paddingBottom: '25px', // Add padding to the bottom to prevent overlap
//           }}
//         >
//           <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
//             {message.message}
//           </Typography>
//           <Typography
//             variant="caption"
//             color="text.secondary"
//             sx={{
//               position: 'absolute',
//               bottom: '5px',
//               right: '10px',
//             }}
//           >
//             {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
//           </Typography>
//         </Box>
//       </Box>
//     ))}
//   </div>
// )}
// </Box> */}

<Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
<Box sx={{ flexGrow: 1, padding: '20px', borderLeft: '1px solid #ccc', overflowY: 'auto', maxHeight: 'calc(100vh - 80px)' }}>
  {loading && <Typography variant="body1">Loading messages...</Typography>}
  {!loading && messages.length === 0 && (
    <Typography variant="body1">No messages found.</Typography>
  )}
  {!loading && messages.length > 0 && (
    <div>
      {messages.map((message, index) => (
        <Box
          key={index}
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: message.sender_id === 1 ? 'flex-end' : 'flex-start',
            marginBottom: '10px',
          }}
        >
          <Box
            sx={{
              backgroundColor: message.sender_id === 1 ? '#DCF8C6' : '#f0f0f0',
              borderRadius: '8px',
              padding: '10px 15px',
              maxWidth: '70%',
              wordWrap: 'break-word',
              alignSelf: 'flex-end',
              position: 'relative',
              paddingBottom: '25px', // Add padding to the bottom to prevent overlap
            }}
          >
            <Typography variant="body1" sx={{ whiteSpace: 'pre-line' }}>
              {message.message}
            </Typography>
            <Typography
              variant="caption"
              color="text.secondary"
              sx={{
                position: 'absolute',
                bottom: '5px',
                right: '10px',
              }}
            >
              {new Date(message.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </Typography>
          </Box>
        </Box>
      ))}
    </div>
  )}
</Box>
<Box sx={{ display: 'flex', padding: '10px', borderTop: '1px solid #ccc' }}>
  <TextField
    fullWidth
    variant="outlined"
    value={sendMessages}
    onChange={handleSend}
    // onKeyDown={(e) => e.key === 'Enter' && handleSend()}
    placeholder="Type a message"
  />
  <Button  variant="contained" sx={{ marginLeft: '10px' }} onClick={handleClick}>
    Send
  </Button>
</Box>
</Box>
  );
};

export default Masseges;
