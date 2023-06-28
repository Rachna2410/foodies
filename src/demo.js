import React, { useEffect, useState } from "react";

const BASE_URL = process.env.REACT_APP_BASE_URL;

const Chats = (props) => {
  const [user, setUser] = useState([]);

  const userId = sessionStorage.getItem("userId");

  const token = props.token;

  const [receiverId, setReceiverId] = useState({}); // let receiverId;

  useEffect(() => {
    (async () => {
      await fetch(BASE_URL + "/users")
        .then((response) => response.json())

        .then((data) => {
          setUser(data);
        });
    })();

    console.log("user. 11..............", user);

    return () => {
      // this now gets called when the component unmounts
    };
  }, []);

  const receiverEvent = (id) => {
    console.log("id.................", id);

    if (id) {
      setReceiverId(id);
    } // receiverId = id;

    console.log("receiverId......", receiverId);
  };

  return (
    <div className="chats">
      {user &&
        user.data &&
        user.data.length > 0 &&
        user.data.map((userObj, index) => {
          if (JSON.stringify(userObj._id) !== userId) {
            return (
              <div
                className="userChat"
                key={userObj._id}
                onClick={setReceiverId(JSON.stringify(userObj._id))} // onClick={senderEvent(userObj._id)}
              >
                <img
                  src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"
                  alt=""
                />
                <div className="userChatInfo">
                  <span>
                    {userObj.firstName} {userObj.lastName}
                  </span>
                  <p>hello</p>
                </div>
              </div>
            );
          }
        })}
      <div className="">
        <div className=""></div>
        {/* <img

     src="https://images.pexels.com/photos/6957556/pexels-photo-6957556.jpeg?auto=compress&cs=tinysrgb&w=1600&lazy=load"

     alt=""

    />

    <div className="userChatInfo">

     <span>jane</span>

     <p>Hello</p>

    </div> */}
      </div>
    </div>
  );
};

export default Chats;
