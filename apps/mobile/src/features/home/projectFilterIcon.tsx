import type { EnvironmentProject } from "@t3tools/client-runtime/state/shell";

import { ProjectFavicon } from "../../components/ProjectFavicon";

/** Draws a project the same way the thread list does, for project filter menu rows. */
export function renderProjectFilterIcon(project: EnvironmentProject) {
  return (size: number) => (
    <ProjectFavicon
      environmentId={project.environmentId}
      faviconPath={project.faviconPath}
      projectIcon={project.projectIcon}
      projectTitle={project.title}
      size={size}
      workspaceRoot={project.workspaceRoot}
    />
  );
}
