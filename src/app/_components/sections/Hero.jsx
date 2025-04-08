import Link from "next/link";
import Image from "next/image";

const HeroOne = ({
  image,
  title,
  button,

  imgLayout = false,
  rowReverse = false,
}) => {
  return (
    <>
      {/* banner */}
      <div className="mil-banner">
        <div className="container">
          <div
            className={
              rowReverse ? "row flex-sm-row-reverse mil-aic" : "row mil-aic"
            }
          >
            <div className="col-12 col-lg-6">
              <div className="mil-banner-text">
                <h1
                  className={button ? "mil-fs68 mil-mb60" : "mil-fs68"}
                  dangerouslySetInnerHTML={{ __html: title }}
                />
                {button !== false && (
                  <Link href={button.link} className="mil-btn mil-c-gone">
                    {button.label}
                  </Link>
                )}
              </div>
            </div>
            <div className="col-12 col-lg-6 mil-banner-image-frame">
              <div
                className={
                  !imgLayout
                    ? "mil-banner-img"
                    : `mil-banner-img mil-${imgLayout}`
                }
              >
                <Image
                  src={image.url}
                  fill
                  sizes="(max-width: 768px) 100vw, 80vw"
                  priority
                  alt={image.alt}
                  className="mil-scale-img"
                  data-value-1=".75"
                  data-value-2="1.11"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* banner end */}
    </>
  );
};
export default HeroOne;
