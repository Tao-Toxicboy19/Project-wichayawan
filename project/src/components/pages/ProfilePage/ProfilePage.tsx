import { useContext } from "react";
import { DataUser } from "../../../App";

type Props = {};

export default function ProfilePage({}: Props) {
  const { data } = useContext(DataUser);
  return (
    <div>
      {data.first_name && data.last_name && (
        <div>
          Welcome, {data.first_name} {data.last_name} {data.email}!
        </div>
      )}
    </div>
  );
}
