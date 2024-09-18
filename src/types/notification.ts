
export type Notification = {
    id: number;
    profileImg: string;
    name: string;
    reason: "reacted to your recent post" | "followed you" | "has joined your group" | "commented on your picture" | "sent you a private message" | "left the group";
    groupName: string | null;
    postName: string | null;
    date: string;
    img: string | null;
    status: "seen" | "unseen";
    text: string | null;
  };
  


