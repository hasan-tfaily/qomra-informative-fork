import Data from "@data/sections/services-2.json";

const ServicesTwoSection = ( { paddingTop = 120, paddingBottom = 90,data } ) => {
    return (
        <>
            {/* iconboxes */}
            <div className={`mil-p-${paddingTop}-${paddingBottom}`}>
                <div className="container">
                    <div className="row">
                        {data.map((item, key) => (
                        <div className="col-md-4" key={`services2-item-${key}`}>
                            <div className="mil-iconbox mil-mb30">
                                <img src={`http://137.184.197.76:1337${item.image.url}`} alt="icon" className="mil-mb30 mil-up" />
                                <h4 className="mil-fs20 mil-mb30 mil-up">{item.title}</h4>
                                <p className="mil-text mil-fs16 mil-up" dangerouslySetInnerHTML={{__html : item.description}} />
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