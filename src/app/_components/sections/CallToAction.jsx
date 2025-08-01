import Data from "@data/sections/call-to-action.json";
import Link from "next/link";

const CallToActionSection = ({ data = {}, href }) => {
  return (
    <>
      {/* call to action */}
      <div>
        <div className="container">
          <div className="mil-cta mil-up">
            <div className="row mil-aic">
              <div className="col-lg-8 mil-up">
                <p className="mil-text mil-fs26 mil-light mil-mb30">
                  {data?.title ?? Data.title}
                  <br></br>
                  {data?.description ?? ""}
                </p>
              </div>
              <div className="col-lg-4 mil-jce mil-992-jcs mil-up">
                <Link
                  href={href ?? data?.button?.link ?? Data.button.link ?? "/"}
                  className="mil-btn mil-btn-soft mil-mb30 mil-c-gone"
                  style={{
                    backgroundColor: "#000000",
                    color: "#ffffff",
                    borderColor: "#000000",
                  }}
                >
                  {data?.button?.label ?? Data.button.label}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* call to action end */}
    </>
  );
};
export default CallToActionSection;
