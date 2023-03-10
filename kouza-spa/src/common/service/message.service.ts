import messages from '../../assets/message/message.json';
import { KouzaMessage, KouzaMessages } from '../../interfaces/common/common';

export const getMessage = (
  key: keyof KouzaMessages,
  ...args: string[]
): KouzaMessage => {
  const kouzaMessages = messages as KouzaMessages;

  const error = kouzaMessages[key];

  args.forEach((arg, index) => {
    const regex = new RegExp(`\\{${index}\\}`, 'g');
    error.message = error.message.replace(regex, arg);
  });

  return error;
};
