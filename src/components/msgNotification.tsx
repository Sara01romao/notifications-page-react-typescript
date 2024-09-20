import { useEffect, useState } from "react";
import { Notification } from "../types/notification";
import './styles.css';

import postImage from '../assets/post2.png';
import { formatDistanceToNow } from "date-fns";


type NotificationProps ={
    notifications: Notification[];
}


export const NotificationComp = ({ notifications }:NotificationProps) => {
   
  const [totalNotification, setTotalNotification] = useState(0);

//formata data 
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true }); 
  };

  useEffect(() => {
    const total = notifications.reduce((acc, item) => {
      return item.status === 'unseen' ? acc + 1 : acc;
    }, 0);
    
    setTotalNotification(total);
  }, [notifications]);


  return (
    <div className="notification-container">

      <div className="header-notification">
        <div className="count-notification-container">
          <h2>Notifications</h2>
          <p className="count-notification">{totalNotification}</p>
        </div>

        <button className="btn-mark-all">Mark all as read</button>
      </div>

       {notifications.map(item => (
          <div className="msg-container" key={item.id}>
            
            <div  className={`msgTitle ${item.status === 'unseen' ? 'unseen' : ''}`} >
                
                <div className="txt-msgTitle-container">
                  <img className="imgprofile" width={45} height={45} src="https://images.unsplash.com/photo-1726251654985-b415579cd295?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyNXx8fGVufDB8fHx8fA%3D%3D" alt="" />
                  
                  <div className="txt-msgTitle">
                    <p><span className="name">{item.name} </span> <span>{item.reason}</span> {item.postName && (<span className="postName">{item.postName}</span>)}   {item.groupName &&(<span className="groupName">{item.groupName}</span>)}                   {item.status === 'unseen' && (<span className="unseen-detalhe"></span>) }
                    </p>
                    
                    <p className="data-notification">{formatDate(item.date)}</p>
                  </div>

                 
                </div>


                {item.img && (
                  <div>
                    <img className="postImg-commented" src={postImage} alt="Post Image" />
                  </div>
                )}
                
                
            </div>
             
             {item.text && (
                <div className="txtMensagem">
                  <p>
                    Hello, thanks for setting up the Chess Club. I’ve been a member for a few weeks now and I’m already having lots of fun and improving my game.
                  </p>
                </div>


             )  }
              

              

              
              

          </div>
       ))}

        
    </div>
  );
};


