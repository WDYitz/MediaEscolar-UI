import "../StudentRow/StudentRow.css";
import { useState } from "react";
import { Status } from "./Status/Status.tsx";
import { GradeStat } from "./GradeStat/GradeStat";
import { students } from "../../data/Student.tsx";

type Props = {
  name: string;
  sex: string;
  email: string;
  avatar: string;
  grade1: number;
  grade2: number;
  finalGrade: number;
};

export function StudentRow({
  name,
  sex,
  email,
  avatar,
  grade1,
  grade2,
  finalGrade,
}: Props) {
  const [status, setStatus] = useState<boolean>(false);

  return (
    <tr className="studentRow">
      <td>
        <div className="studentInfo">
          <img
            src={
              avatar
                ? avatar
                : sex === 'm'
                  ? "https://icon-library.com/images/avatar-icon-images/avatar-icon-images-4.jpg"
                  : "https://cdn-icons-png.flaticon.com/512/4140/4140047.png"
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
        <p className="grade">{status ? grade1 : <p>--</p>}</p>
      </td>
      <td>
        <p className="grade">{status ? grade2 : <p>--</p>}</p>
      </td>
      <td>
        <p className="grade">{status ? finalGrade : <p>--</p>}</p>
      </td>
      <td>
        {
          status ? <GradeStat gradeStatus={finalGrade} /> : <p className="grade">--</p>
        }
      </td>
    </tr>
  );
}
