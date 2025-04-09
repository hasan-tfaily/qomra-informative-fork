import Data from "@data/sections/call-to-action-2.json";
import Link from "next/link";

const CallToActionTwoSection = ({ darkUI = false, data }) => {
  let uiClass = "accent";

  if (darkUI) {
    uiClass = "soft";
  }

  // Ensure data is defined and use default values from Data if it's undefined
  const title = data?.title ?? Data.title;
  const differentColorWord =
    data?.differentColorWord ?? Data.differentColorWord;
  const description = data?.description ?? Data.description;

  return (
    <>
      {/* call to action */}
      <div className={`mil-${uiClass}-section mil-up mil-p-180-180`}>
        <div className="container">
          <h2 className="mil-fs68 mil-light mil-mb30 mil-up">
            {title}{" "}
            <Link
              href={Data.line1.link}
              className={
                darkUI
                  ? "mil-text-link mil-accent mil-c-gone"
                  : "mil-text-link mil-accent-soft mil-c-gone"
              }
            >
              {differentColorWord}
            </Link>
          </h2>
          <p className="mil-text mil-fs26 mil-light mil-up">{description} !</p>
        </div>
      </div>
      {/* call to action end */}
    </>
  );
};

export default CallToActionTwoSection;
