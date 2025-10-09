import Data from "@data/sections/services-2.json";
import Image from "next/image";

const ServicesTwoSection = ({ paddingTop = 120, paddingBottom = 90, data }) => {
  return (
    <>
      {/* iconboxes */}
      <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
        <div className="container">
          <div className="row">
            {data.map((item, key) => (
              <div className="col-md-4" key={`services2-item-${key}`}>
                <div className="mil-iconbox mil-mb30">
                  <Image
                    src={`http://91.98.36.223${item.image.url}`}
                    height={100}
                    width={100}
                    alt="icon"
                    className="mil-mb30 mil-up"
                  />
                  <h4 className="mil-fs20 mil-mb30 mil-up">{item.title}</h4>
                  <p
                    className="mil-text mil-fs16 mil-up"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* iconboxes end */}
    </>
  );
};
export default ServicesTwoSection;
