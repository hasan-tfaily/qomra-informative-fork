import Data from "@data/sections/experience.json";
import Link from "next/link";

const ExperienceSection = () => {
  return (
    <>
        {/* experience */}
        <div>
            <div className="container">
                <div className="row mil-jcb">
                    <div className="col-lg-6">
                        <div className="mil-exp-box mil-up">
                            <div className="mil-exp-content mil-up">
                                <div className="mil-exp-number" dangerouslySetInnerHTML={{__html : Data.label.subtitle}} />
                                <h2 className="mil-exp-text mil-fs42" dangerouslySetInnerHTML={{__html : Data.label.title}} />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-5 mil-p-120-0">
                        <p className="mil-text mil-fs30 mil-light mil-mb90 mil-up" dangerouslySetInnerHTML={{__html : Data.title}} />
                        {Data.items.map((item, key) => (
                        <div className={key+1 !== Data.items.length ? "mil-counter-item mil-mb90" : "mil-counter-item"} key={`experience-item-${key}`}>
                            <h5 className="mil-fs20 mil-mb30 mil-up">{item.label} <Link href={item.link} className="mil-text-link">{item.projectName}</Link></h5>
                            <div className="mil-prog-track mil-mb30 mil-add-class mil-up">
                                <div className="mil-prog" data-number={item.num}></div>
                            </div>
                            <div className="mil-counter-text mil-up">
                                <div className="mil-counter-number">
                                    <span className="mil-counter" data-number={item.num}>00</span><span className="mil-percent">{item.numAfter}</span>
                                </div>
                                <div className="mil-text mil-fs16" dangerouslySetInnerHTML={{__html : item.text}} />
                            </div>
                        </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
        {/* experience end */}
    </>
  );
};

export default ExperienceSection;