import { Box } from '@chakra-ui/react';
import axios from 'axios';
import React, { useEffect } from 'react';
import SideDrawer from '../components/miscellaneous/SideDrawer';
import MyChats from '../components/MyChats';
import { ChatState } from '../context/ChatProvider';
import ChatBox from './../components/ChatBox';
import { useState } from 'react';

const ChatPage = () => {
    const {user} = ChatState();
    const [fetchAgain, setFetchAgain] = useState(false);
    console.log(user);
    return (
        <div style={{ width: "100%" }}>
      {user && <SideDrawer />}
      <Box display="flex" justifyContent="space-between" w="100%" h="91.5vh" p="10px">
        {user && <MyChats  fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>}
        {user && (
          <ChatBox  fetchAgain={fetchAgain} setFetchAgain={setFetchAgain}/>
        )}
      </Box>
    </div>
    );
};

export default ChatPage;