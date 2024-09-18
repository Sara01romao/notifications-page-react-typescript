import { Notification } from "../types/notification";
import './styles.css';

type NotificationProps ={
    notifications: Notification[];
}


export const NotificationComp = ({ notifications }:NotificationProps) => {


  return (
    <div className="notification-container">

       {notifications.map(item => (
          <div className="msg-container">
            
            <div  className={`msgTitle ${item.status === 'unseen' ? 'unseen' : ''}`} >
                <img className="imgprofile" width={45} height={45} src="https://images.unsplash.com/photo-1726251654985-b415579cd295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                
                <p><span className="name">Rizky Hasanuddi </span> <span>sent you a private message</span></p>
                {item.status === 'unseen' ? (<span className="unseen-detalhe"></span>) : ''}
              </div>

              <div className="txtMensagem">
                <p>
                  Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.
                </p>
              </div>

          </div>
       ))}

        
    </div>
  );
};


