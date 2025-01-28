// eslint-disable-next-line no-unused-vars
import { PrettyChatWindow } from 'react-chat-engine-pretty';

export function ChatPage() {
  return (
    <div style={{ height: '100vh', display: 'flex', flexDirection: 'column' }}>
      <PrettyChatWindow
        projectId="b75e5bd5-cd84-404c-b820-06feff8c98c0"
        username="adam"
        secret="pass1234"
        style={{ flex: 1 }}
      />
    </div>
  );
}

export default ChatPage;
