import { ChangeEventHandler, InputHTMLAttributes } from 'react';
import PropTypes from 'prop-types';
import styles from './chat-room.module.css';
import { ChatMessage } from './chat-message';
import { ChatMessageData } from '../../constants/interfaces';

export const ChatRoom = ({
  handleInputChange,
  handleSend,
  textInput,
  messages,
}: ChatRoomProps) => {
  return (
    <div id={styles.chat}>
      Chat Room
      <section id={styles.messages}>
        {messages.map((messageData, i) => (
          <ChatMessage key={i} {...messageData} />
        ))}
      </section>
      <section id={styles['text-input']}>
        <input
          type="text"
          multiple={true}
          value={textInput}
          onChange={handleInputChange}
        ></input>
        <button onClick={handleSend}>Send</button>
      </section>
    </div>
  );
};

export interface ChatRoomProps extends InputHTMLAttributes<HTMLInputElement> {
  handleInputChange: ChangeEventHandler;
  handleSend: () => void;
  textInput: string;
  messages: ChatMessageData[];
}

ChatRoom.propTypes = {
  handleInputChange: PropTypes.func.isRequired,
  handleSend: PropTypes.func.isRequired,
  textInput: PropTypes.string.isRequired,
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      sender: PropTypes.string,
      text: PropTypes.string.isRequired,
    }),
  ),
};
