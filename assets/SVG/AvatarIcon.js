import React from "react";

const AvatarIcon = ({
  color,
  fill,
  className = undefined,
  onClick = undefined,
}) => {
  return (
    <svg
      width="43"
      height="43"
      viewBox="0 0 43 43"
      fill={fill ?? "none"}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={onClick}
    >
      <circle cx="21.9386" cy="21.3082" r="21.0616" fill={color} />
      <path
        d="M18.0762 12.041C15.096 12.041 12.6719 14.4674 12.6719 17.4483V25.1709C12.6719 28.1511 15.0983 30.5753 18.0792 30.5753H25.8018C28.782 30.5753 31.2061 28.1489 31.2061 25.1679V17.4453C31.2061 14.4652 28.7797 12.041 25.7988 12.041H18.0762ZM27.3448 15.1301C27.7711 15.1301 28.1171 15.476 28.1171 15.9023C28.1171 16.3286 27.7711 16.6746 27.3448 16.6746C26.9185 16.6746 26.5726 16.3286 26.5726 15.9023C26.5726 15.476 26.9185 15.1301 27.3448 15.1301ZM21.939 16.6746C24.4944 16.6746 26.5726 18.7527 26.5726 21.3081C26.5726 23.8635 24.4944 25.9417 21.939 25.9417C19.3836 25.9417 17.3054 23.8635 17.3054 21.3081C17.3054 18.7527 19.3836 16.6746 21.939 16.6746ZM21.939 18.2191C21.1197 18.2191 20.334 18.5445 19.7547 19.1239C19.1754 19.7032 18.85 20.4889 18.85 21.3081C18.85 22.1274 19.1754 22.9131 19.7547 23.4924C20.334 24.0717 21.1197 24.3972 21.939 24.3972C22.7583 24.3972 23.544 24.0717 24.1233 23.4924C24.7026 22.9131 25.028 22.1274 25.028 21.3081C25.028 20.4889 24.7026 19.7032 24.1233 19.1239C23.544 18.5445 22.7583 18.2191 21.939 18.2191Z"
        fill="white"
      />
    </svg>
  );
};

export default AvatarIcon;
