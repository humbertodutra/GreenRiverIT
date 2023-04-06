import PropTypes from "prop-types";
import clsx from "clsx";
import SectionTitle from "@components/section-title/layout-02";
import Service from "@components/service";
import { SectionTitleType, ItemType } from "@utils/types";

const ServiceArea = ({ className, id, space, data }) => (
    
    <div
      className={clsx(
        "rn-service-area",
        space === 1 && "rn-section-gapTop",
        space === 2 && "pb--70",
        className
      )}
      id={id}
    >
      <div className="container">
        {data?.section_title && (
           <div className="container mb--40">
           <div className="row">
               <div className="col-12">
                   {data?.section_title && (
                       <SectionTitle
                           className="about-title-m"
                           {...data.section_title}
                       />
                   )}
               </div>
           </div>
       </div>
        )}
        {data?.items && (
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-5 g-5">
            {data.items.map((item) => (
              <div className="col mb-4" key={item.id}>
                <Service
                  title={item.title}
                  subtitle={item.subtitle}
                  path={item.path}
                  description={item.description}
                  image={item.images[0]}
                />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
  

ServiceArea.propTypes = {
    className: PropTypes.string,
    id: PropTypes.string,
    space: PropTypes.oneOf([1, 2]),
    data: PropTypes.shape({
        section_title: SectionTitleType,
        items: PropTypes.arrayOf(ItemType),
    }),
};
ServiceArea.defaultProps = {
    space: 1,
};

export default ServiceArea;
