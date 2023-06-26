import type { FC } from "react";

interface PlaceholderProps {
  id: string;
}

export const Placeholder: FC<PlaceholderProps> = ({ id }) => {
  return <div>{id}</div>;
};
