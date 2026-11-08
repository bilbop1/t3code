import { describe, expect, it } from "vite-plus/test";

import { androidHeaderMenuActions } from "../../components/ui/headerMenu.android";
import type { MenuActionWithLeading } from "../../components/ui/Menu.types";
import { buildHomeListFilterMenuItems } from "./home-list-filter-menu";

describe("buildHomeListFilterMenuItems", () => {
  it("carries each project's icon into the Android menu rows", () => {
    const renderIcon = (size: number) => size;
    const items = buildHomeListFilterMenuItems({
      environments: [],
      projects: [
        { key: "with-icon", label: "Misc", renderIcon },
        { key: "without-icon", label: "Projector" },
      ],
      selectedEnvironmentId: null,
      selectedProjectKey: null,
      onEnvironmentChange: () => {},
      onProjectChange: () => {},
    });

    const project = androidHeaderMenuActions(items).find((action) => action.id === "project");
    const rows = (project?.subactions ?? []) as MenuActionWithLeading[];

    expect(rows.map((row) => row.id)).toEqual([
      "project:all",
      "project:with-icon",
      "project:without-icon",
    ]);
    expect(rows[0]?.renderLeading).toBeUndefined();
    expect(rows[1]?.renderLeading).toBe(renderIcon);
    expect(rows[2]?.renderLeading).toBeUndefined();
  });
});
