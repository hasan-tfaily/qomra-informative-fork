import Data from "@data/sections/partners-2";
import Image from "next/image";

const PartnersTwoSection = ({
  title = false,
  paddingTop = 0,
  paddingBottom = 90,
  images,
}) => {
  return (
    <>
      {/* partners */}
      <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
        <div className="container">
          <div className="row">
            {title && (
              <div className="col-12 mil-tac mil-mb90">
                <p
                  className="mil-text mil-fs30 mil-light mil-up"
                  dangerouslySetInnerHTML={{ __html: title }}
                />
              </div>
            )}
          </div>
        </div>
      </div>
      {/* partners end */}
    </>
  );
};
export default PartnersTwoSection;
