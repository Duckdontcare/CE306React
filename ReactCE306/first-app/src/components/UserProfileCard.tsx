import React from "react";
import SkillName from "./SkillName";

export interface UserData {
    id: string | number;
    name: string;
    avatarUrl?: string;
    email: string;
    isOnline: boolean;
    skills: Array<{
        name: string;
        level?: "Beginner" | "Intermediate" | "Advanced";
    }>;
}

interface Props {
    user: UserData;
    onViewDetails: (userId: string | number) => void;
}

const styles = {
    card: {
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "14px",
        maxWidth: "320px",
        margin: "0 0 16px 0",
        boxShadow: "0 1px 3px rgba(0,0,0,0.1)",
    },
    profile: {
        display: "flex",
        gap: "12px",
        marginBottom: "14px",

    },
    avatar: {
        width: "64px",
        height: "64px",
        borderRadius: "50%",
        objectFit: "cover" as const,
        flexShrink: 0,
    },
    userInfo: {
    display: "flex",
    flexDirection: "column" as const,
    justifyContent: "center",
    },
    name: { fontSize: "16px", fontWeight: 600 },
    email: { fontSize: "13px", color: "#666" },
    status: { display: "flex", alignItems: "center", marginTop: "6px" },
    dot: (online: boolean) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    background: online ? "green" : "gray",
    marginRight: "6px",
    }),
    skills: { marginBottom: "12px" },
    skillTitle: { fontSize: "14px", fontWeight: 500, marginBottom: "6px" },
    button: {
    backgroundColor: "#2563eb",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    padding: "8px 14px",
    cursor: "pointer",
    fontSize: "14px",
    },
};

const UserProfileCard: React.FC<Props> = ({ user, onViewDetails }) => {
    return (
        <div style={styles.card}>
        {/* ส่วนข้อมูลโปรไฟล์ */}
        <div style={styles.profile}>
            <img
            src={user.avatarUrl || "https://via.placeholder.com/64"}
            alt={user.name}
            style={styles.avatar}
            />
            <div style={styles.userInfo}>
            <span style={styles.name}>{user.name}</span>
            <span style={styles.email}>{user.email}</span>
            <div style={styles.status}>
                <span style={styles.dot(user.isOnline)}></span>
                <span style={{ fontSize: "12px" }}>
                {user.isOnline ? "ออนไลน์" : "ออฟไลน์"}
                </span>
            </div>
            </div>
        </div>

        {/* ส่วนแสดงทักษะ */}
        <div style={styles.skills}>
            <div style={styles.skillTitle}>ทักษะ:</div>
            {user.skills.map((s, i) => (
            <SkillName key={i} name={s.name} level={s.level} />
            ))}
        </div>

        {/* ปุ่มกดดูรายละเอียด */}
        <button
            style={styles.button}
            onClick={() => onViewDetails(user.id)}
        >
            ดูรายละเอียด
        </button>
        </div>
    );
};

export default UserProfileCard;
