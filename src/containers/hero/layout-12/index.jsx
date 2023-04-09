import PropTypes from "prop-types";
import Image from "next/image";
import Button from "@ui/button";
import Anchor from "@ui/anchor";
import {
  HeadingType,
  TextType,
  ButtonType,
  ItemType,
  ImageType,
} from "@utils/types";

const HeroArea = ({ data: { headings, texts, buttons, items, image } }) => (
  <div className="banner-area banner-12 bg_image--23 bg_image with-down-shadow">
    {image?.src && (
      <Image
        className="slider-bg"
        src={image.src}
        alt="Slider BG"
        quality={100}
        priority
        fill
        sizes="100vw"
        style={{
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(60%)", // darken the image by 30%
        }}
      />
    )}
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="banner-xii-wrapper">
            <div className="banner-content-wrapper">
              {headings?.[0]?.content && (
                <p className="pre-title">{headings[0].content}</p>
              )}
              {headings?.[1]?.content && (
                <h1 className="title">{headings[1].content}</h1>
              )}

              <div className="wallet-image-wrapper">
                {items?.map(({ id, title, path, image: walletImg }) => (
                  <div
                    key={id}
                    className=""
                    style={{ position: "relative", width: "38px", height: "38px", margin: "8px" }}
                  >
                    {walletImg?.src && (
                      <img
                        src={walletImg.src}
                        alt={walletImg?.alt || "wallet_image"}
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          
                        }}
                      />
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

HeroArea.propTypes = {
  data: PropTypes.shape({
    headings: PropTypes.arrayOf(HeadingType),
    texts: PropTypes.arrayOf(TextType),
    buttons: PropTypes.arrayOf(ButtonType),
    items: PropTypes.arrayOf(ItemType),
    image: ImageType.isRequired,
  }),
};

export default HeroArea;
