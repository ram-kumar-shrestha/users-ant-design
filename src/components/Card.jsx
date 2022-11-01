import "antd/dist/antd.css";
import { EditOutlined, HeartTwoTone, DeleteFilled } from "@ant-design/icons";
import { Avatar, Card } from "antd";
import Description from "./Description";
import { useContext } from "react";
import { UserContext } from "../App";

const { Meta } = Card;

const CardUser = () => {
  const context = useContext(UserContext);
  return (
    <Card
      cover={<img alt="example" src={context.imgURL} />}
      actions={[
        <HeartTwoTone key="favorite" twoToneColor="#ff4242d9" />,
        <EditOutlined key="edit" />,
        <DeleteFilled key="delete" />,
      ]}
    >
      <Meta title={context.name} description={<Description />} />
    </Card>
  );
};

export default CardUser;
