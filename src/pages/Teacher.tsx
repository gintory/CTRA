import React from "react";
import { teachers } from "./const";
import { Avatar, Card } from "antd";

const { Meta } = Card;

const Teacher: React.FC = () => {
  return (
    <div className="teacher">
      {teachers.map((d, i) => (
        <Card
          key={i}
          className="teacher-item"
          style={{ width: "30%" }}
          cover={
            <div className="video">
              <video
                controls
                controlsList="nodownload"
                poster={d.poster}
              >
                <source src={d.video} type="video/mp4"></source>
              </video>
            </div>
          }
        >
          <Meta
            avatar={
              <Avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=8" />
            }
            title={d.nickname}
            // description="This is the description"
          />
        </Card>
      ))}
    </div>
  );
};

export default Teacher;
