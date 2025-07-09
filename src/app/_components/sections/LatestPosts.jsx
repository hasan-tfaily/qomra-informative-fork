import Data from "@data/sections/latest-posts.json";
import Date from "@/src/app/_lib/date";
import Link from "next/link";
import Image from "next/image";
import DateStringConverter from "../blog/data";

const LatestPostsSection = ({
  posts,
  paddingTop = 0,
  paddingBottom = 90,
  blogs,
}) => {
  return (
    <>
      {/* blog */}
      <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
        <div className="container">
          <div className="row">
            <div className="col-12 mil-mb90">
              <span className="mil-suptitle mil-accent mil-mb15 mil-up">
                {Data.subtitle}
              </span>
              <h2 className="mil-fs42 mil-up">{Data.title}</h2>
            </div>
            {blogs.map((item, key) => (
              <div className="col-lg-6" key={`latest-posts-item-${key}`}>
                <Link
                  href={`/blog/${item.id}`}
                  className="mil-blog-card mil-mb30 mil-c-read"
                >
                  <div className="mil-card-cover mil-up">
                    <div className="mil-hover-frame">
                      <Image
                        src={`http://137.184.197.76:1337${item.coverImage.url}`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        alt={item.title}
                        className="mil-scale-img"
                        data-value-1="1"
                        data-value-2="1.25"
                      />
                    </div>
                    <div className="mil-hover-overlay"></div>
                  </div>
                  <h4 className="mil-text mil-fs26 mil-mb30 mil-up">
                    {item.title}
                  </h4>
                  <p className="mil-soft mil-up">
                    <DateStringConverter dateString={item.date} />
                  </p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* blog end */}
    </>
  );
};

export default LatestPostsSection;
