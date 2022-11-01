import { useContext } from "react";
import { UserContext } from "../App";
import { MailOutlined, PhoneOutlined, GlobalOutlined } from "@ant-design/icons";

import "./description.css";

const Description = () => {
  const context = useContext(UserContext);
  return (
    <div className="desc-container">
      <p className="desc-item">
        <MailOutlined />
        <span>{context.email}</span>
      </p>

      <p className="desc-item">
        <PhoneOutlined />
        <span>{context.phone}</span>
      </p>

      <p className="desc-item">
        <GlobalOutlined />
        <span>{context.website}</span>
      </p>
    </div>
  );
};

export default Description;
