import PropTypes from "prop-types";
import clsx from "clsx";

const GoogleMapArea = ({ space, className }) => (
  <div
    className={clsx(
      "rn-contact-map-area position-relative",
      space === 1 && "rn-section-gapTop",
      className
    )}
  >
    <div className="container">
      <div className="row g-5">
        <div
          className="col-12"
          data-sal="slide-up"
          data-sal-delay="150"
          data-sal-duration="800"
        >
          <div className="connect-thumbnail">
            <iframe
              title="Google Map"
              src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3748733.127605984!2d${-43.946666315479895}!3d${-19.92034705449044}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM5DCsDE0JzQwLjciUyA0M8KwNDMnNTQuNiJX!5e0!3m2!1sen!2sbd!4v1637267405453!5m2!1sen!2sbd&t=k`} // Add &t=k to set satellite view by default
              height="550"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  </div>
);

GoogleMapArea.propTypes = {
  space: PropTypes.oneOf([1, 2]),
  className: PropTypes.string,
};

GoogleMapArea.defaultProps = {
  space: 1,
};

export default GoogleMapArea;
