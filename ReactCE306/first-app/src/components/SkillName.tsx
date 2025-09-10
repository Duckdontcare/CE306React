import React from "react";

interface SkillNameProps {
    name: string;
    level?: "Beginner" | "Intermediate" | "Advanced";
}

const SkillName: React.FC<SkillNameProps> = ({ name, level }) => {
    const baseStyle: React.CSSProperties = {
        padding: "5px 10px",
        borderRadius: "14px",
        display: "inline-block",
        fontSize: "13px",
        fontWeight: 600,
        margin: "0 6px 6px 0",
    };

    let colorStyle: React.CSSProperties = {
        backgroundColor: "#e5e7eb",
        color: "#374151"
    };

    switch (level) {
        case "Beginner":
            colorStyle = { backgroundColor: "#bbf7d0" ,color: "#166534"};
            break;
        case "Intermediate":
            colorStyle = { backgroundColor: "fef08a", color: "#853d0e"};
            break;
        case "Advanced":
            colorStyle = { backgroundColor: "#fecaca", color: "#991b1b"};
            break;
    }

    return (
        <span style={{...baseStyle, ...colorStyle }}>
            {name} {level ? `(${level})` : ""}
        </span>
    );
};

export default SkillName;