import "../StudentRow/StudentRow.css";
import { useState } from "react";
import { Status } from "./Status";

type Props = {
  name: string;
  email: string;
  avatar: string;
  grade1: number;
  grade2: number;
  finalGrade: number;
};

export function StudentRow({
  name,
  email,
  avatar,
  grade1,
  grade2,
  finalGrade,
}: Props) {
  const [status, setStatus] = useState<boolean>(false);

  /* useEffect(() => {

  }, [status]); */

  return (
    <tr className="studentRow">
      <td>
        <div className="studentInfo">
          <img
            src={
              avatar
                ? avatar
                : "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
            }
            alt="avatar"
            className="avatar"
          />
          <div className="studentNameInfo">
            <p className="name">{name}</p>
            <p className="email">{email}</p>
          </div>
        </div>
      </td>
      <td>
        <Status active={status} onClick={() => setStatus(!status)} />
      </td>
      <td>
        <p className="grade">{grade1}</p>
      </td>
      <td>
        <p className="grade">{grade2}</p>
      </td>
      <td>
        <p className="grade">{status ? finalGrade : <p>--</p>}</p>
      </td>
    </tr>
  );
}
