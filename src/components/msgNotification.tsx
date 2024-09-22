import { useEffect, useState } from "react";
import { Notification } from "../types/notification";
import './styles.css';


import { formatDistanceToNow } from "date-fns";


type NotificationProps ={
    notifications: Notification[];
}


export const NotificationComp = ({ notifications }:NotificationProps) => {
    
  const [dataNotification, setDataNotification] = useState<Notification[]>(notifications);
  const [totalNotification, setTotalNotification] = useState(0);

  const [openId, setOpenId] = useState<number | null>(null);

//formata data 
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return formatDistanceToNow(date, { addSuffix: true }); 
  };

  useEffect(() => {
    const total = dataNotification.reduce((acc, item) => {
      return item.status === 'unseen' ? acc + 1 : acc;
    }, 0);
    
    setTotalNotification(total);
  }, [dataNotification]);

  
  function handleView(id: number) {
    const updatedNotifications: Notification[] = dataNotification.map((notification) =>
      notification.id === id
        ? { ...notification, status: 'seen' } 
        : notification
    );
  
    setDataNotification(updatedNotifications); 
  }
  


  useEffect(() => {
    setDataNotification(notifications);
  }, [notifications]);


  const openMsg = (id: number) => {
    setOpenId(openId === id ? null : id); 
  };


  
  function handleViewAll() {
    const updatedNotifications: Notification[] = dataNotification.map((notification) =>
      notification.status === "unseen"
        ? { ...notification, status: 'seen' } 
        : notification
    );
  
    setDataNotification(updatedNotifications); 
  }

  return (
    <div className="notification-container">

      <div className="header-notification">
        <div className="count-notification-container">
          <h2>Notifications</h2>
          {totalNotification > 0 && ( <p className="count-notification">{totalNotification}</p>)}
         
        </div>

        <button onClick={handleViewAll} className="btn-mark-all">Mark all as read</button>
      </div>

       {dataNotification.map(item => (
          <div className="msg-container" key={item.id} onClick={() => handleView(item.id)}>
            
            <div onClick={() => openMsg(item.id)}  className={`msgTitle ${item.status === 'unseen' ? 'unseen' : ''}`} >
                
                <div className="txt-msgTitle-container">
                  <img className="imgprofile" width={45} height={45} src={`/assets/${item.profileImg}`}  alt="" />
                  
                  <div className="txt-msgTitle">
                    <p><span className="name">{item.name} </span> <span>{item.reason}</span> {item.postName && (<span className="postName">{item.postName}</span>)}   {item.groupName &&(<span className="groupName">{item.groupName}</span>)}                   {item.status === 'unseen' && (<span className="unseen-detalhe"></span>) }
                    </p>
                    
                    <p className="data-notification">{formatDate(item.date)}</p>
                  </div>

                 
                </div>


                {item.img && (
                  <div>
                    <img className="postImg-commented" src={`assets/${item.img}`} alt="Post Image" />
                  </div>
                )}
                
                
            </div>
             

            {openId === item.id && item.text && (
              <div className="txtMensagem">
                <p>{item.text}</p>
              </div>
            )}
              

              

              
              

          </div>
       ))}

        
    </div>
  );
};


