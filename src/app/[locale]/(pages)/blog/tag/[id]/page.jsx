import PaginatedBlog from "@/src/app/_components/PaginatedBlog";

import { notFound } from "next/navigation";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import { getAllTagsIds, getTagData } from "@/src/app/_lib/tags";
import { getTagPosts } from "@/src/app/_lib/posts";

export async function generateMetadata({ params }) {
  const tagData = await getSingleTagData(await params);

  return {
    title: tagData.title + " | Blog",
  };
}

async function BlogTag({ params }) {
  const posts = await getAllPosts(params);
  const tagData = await getSingleTagData(params);

  return (
    <OkaiLayout>
      {/* blog */}
      <div className="mil-p-240-120 mil-992-p-150-120">
        <PaginatedBlog items={posts} limit={AppData.settings.perPage} />
      </div>
      {/* blog end */}
    </OkaiLayout>
  );
}
export default BlogTag;

export async function generateStaticParams() {
  const paths = getAllTagsIds();
  return paths;
}

async function getSingleTagData(params) {
  const tagData = await getTagData((await params).id);

  if (!tagData) {
    notFound();
  } else {
    return tagData;
  }
}

async function getAllPosts(params) {
  const tagPosts = await getTagPosts((await params).id);

  if (!tagPosts.length) {
    notFound();
  }

  return tagPosts;
}
