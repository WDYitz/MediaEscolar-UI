import "./App.css";

import { students } from "../data/Student";
import { StudentRow } from "../components/StudentRow/StudentRow";

export function App() {
  return (
    <div className="App">
      <table>
        <tr>
          <th className="nameHead">Name</th>
          <th className="statusHead">Status</th>
          <th className="grade1Head">Grade 1</th>
          <th className="grade2Head">Grade 2</th>
          <th className="finalGradeHead">Final Grade</th>
        </tr>
        {students.map((student) => (
          <StudentRow
            key={student.id}
            name={student.name}
            email={student.email}
            avatar={student.avatar}
            grade1={student.grade1}
            grade2={student.grade2}
            finalGrade={student.grade1 + student.grade2 / 2}
          />
        ))}
      </table>
    </div>
  );
}
