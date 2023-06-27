import { type FC, useRef } from "react";

import { AbsolutePane } from "./absolute-pane";
import styles from "./docking-manager.module.css";
import { Placeholder } from "./placeholder";
import type { AllotmentNode, PaneNode, PaneRect, PaneRectMap } from "./tree";
import { Tree } from "./tree";

const tree: AllotmentNode = {
  id: "allotment-node-1",
  type: "allotment",
  orientation: "horizontal",
  panes: [
    {
      id: "pane-node-1",
      child: {
        type: "component",
        name: "placeholder",
      },
    },
    {
      id: "pane-node-2",
      child: {
        id: "allotment-node-2",
        type: "allotment",
        orientation: "vertical",
        panes: [
          {
            id: "pane-node-2-1",
            child: {
              type: "component",
              name: "placeholder",
            },
          },
          {
            id: "pane-node-2-2",
            child: {
              id: "allotment-node-3",
              type: "allotment",
              orientation: "horizontal",
              panes: [
                {
                  id: "pane-node-2-2-1",
                  child: {
                    type: "component",
                    name: "placeholder",
                  },
                },
                {
                  id: "pane-node-2-2-2",
                  child: {
                    id: "allotment-node-4",
                    type: "allotment",
                    orientation: "vertical",
                    panes: [
                      {
                        id: "pane-node-2-2-2-1",
                        child: {
                          type: "component",
                          name: "placeholder",
                        },
                      },
                      {
                        id: "pane-node-2-2-2-2",
                        child: {
                          type: "component",
                          name: "placeholder",
                        },
                      },
                      {
                        id: "pane-node-2-2-2-3",
                        child: {
                          id: "allotment-node-5",
                          type: "allotment",
                          orientation: "horizontal",
                          panes: [...Array(12).keys()].map((k) => ({
                            id: `pane-node-2-2-2-3-${k + 1}`,
                            child: {
                              type: "component",
                              name: "placeholder",
                            },
                          })),
                        },
                      },
                      {
                        id: "pane-node-2-2-2-4",
                        child: {
                          type: "component",
                          name: "placeholder",
                        },
                      },
                      ...[...Array(1).keys()].map<PaneNode>((k) => ({
                        id: `pane-node-2-2-2-${k + 5}`,
                        child: {
                          type: "component",
                          name: "placeholder",
                        },
                      })),
                    ],
                  },
                },
                {
                  id: "pane-node-2-2-3",
                  child: {
                    type: "component",
                    name: "placeholder",
                  },
                },
                ...[...Array(0).keys()].map<PaneNode>((k) => ({
                  id: `pane-node-2-2-${k + 4}`,
                  child: {
                    type: "component",
                    name: "placeholder",
                  },
                })),
              ],
            },
          },
          {
            id: "pane-node-2-3",
            child: {
              type: "component",
              name: "placeholder",
            },
          },
          {
            id: "pane-node-2-4",
            child: {
              id: "allotment-node-6",
              type: "allotment",
              orientation: "horizontal",
              panes: [
                {
                  id: "pane-node-2-4-1",
                  child: {
                    type: "component",
                    name: "placeholder",
                  },
                },
                {
                  id: "pane-node-2-4-2",
                  child: {
                    type: "component",
                    name: "placeholder",
                  },
                },
                {
                  id: "pane-node-2-4-3",
                  child: {
                    id: "allotment-node-7",
                    type: "allotment",
                    orientation: "vertical",
                    panes: [
                      {
                        id: "pane-node-2-4-3-1",
                        child: {
                          type: "component",
                          name: "placeholder",
                        },
                      },
                      {
                        id: "pane-node-2-4-3-2",
                        child: {
                          type: "component",
                          name: "placeholder",
                        },
                      },
                      {
                        id: "pane-node-2-4-3-3",
                        child: {
                          type: "component",
                          name: "placeholder",
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
};

const visiblePanesTraverse = (node: AllotmentNode): string[] =>
  node.panes.reduce<string[]>(
    (acc, pane) => [
      ...acc,
      ...(pane.child.type === "component" ? [pane.id] : []),
      ...(pane.child.type === "allotment"
        ? visiblePanesTraverse(pane.child)
        : []),
    ],
    []
  );

const visiblePaneIds = visiblePanesTraverse(tree);

interface DockingManagerProps {}

export const DockingManager: FC<DockingManagerProps> = () => {
  const absolutePaneElementsRef = useRef<Map<string, HTMLDivElement>>(
    new Map()
  );

  // TODO: clean removed elements
  const tmpRectsRef = useRef<PaneRectMap>(new Map());

  const updatePositions = (positions: PaneRectMap) => {
    positions.forEach((position, paneId) => {
      tmpRectsRef.current.set(paneId, position); // upsert
    });

    const extendedRects = calculateLayout(tmpRectsRef.current);

    extendedRects.forEach(({ id, absoluteX, absoluteY, width, height }) => {
      const elem = absolutePaneElementsRef.current.get(id);

      if (!elem) {
        return;
      }

      elem.style.left = `${absoluteX}px`;
      elem.style.top = `${absoluteY}px`;
      elem.style.width = `${width}px`;
      elem.style.height = `${height}px`;
      elem.style.display = width * height === 0 ? "none" : "block";
    });
  };

  return (
    <div className={styles.root}>
      <Tree
        treeNode={tree}
        parentPaneId=""
        updateLayoutRects={updatePositions}
      />
      {visiblePaneIds.map((paneId) => (
        <AbsolutePane
          key={paneId}
          ref={(elem) => {
            if (elem) {
              absolutePaneElementsRef.current.set(paneId, elem);
            } else {
              absolutePaneElementsRef.current.delete(paneId);
            }
          }}
        >
          <Placeholder id={paneId} />
        </AbsolutePane>
      ))}
    </div>
  );
};

const childrenTraverse = (
  rect: PaneRectExtended,
  getChildren: (rect: PaneRectExtended) => PaneRectExtended[] | undefined,
  cb: (rect: PaneRectExtended) => void
) => {
  getChildren(rect)?.forEach((child) => {
    cb(child);
    childrenTraverse(child, getChildren, cb);
  });
};

type PaneRectExtended = PaneRect & {
  id: string;
  absoluteX: number;
  absoluteY: number;
  availableWidth: number;
  availableHeight: number;
};

type PaneRectExtendedMap = Map<string, PaneRectExtended>;

const calculateLayout = (rects: PaneRectMap): PaneRectExtendedMap => {
  const children: Map<string, PaneRectExtended[]> = new Map();
  const rectsExtended: PaneRectExtendedMap = new Map();

  rects.forEach((rect, id) => {
    const extendedRect: PaneRectExtended = {
      ...structuredClone(rect),
      id,
      availableWidth: rect.width,
      availableHeight: rect.height,
      absoluteX: rect.x,
      absoluteY: rect.y,
    };

    rectsExtended.set(id, extendedRect);

    const parentRectChildren = children.get(rect.parentPaneId);

    if (parentRectChildren) {
      parentRectChildren.push(extendedRect);
    } else {
      children.set(rect.parentPaneId, [extendedRect]);
    }
  });

  rectsExtended.forEach((rect) => {
    const parent = rectsExtended.get(rect.parentPaneId);

    // Calculate absolute position
    let ancestor = parent;
    while (ancestor) {
      rect.absoluteX += ancestor.x;
      rect.absoluteY += ancestor.y;
      ancestor = rectsExtended.get(ancestor.parentPaneId);
    }

    // Calculate sizes considering parent overflow
    if (parent) {
      if (parent.orientation === "vertical") {
        const theRestWidth = parent.availableWidth - rect.width;

        if (theRestWidth < 0) {
          rect.width = parent.availableWidth;
          childrenTraverse(
            rect,
            (r) => children.get(r.id),
            (r) => {
              r.width = parent.availableWidth;
            }
          );
        }

        parent.availableWidth = Math.max(theRestWidth, 0);
      } else {
        const theRestHeight = parent.availableHeight - rect.height;

        if (theRestHeight < 0) {
          rect.height = parent.availableHeight;
          childrenTraverse(
            rect,
            (r) => children.get(r.id),
            (r) => {
              r.height = parent.availableHeight;
            }
          );
        }

        parent.availableHeight = Math.max(theRestHeight, 0);
      }
    }
  });

  return rectsExtended;
};
