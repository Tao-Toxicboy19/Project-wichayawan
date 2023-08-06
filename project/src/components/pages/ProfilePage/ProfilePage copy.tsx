import { useContext } from "react";
import { DataUser } from "../../../App";
import { Button } from "@material-tailwind/react";

type Props = {};

export default function ProfilePage({}: Props): JSX.Element {
  const { data, check } = useContext(DataUser);

  return (
    <div>
      <h2>ProfilePage</h2>
      <div>
        {check ? (
          <div>
            Welcome, {data.first_name} {data.last_name} {data.email}!
          </div>
        ) : (
          <h1>Login !!!</h1>
        )}
      </div>
    </div>
  );
}
