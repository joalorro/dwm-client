export const ChatMessage = ({ text }: ChatMessageProps) => {
  return <li>{text}</li>;
};

export interface ChatMessageProps {
  sender?: string;
  text: string;
}
