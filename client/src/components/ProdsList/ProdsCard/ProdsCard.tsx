import {
  LiProducts,
  ImgProduct,
  SpanName,
  ImgStars,
  SpanPrice,
  LiProducts1,
  ImgProduct1,
  SpanName1,
  ImgStars1,
  SpanPrice1,
} from "./styles";
import Stars from "../../../assets/5-stars.png";

const ProdsCard = () => {
  return (
    <>
      <LiProducts>
        <ImgProduct
          src="https://d2r9epyceweg5n.cloudfront.net/stores/001/582/790/products/whatsapp-image-2023-05-10-at-21-28-10-11-ee9a7cf8b6b766768716838251697178-1024-1024.jpeg"
          alt="Product image"
        />
        <SpanName>Fender Stratocaster 1970 Special edition</SpanName>
        <ImgStars src={Stars} alt="Stars icon" />
        <SpanPrice>$1800,00</SpanPrice>
      </LiProducts>
      <LiProducts1>
        <ImgProduct1
          src="https://media.karousell.com/media/photos/products/2020/12/31/ernie_ball_music_man_axis_1609394581_84f59bc2_progressive"
          alt="Product image"
        />
        <SpanName1>Music Man Axis Super Sport</SpanName1>
        <ImgStars1 src={Stars} alt="Stars icon" />
        <SpanPrice1>$1800,00</SpanPrice1>
      </LiProducts1>
    </>
  );
};

export default ProdsCard;
