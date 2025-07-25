import Data from "@data/sections/about-us-2.json";
import Link from "next/link";
import Image from "next/image";

const AboutUsTwoSection = ({ data }) => {
  return (
    <>
      {/* about */}
      <div className="mil-about">
        <div className="container">
          <div className="row flex-sm-row-reverse mil-jcb mil-aic">
            <div className="col-lg-5 mil-relative">
              <div className="mil-about-text">
                <span
                  className="mil-suptitle mil-accent mil-mb10 mil-up"
                  dangerouslySetInnerHTML={{ __html: data.suTitle }}
                />

                <h2 className="mil-fs42 mil-mb30 mil-up">{data.title}</h2>
                <p className="mil-text mil-fs16 mil-light mil-mb30 mil-up">
                  {" "}
                  {data.description}
                </p>
                {/* <div className="mil-up">
                  <Link
                    href={Data.button.link}
                    className="mil-btn mil-btn-border mil-c-gone"
                  >
                    {Data.button.label}
                  </Link>
                </div> */}
              </div>
            </div>
            <div className="col-lg-7 mil-about-image-frame">
              <div className="mil-about-img mil-up">
                <Image
                  src={`http://137.184.197.76:1337${data.image.url}`}
                  fill
                  sizes="(max-width: 768px) 100vw, 75vw"
                  alt={Data.image.alt}
                  className="mil-scale-img"
                  data-value-1="1"
                  data-value-2="1.25"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* about end */}
    </>
  );
};

export default AboutUsTwoSection;
