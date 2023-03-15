import React from 'react';
import styles from './chat-room.module.css';

export const ChatRoom = () => {
  return (
    <div id={styles.chat}>
      Chat Room
      <section id={styles.messages}></section>
      <section id={styles['text-input']}>
        <input type="text" multiple={true}></input>
        <button>Send</button>
      </section>
    </div>
  );
};
