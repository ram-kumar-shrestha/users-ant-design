import "antd/dist/antd.css";
import {
  EditOutlined,
  HeartTwoTone,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Description from "./Description";
import { useContext, useState } from "react";
import { UserContext } from "../App";

import "./card.css";
const { Meta } = Card;

const CardUser = () => {
  const context = useContext(UserContext);
  const [isClicked, setIsClicked] = useState(false);
  return (
    <Card
      cover={<img alt="example" src={context.imgURL} />}
      actions={[
        <button
          className="btn fav-btn"
          onClick={() => setIsClicked((cur) => !cur)}
        >
          {!isClicked ? (
            <HeartTwoTone key="unfavorite" twoToneColor="#ff4242d9" />
          ) : (
            <HeartFilled key="favorite" style={{ color: "#ff4242d9" }} />
          )}
        </button>,
        <EditOutlined key="edit" />,
        <button
          className="btn btn-delete"
          onClick={() => context.deleteHandler(context.id)}
        >
          <DeleteFilled key="delete" />,
        </button>,
      ]}
    >
      <Meta title={context.name} description={<Description />} />
    </Card>
  );
};

export default CardUser;
