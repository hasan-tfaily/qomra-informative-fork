const ProductRelated = ({ items, photos }) => {
  return (
    <>
      <div className="mil-p-0-60">
        <h2 className="mil-fs-42 mil-mb60 mil-up"> Gallery</h2>
        <div className="mil-instagram mil-up">
          {photos.map((item, key) => (
            <div className="mil-insta" key={`instagram-gallery-item-${key}`}>
              <img
                src={`http://137.184.197.76:1337${item.url}`}
                alt={item.alt}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
export default ProductRelated;
