import { forwardRef, ReactNode } from "react";

import styles from "./docking-manager.module.css";

interface AbsolutePaneProps {
  children: ReactNode;
}

export const AbsolutePane = forwardRef<HTMLDivElement, AbsolutePaneProps>(
  ({ children }, ref) => {
    return (
      <div className={styles.absolutePane} ref={ref}>
        {children}
      </div>
    );
  }
);
