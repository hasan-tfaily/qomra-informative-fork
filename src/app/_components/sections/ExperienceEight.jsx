import Data from "@data/sections/experience-8.json";

const ExperienceEightSection = ({ data }) => {
  return (
    <>
      {/* experience */}
      <div className="">
        <div className="container mil-p-120-120">
          <div className="row">
            <div className="col-lg-2"></div>
            <div className="col-lg-8">
              <p
                className="mil-text mil-fs30 mil-light mil-up"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* experience end */}
    </>
  );
};

export default ExperienceEightSection;
