import React from "react";
import { notFound } from "next/navigation";

import OkaiLayout from "@/src/app/_layouts/OkaiLayout";

import {
  getAllPostsIds,
  getPostData,
  getSortedPostsData,
} from "@/src/app/_lib/posts";
import { getAuthorData } from "@/src/app/_lib/authors";
import { getSortedCategoriesData } from "@/src/app/_lib/categories";

import PostRelated from "@/src/app/_components/post/PostRelated";
import RecentPosts from "@/src/app/_components/post/RecentPosts";
import InstagramGallery from "@/src/app/_components/post/InstagramGallery";
import BlogCategories from "@/src/app/_components/post/BlogCategories";
import ShareButtonsSection from "@/src/app/_components/ShareButtons";
import PostComments from "@/src/app/_components/post/PostComments";

import Date from "@/src/app/_lib/date";

import Link from "next/link";
import Image from "next/image";
import { getBlogDetailsPage } from "@/core/repository";
import DateStringConverter from "@/src/app/_components/blog/data";

async function PostsDetail({ params }) {
  // const postData = await getSinglePostData(await params);
  // const authorData = await getSingleAuthorData(
  //   postData.author.toLowerCase().replace(" ", "-")
  // );
  const posts = await getAllPosts();
  // const categories = await getAllCategories();

  const blog = await getBlogDetailsPage(params.id);

  const comments = [
    {
      avatar: "/img/faces/1.jpg",
      name: "Joshua Conti",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      date: "December 10, 2023 at 10:13",
    },
    {
      avatar: "/img/faces/2.jpg",
      name: "Bernarda Mitchell",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      date: "December 10, 2023 at 10:13",
      children: [
        {
          avatar: "/img/faces/1.jpg",
          name: "Noah Frigerio",
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
          date: "December 10, 2023 at 10:13",
        },
      ],
    },
    {
      avatar: "/img/faces/3.jpg",
      name: "Geraldine Moore",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      date: "December 10, 2023 at 10:13",
    },
    {
      avatar: "/img/faces/1.jpg",
      name: "Thomas Gallo",
      text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
      date: "December 10, 2023 at 10:13",
      children: [
        {
          avatar: "/img/faces/3.jpg",
          name: "Gemma Wood",
          text: "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth",
          date: "December 10, 2023 at 10:13",
        },
      ],
    },
  ];
  // console.log(blog.data[0].Gallery);

  return (
    <OkaiLayout>
      {/* publication */}
      <div className="mil-p-240-0 mil-992-p-150-0">
        <div className="container">
          <div className="row mil-jcb">
            <div className="col-lg-6">
              <h1 className="mil-fs42 mil-mb60 mil-up">{blog.data[0].title}</h1>
              <div className="mil-post-details mil-text mil-mb90 mil-up">
                {/* <span className="mil-item">
                  {blog.data[0].category.map((item, key) => (
                    <span key={`post-category-item-${key}`}>
                      <Link href={`/blog/category/${item.title}`}>
                        {item.title}
                      </Link>
                      {key + 1 !== blog.data[0].category.length && (
                        <span>, </span>
                      )}
                    </span>
                  ))}
                </span> */}
                {/* <span className="mil-sep">/</span> */}
                <span className="mil-item">
                  <DateStringConverter dateStr={blog.data[0].date} />
                </span>
                <span className="mil-sep">/</span>
                <span className="mil-item">
                  by{" "}
                  <Link
                    href={`/blog/author/${blog.data[0].author
                      .toLowerCase()
                      .replace(" ", "-")}`}
                  >
                    {blog.data[0].author}
                  </Link>
                </span>
              </div>
            </div>
            <div className="col-12">
              <div className="mil-just-image mil-h mil-shortened mil-mb90 mil-up">
                <Image
                  src={`http://91.98.36.223${blog.data[0].coverImage.url}`}
                  fill
                  sizes="100vw"
                  priority
                  alt={blog.data[0].title}
                  className="mil-scale-img"
                  data-value-1="1"
                  data-value-2="1.25"
                />
              </div>
            </div>
            <div className="col-lg-7 mil-mb90">
              <div className="mil-text mil-mb90 mil-up">
                {blog.data[0].paragraph.map((item, index) => (
                  <div key={index}>
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>

              <div className="mil-tags mil-mb60 mil-up">
                <p>Tags:</p>
                <ul>
                  {blog.data[0].category.map((item, key) => (
                    <li key={`post-tag-item-${key}`}>
                      <Link
                        href={`/blog/tag/${item.title}`}
                        className="mil-c-gone"
                      >
                        {item.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <ShareButtonsSection />

              {/* <PostRelated posts={posts} currentPost={postData} />

              <PostComments items={comments} /> */}
            </div>
            <div className="col-lg-4">
              <RecentPosts items={posts} numOfItems={3} />

              <InstagramGallery
                photos={blog.data[0].Gallery}
                items={[
                  {
                    image: "/img/blog/publication/instagram/1.jpg",
                    link: "https://instagram.com/",
                    alt: "instapost",
                  },
                  {
                    image: "/img/blog/publication/instagram/2.jpg",
                    link: "https://instagram.com/",
                    alt: "instapost",
                  },
                  {
                    image: "/img/blog/publication/instagram/3.jpg",
                    link: "https://instagram.com/",
                    alt: "instapost",
                  },
                  {
                    image: "/img/blog/publication/instagram/4.jpg",
                    link: "https://instagram.com/",
                    alt: "instapost",
                  },
                ]}
              />

              <BlogCategories items={blog.data[0].category} />
            </div>
          </div>
        </div>
      </div>
      {/* publication end */}
    </OkaiLayout>
  );
}
export default PostsDetail;

export async function generateStaticParams() {
  const paths = getAllPostsIds();

  return paths;
}

async function getSinglePostData(params) {
  const postData = await getPostData((await params).id);

  if (!postData) {
    notFound();
  } else {
    return postData;
  }
}

async function getSingleAuthorData(author_id) {
  const authorData = await getAuthorData(author_id);

  return authorData;
}

async function getAllPosts() {
  const allPosts = await getSortedPostsData();

  return allPosts;
}

async function getAllCategories() {
  const categoriesData = await getSortedCategoriesData();

  return categoriesData;
}
