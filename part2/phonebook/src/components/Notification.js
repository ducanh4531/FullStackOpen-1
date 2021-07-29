const Notification = ({ notification, setNotification }) => {
  if (notification === "") {
    return <></>;
  }
  setTimeout(() => {
    setNotification("");
  }, 3000);
  
  return <p className="error">{notification}</p>;
};

export default Notification;
