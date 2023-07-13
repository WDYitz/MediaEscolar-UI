import { MouseEventHandler } from "react";

type Props = {
  onClick?: MouseEventHandler | undefined;
  active: boolean;
};

export function Status({ onClick, active }: Props) {
  return (
    <span onClick={onClick} className="statusBtn">
      {active ? (
        <p className="status active">Active</p>
      ) : (
        <p className="status deactivate">Deactivated</p>
      )}
    </span>
  );
}
