import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import PageBanner from "@/src/app/_components/PageBanner";
import ProjectsMasonry from "@/src/app/_components/ProjectsMasonry";

import { getSortedProjectsData } from "@/src/app/_lib/projects";

export const metadata = {
  title: {
    default: "Projects",
  },
  description: AppData.settings.siteDescription,
};

async function Projects() {
  const projects = await getAllProjects();

  return (
    <OkaiLayout>
      <PageBanner
        pageTitle={"Portfolio"}
        breadTitle={"Portfolio"}
        bgImage={"/img/banners/18.jpg"}
      />
      <ProjectsMasonry
        projects={projects}
        categories={AppData.projects.categories}
      />
    </OkaiLayout>
  );
}
export default Projects;

async function getAllProjects() {
  const allProjects = getSortedProjectsData();
  return allProjects;
}
