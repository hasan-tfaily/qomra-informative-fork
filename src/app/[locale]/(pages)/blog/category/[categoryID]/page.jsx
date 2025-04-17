import PaginatedBlog from "@/src/app/_components/PaginatedBlog";

import { notFound } from "next/navigation";

import AppData from "@data/app.json";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import {
  getAllCategoriesIds,
  getCategoryData,
} from "@/src/app/_lib/categories";
import { getCategoryPosts, getSortedPostsData } from "@/src/app/_lib/posts";
import { getCatygoryFILTER } from "@/core/repository";

export async function generateMetadata({ params }) {
  const categoryData = await getSingleCategoryData(params);

  return {
    title: categoryData.title + " | Blog",
  };
}

async function BlogCategory({ params }) {
  // First await the params promise
  const { categoryID } = await params;

  const blogCategory = await getCatygoryFILTER(categoryID);
  const posts = await getAllPosts();
  return (
    <OkaiLayout>
      <div className="mil-p-240-120 mil-992-p-150-120">
        <PaginatedBlog
          blogs={blogCategory.data}
          items={posts.posts}
          limit={AppData.settings.perPage}
        />
      </div>
    </OkaiLayout>
  );
}
export default BlogCategory;

export async function generateStaticParams() {
  const paths = getAllCategoriesIds();
  return paths;
}

async function getSingleCategoryData(params) {
  const categoryData = await getCategoryData((await params).id);

  if (!categoryData) {
    notFound();
  } else {
    return categoryData;
  }
}

async function getAllPosts() {
  const posts = getSortedPostsData();

  return {
    posts: posts,
  };
}
