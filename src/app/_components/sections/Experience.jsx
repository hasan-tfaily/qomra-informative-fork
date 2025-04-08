import Data from "@data/sections/experience.json";
import Link from "next/link";

const ExperienceSection = ({ data }) => {
  return (
    <>
      {/* experience */}
      <div>
        <div className="container">
          <div className="row mil-jcb">
            <div className="col-lg-6">
              <div className="mil-exp-box mil-up">
                <div className="mil-exp-content mil-up">
                  <div
                    className="mil-exp-number "
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  />
                  {/* <h2
                    className="mil-exp-text mil-fs42"
                    dangerouslySetInnerHTML={{ __html: data.title }}
                  /> */}
                </div>
              </div>
            </div>
            <div className="col-lg-5 mil-p-120-0">
              <p
                className="mil-text mil-fs30 mil-light mil-mb90 mil-up"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
              {data.featuredSection.map((item, key) => {
                const words = item.title.trim().split(/\s+/);
                const lastWord = words.length > 0 ? words.pop() : ""; // Remove and get last word
                const shortenedTitle = words.join(" "); // Title without last word

                return (
                  <div
                    className={
                      key + 1 !== 90
                        ? "mil-counter-item mil-mb90"
                        : "mil-counter-item"
                    }
                    key={`experience-item-${key}`}
                  >
                    <h5 className="mil-fs20 mil-mb30 mil-up">
                      {shortenedTitle}{" "}
                      <Link href={lastWord} className="mil-text-link">
                        {lastWord}
                      </Link>
                    </h5>
                    <div className="mil-prog-track mil-mb30 mil-add-class mil-up">
                      <div className="mil-prog" data-number={90}></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      {/* experience end */}
    </>
  );
};

export default ExperienceSection;
