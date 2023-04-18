import { PrettyChatWindow } from "react-chat-engine-pretty";

const ChatsPage = (props) => {
  return (
    <div style={{height : '100vh'}}>
      <PrettyChatWindow
        projectId={'abf78080-37e4-42df-8e91-771df286c8e8'}
        username={props.user.username}
        secret={props.user.secret}
        style={{height:'100%'}}
      />
    </div>
  );
};

export default ChatsPage;