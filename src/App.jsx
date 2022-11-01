import axios from "axios";
import { createContext, useEffect, useState } from "react";

import CardUser from "./components/Card";

export const UserContext = createContext();

function App() {
  const [message, setMessage] = useState("Loading...");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        setUsers(res.data);
        setMessage("");
      })
      .catch((e) => {
        console.error(e);
        setMessage("Something went wrong");
      });
  }, [users.length]);

  return (
    <section className="wrapper">
      <p>{message}</p>

      <div className="users-list">
        {users.length > 0 &&
          users.map(({ id, name, phone, email, website }) => {
            return (
              <UserContext.Provider
                value={{
                  name,
                  phone,
                  email,
                  website,
                  imgURL: "https://joeschmoe.io/api/v1/random",
                }}
                key={id}
              >
                <CardUser
                  name={name}
                  email={email}
                  phone={phone}
                  website={website}
                />
              </UserContext.Provider>
            );
          })}
      </div>
    </section>
  );
}

export default App;
