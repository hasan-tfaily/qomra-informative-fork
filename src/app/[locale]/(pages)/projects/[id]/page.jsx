import React, { Suspense } from "react";
import { notFound } from "next/navigation";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import {
  getSortedProjectsData,
  getAllProjectsIds,
  getProjectData,
} from "@/src/app/_lib/projects";

import ShareButtonsSection from "@/src/app/_components/ShareButtons";

import Link from "next/link";
import Image from "next/image";
import { getServicesDetails } from "@/core/repository";

export async function generateMetadata({ params }) {
  const postData = await getSingleProjectData(await params);

  return {
    title: postData.title + " | Projects",
  };
}

async function ProjectDetail({ params }) {
  const postData = await getSingleProjectData(params);
  const projects = await getAllProjects();
  const services = await getServicesDetails(params);
  //prev next navigation
  let prev = { id: 0, key: 0, image: "", title: "" };
  let next = { id: 0, key: 0, image: "", title: "" };
  let first = { id: 0, image: "", title: "" };
  let last = { id: 0, image: "", title: "" };

  projects.forEach(function (item, key) {
    if (item.id == postData.id) {
      prev.key = key - 1;
      next.key = key + 1;
    }
  });

  projects.forEach(function (item, key) {
    if (key == prev.key) {
      prev.id = item.id;
      prev.image = item.image;
      prev.title = item.title;
    }
    if (key == next.key) {
      next.id = item.id;
      next.image = item.image;
      next.title = item.title;
    }
    if (key == 0) {
      first.id = item.id;
      first.image = item.image;
      first.title = item.title;
    }
    if (key == projects.length - 1) {
      last.id = item.id;
      last.image = item.image;
      last.title = item.title;
    }
  });

  if (prev.key == -1) {
    prev.id = last.id;
    prev.image = last.image;
    prev.title = last.title;
  }
  if (next.key == projects.length) {
    next.id = first.id;
    next.image = first.image;
    next.title = first.title;
  }

  return (
    <OkaiLayout>
      {/* project */}
      <div className="mil-p-240-120 mil-992-p-150-120">
        <div className="container">
          <>
            <div
              className={`mil-just-image mil-h mil-shortened mil-mb${
                0 + 1 == 2 ? "120" : "30"
              } mil-up`}
              key={`project-gallery-item-${0}`}
            >
              <Image
                src={`http://137.184.197.76:1337${services.data[0].coverImage.url}`}
                fill
                sizes="100vw"
                alt={"hello"}
                className="mil-scale-img"
                data-value-1="1"
                data-value-2="1.25"
              />
            </div>
            <div
              className={`mil-just-image mil-h mil-shortened mil-mb${
                1 + 1 == 2 ? "120" : "30"
              } mil-up`}
              key={`project-gallery-item-${1}`}
            >
              <Image
                src={`http://137.184.197.76:1337${services.data[0].aboutService[0].image.url}`}
                fill
                sizes="100vw"
                alt={"hello"}
                className="mil-scale-img"
                data-value-1="1"
                data-value-2="1.25"
              />
            </div>
          </>

          <div className="row mil-jcb">
            <div className="col-lg-7">
              <h2
                className="mil-fs42 mil-mb60 mil-up"
                dangerouslySetInnerHTML={{
                  __html: services.data[0].aboutService[0].title,
                }}
              />
              <div
                className="mil-text mil-mb60 mil-up"
                dangerouslySetInnerHTML={{
                  __html: services.data[0].aboutService[0].description,
                }}
              />

              <ShareButtonsSection />
            </div>
            <div className="col-lg-4 mil-mb120"></div>
          </div>

          <div className="row mil-jce">
            <div className="col-lg-10">
              <Link
                href={`#`}
                className="row flex-sm-row-reverse mil-jcb mil-aic mil-c-next"
              >
                <div className="col-lg-7 mil-project-cover-frame">
                  <div className="mil-cover-img mil-left mil-up">
                    <Image
                      src={`http://137.184.197.76:1337${services.data[0].ourServicce.image.url}`}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      alt={"Qomra"}
                      className="mil-scale-img"
                      data-value-1="1"
                      data-value-2="1.25"
                    />
                  </div>
                </div>
                <div className="col-lg-5 mil-relative">
                  <div className="mil-project-text">
                    <span className="mil-suptitle mil-accent mil-up">
                      {services.data[0].ourServicce.title}
                    </span>
                    <h6
                      className="mil-fs42 mil-mb30 mil-up"
                      style={{ fontSize: "30px" }}
                    >
                      {services.data[0].ourServicce.description}
                    </h6>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* project end */}
    </OkaiLayout>
  );
}
export default ProjectDetail;

export async function generateStaticParams() {
  const paths = getAllProjectsIds();

  return paths;
}

async function getSingleProjectData(params) {
  const postData = await getProjectData(`project-21`);

  if (!postData) {
    notFound();
  } else {
    return postData;
  }
}

async function getAllProjects() {
  const allProjects = await getSortedProjectsData();

  return allProjects;
}
