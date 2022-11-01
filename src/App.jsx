import axios from "axios";
import { createContext, useEffect, useState } from "react";

import CardUser from "./components/Card";
import UserModal from "./components/Modal";

export const UserContext = createContext();
export const GlobalHelperContext = createContext();

function App() {
  const [message, setMessage] = useState("Loading...");
  const [users, setUsers] = useState([]);
  const [singleUser, setSingleUser] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(false);

  const editHandler = (id) => {
    setIsModalOpen(true);

    setSingleUser(...users.filter((user) => user.id === id));
  };

  const hideModal = () => {
    setIsModalOpen(false);
  };

  const submitHandler = (updatedUser) => {
    setUsers(
      users.map((user) => {
        return user.id === updatedUser.id ? updatedUser : user;
      })
    );

    hideModal();
  };

  const deleteHandler = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

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
  }, []);

  useEffect(() => {
    document.title = "Users List";
  }, [users]);

  return (
    <section className="wrapper">
      <p>{message}</p>

      <GlobalHelperContext.Provider
        value={{
          deleteHandler,
          editHandler,
          hideModal,
          isModalOpen,
          singleUser,
          submitHandler,
        }}
      >
        <UserModal />
        <div className="users-list">
          {users.length > 0 &&
            users.map(({ id, name, phone, email, website }) => {
              return (
                <UserContext.Provider
                  value={{
                    id,
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
      </GlobalHelperContext.Provider>
    </section>
  );
}

export default App;
