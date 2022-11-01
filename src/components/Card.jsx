import "antd/dist/antd.css";
import {
  EditOutlined,
  HeartTwoTone,
  DeleteFilled,
  HeartFilled,
} from "@ant-design/icons";
import { Avatar, Button, Card } from "antd";
import Description from "./Description";
import { useContext, useState } from "react";
import { GlobalHelperContext, UserContext } from "../App";

import "./card.css";
const { Meta } = Card;

const CardUser = () => {
  const userContext = useContext(UserContext);
  const globalHelperContext = useContext(GlobalHelperContext);
  const [isClicked, setIsClicked] = useState(false);

  return (
    <Card
      cover={<img alt="example" src={userContext?.imgURL} />}
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

        <button
          className="btn"
          onClick={() => globalHelperContext.editHandler(userContext?.id)}
        >
          <EditOutlined key="edit" />
        </button>,

        <button
          className="btn btn-delete"
          onClick={() => globalHelperContext.deleteHandler(userContext?.id)}
        >
          <DeleteFilled key="delete" />,
        </button>,
      ]}
    >
      <Meta title={userContext?.name} description={<Description />} />
    </Card>
  );
};

export default CardUser;
