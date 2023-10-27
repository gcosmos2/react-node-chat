import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from "react-chat-engine-advanced";

const ChatsPage = (props) => {
    const ChatProps = useMultiChatLogic("1b465d00-838c-40e1-b13b-c64bcc38930e", props.user.username, props.user.secret);

    return (
        <div style={{ height: '100vh', backgroundColor: 'black' }}>
            <MultiChatSocket {...ChatProps} />
            <MultiChatWindow {...ChatProps} style={{ height: "100%", backgroundColor: 'black' }} />
        </div>
    );
}

export default ChatsPage;
