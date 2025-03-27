import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";
import ProjectsMasonry from "@/src/app/_components/ProjectsMasonry";

import { getSortedProjectsData } from "@/src/app/_lib/projects";

export const metadata = {
  title: {
    default: "Projects 3",
  },
  description: AppData.settings.siteDescription,
};

async function Projects3() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <ProjectsMasonry
        projects={projects}
        categories={AppData.projects.categories}
        layout={"masonry"}
        filter={0}
        limit={15}
        columns={3}
        container={"fullwidth"}
      />
    </OkaiLayout>
  );
}
export default Projects3;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
