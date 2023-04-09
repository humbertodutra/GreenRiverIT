import PropTypes from "prop-types";
import clsx from "clsx";
import AddressBox from "@components/address-box";
import React, { useEffect } from "react";


const ContactTopArea = ({ data, space, className }) => {
    const abcd = data
    
    // useEffect(() => {
    //     console.log(abcd.data["contactInfo1:"]); // Accessing "contactInfo1:" key
    //     console.log(abcd.data["contactInfo2:"]); // Accessing "contactInfo2:" key
        
    // }, []);

    return (
    
    <div
        className={clsx(
            "rn-contact-top-area bg_color--5",
            space === 1 && "rn-section-gapTop",
            className
        )}
    >
        <div className="container">
            <div className="row g-5">
                <div
                    className="col-lg-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <div className="section-title mb--30 text-center">
                        <h2 className="title">{abcd.data["contactInfo1:"]}</h2>
                        
                    </div>
                </div>
            </div>
            <div className="row g-5">
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="150"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="feather-headphones"
                        title={abcd.data["contactInfo2:"]}
                        phoneNumbers={[abcd.data["contactInfo3:"]]}
                    />
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="200"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="feather-mail"
                        title={abcd.data["contactInfo4:"]}
                        emails={[abcd.data["contactInfo6:"]]}
                    />
                </div>
                <div
                    className="col-lg-4 col-md-6 col-sm-6 col-12"
                    data-sal="slide-up"
                    data-sal-delay="250"
                    data-sal-duration="800"
                >
                    <AddressBox
                        icon="feather-map-pin"
                        title={abcd.data["contactInfo5:"]}
                        address={abcd.data["contactInfo7:"]}
                    />
                </div>
            </div>
        </div>
    </div>
    )}
    ;

ContactTopArea.propTypes = {
    space: PropTypes.oneOf([1, 2]),
    className: PropTypes.string,
};

ContactTopArea.defaultProps = {
    space: 1,
};

export default ContactTopArea;
