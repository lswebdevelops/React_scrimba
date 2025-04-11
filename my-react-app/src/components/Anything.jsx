import React from "react";

export default function App() {
  const [messages, setMessages] = React.useState(["a", "b", "c"]);

  const messageNumber =
    messages.length === 0 ? (
      <p>You are all caught up!</p>
    ) : messages.length === 1 ? (
      <p>You have 1 unread message.</p>
    ) : (
      <p>You have {messages.length} unread messages.</p>
    );

//     let message;
// if (messages.length === 0) {
//     message = <p>"0"</p>;
// } else if (messages.length === 1) {
//     message = <p>"1"</p>;
// } else {
//     message = <p>{messages.length}</p>;
// }

  return <div>{messageNumber}</div>;
}
