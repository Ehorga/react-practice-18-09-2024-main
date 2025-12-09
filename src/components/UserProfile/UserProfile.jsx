import { useState } from "react";
import styles from "./UserProfile.module.css";

const UserProfile = (props) => {
  const { user : { name: "Anonim", age: 100, email: "anonim@gmail.com" } } =
    props;
  const { name, age, email } = user;
  const [isColored, setIsColored] = useState(false);
  const colorColored= isColored ? "grey" : "blue"
  // const [isSelect, setIsSelect] = useState(false);
  // const borderSelect = isSelect ? "4px solid blue" : "2px solid grey";
  return (
    <article
      className={styles["user-profile"]}
      style ={{color: colorColored }}
      onClick ={( ) => setIsColored(true)}
      // style={{ border: borderSelect }}
      // onClick={() => setIsSelect(!isSelect)}
    >
      <h2>name: {name}</h2>
      <h3>age: {age}</h3>
      <p>email: {email}</p>
    </article>
  );
};

export default UserProfile;
