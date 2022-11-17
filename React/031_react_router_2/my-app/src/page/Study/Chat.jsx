import React from 'react';
import { useLocation, useParams } from 'react-router-dom';

function Chat() {
  const param = useParams();
  const location = useLocation();
  console.log(param);
  console.log(location);

  return <div>Chat</div>;
}

export default Chat;
