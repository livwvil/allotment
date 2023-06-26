import { type FC, useRef } from "react";

import { Allotment, AllotmentHandle } from "../../src";
import { Placeholder } from "./placeholder";

type ComponentNode = {
  type: "component";
  name: string;
};

export type PaneNode = {
  id: string;
  child: AllotmentNode | ComponentNode;
};

export type AllotmentNode = {
  id: string;
  type: "allotment";
  orientation: "vertical" | "horizontal";
  panes: PaneNode[];
};

export type PaneRect = {
  x: number;
  y: number;
  width: number;
  height: number;
  orientation: AllotmentNode["orientation"];
  parentPaneId: string;
};

export type PaneRectMap = Map<string, PaneRect>;

interface TreeProps {
  treeNode: AllotmentNode;
  parentPaneId: string;
  updateLayoutSizes?: (id: string, sizes: number[]) => void;
  updateLayoutRects?: (rects: PaneRectMap) => void;
}

export const Tree: FC<TreeProps> = ({
  treeNode,
  parentPaneId,
  updateLayoutSizes,
  updateLayoutRects,
}) => {
  const containerRef = useRef<AllotmentHandle | null>(null);

  const handleOnChange = (sizes: number[]) => {
    updateLayoutSizes?.(treeNode.id, sizes);

    if (!updateLayoutRects) {
      return;
    }

    const containerSize = containerRef.current?.getContainerSize() ?? {
      width: 0,
      height: 0,
    };
    const horizontal = treeNode.orientation === "horizontal";
    let offset = 0;

    const rects = sizes.reduce<PaneRectMap>((rects, size, idx) => {
      const pane = treeNode.panes[idx];

      const x = horizontal ? offset : 0;
      const y = horizontal ? 0 : offset;
      const width = horizontal ? size : containerSize.width;
      const height = horizontal ? containerSize.height : size;

      if (pane) {
        rects.set(pane.id, {
          x,
          y,
          width,
          height,
          parentPaneId,
          orientation: treeNode.orientation,
        });

        offset += size;
      }

      return rects;
    }, new Map());

    updateLayoutRects(rects);
  };

  return (
    <Allotment
      key={treeNode.id}
      ref={containerRef}
      vertical={treeNode.orientation === "vertical"}
      onChange={handleOnChange}
    >
      {treeNode.panes.map((pane) => (
        <Allotment.Pane key={pane.id}>
          {pane.child.type === "allotment" ? (
            <Tree
              treeNode={pane.child}
              parentPaneId={pane.id}
              updateLayoutSizes={updateLayoutSizes}
              updateLayoutRects={updateLayoutRects}
            />
          ) : (
            <Placeholder id={pane.id} />
          )}
        </Allotment.Pane>
      ))}
    </Allotment>
  );
};
