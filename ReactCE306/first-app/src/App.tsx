import React from "react";
import UserProfileCard from "./components/UserProfileCard";
import type { UserData } from "./components/UserProfileCard";

const userList: UserData[] = [
  {
    id: 1,
    name: "A Alan",
    avatarUrl: "https://i.pravatar.cc/150?img=3",
    email: "john@example.com",
    isOnline: true,
    skills: [
      { name: "React", level: "Advanced" },
      { name: "TypeScript", level: "Intermediate" },
      { name: "Node.js", level: "Beginner" },
    ],
  },
  {
    id: 2,
    name: "B Bob",
    avatarUrl: "https://i.pravatar.cc/150?img=5",
    email: "jane@example.com",
    isOnline: false,
    skills: [
      { name: "HTML", level: "Advanced" },
      { name: "CSS", level: "Advanced" },
      { name: "JavaScript", level: "Intermediate" },
    ],
  },
  {
    id: 3,
    name: "C Chris",
    avatarUrl: "https://i.pravatar.cc/150?img=8",
    email: "alice@example.com",
    isOnline: true,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Django", level: "Beginner" },
    ],
  },
  {
    id: 4,
    name: "D Daniel",
    avatarUrl: "https://i.pravatar.cc/150?img=9",
    email: "alice@example.com",
    isOnline: true,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Django", level: "Beginner" },
    ],
  },
  {
    id: 5,
    name: "E Elon",
    avatarUrl: "https://i.pravatar.cc/150?img=0",
    email: "alice@example.com",
    isOnline: true,
    skills: [
      { name: "Python", level: "Intermediate" },
      { name: "Django", level: "Beginner" },
    ],
  },
];

const containerStyle: React.CSSProperties = {
  width: "70%",
  margin: "0 auto",
  padding: "24px",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
  gap: "20px",
};

function App() {
  const handleViewDetails = (id: string | number) => {
    alert(`ดูรายละเอียดผู้ใช้ ID: ${id}`);
  };

  return (
    <div style={containerStyle}>
      {userList.map((user) => (
        <UserProfileCard
          key={user.id}
          user={user}
          onViewDetails={handleViewDetails}
        />
      ))}
    </div>
  );
}

export default App;
