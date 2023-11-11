import * as Styles from "./styles";
import Logo from "../../assets/logo.svg";
import Instagram from "../../assets/instagram.png";
import Facebook from "../../assets/facebook.png";
import Tweeter from "../../assets/twitter.png";
import Pinterest from "../../assets/pinterest.png";
import AppleStore from "../../assets/appleStore.png";
import GooglePlay from "../../assets/googlePlay.png";
import { corporationOptions, helpOptions } from "../../services/database.ts";

function Footer() {
  return (
    <Styles.Footer>
      <Styles.DivContainer>
        <Styles.DivLeft>
          <Styles.DivLogos>
            <Styles.StoreLogo src={Logo} alt="Store's logo" />
            <Styles.UlSocialMedia>
              <Styles.LiSocialMedia>
                <Styles.AnchorMedias
                  href="https://www.instagram.com/"
                  target="_blank"
                >
                  <Styles.ImgMediaLogos src={Instagram} alt="Instagram logo" />
                </Styles.AnchorMedias>
              </Styles.LiSocialMedia>
              <Styles.LiSocialMedia>
                <Styles.AnchorMedias
                  href="https://www.facebook.com/"
                  target="_blank"
                >
                  <Styles.ImgMediaLogos src={Facebook} alt="Facebook logo" />
                </Styles.AnchorMedias>
              </Styles.LiSocialMedia>
              <Styles.LiSocialMedia>
                <Styles.AnchorMedias
                  href="https://www.tweeter.com/"
                  target="_blank"
                >
                  <Styles.ImgMediaLogos src={Tweeter} alt="Tweeter logo" />
                </Styles.AnchorMedias>
              </Styles.LiSocialMedia>
              <Styles.LiSocialMedia>
                <Styles.AnchorMedias
                  href="https://www.pinterest.com/"
                  target="_blank"
                >
                  <Styles.ImgMediaLogos src={Pinterest} alt="Pinterest logo" />
                </Styles.AnchorMedias>
              </Styles.LiSocialMedia>
            </Styles.UlSocialMedia>
          </Styles.DivLogos>
          <Styles.DivTerms>
            <Styles.SpanTerms>TERMOS E CONDIÇÕES</Styles.SpanTerms>
            <Styles.SpanTerms>POLÍTICA DE PRIVACIDADE</Styles.SpanTerms>
          </Styles.DivTerms>
        </Styles.DivLeft>
        <Styles.DivRight>
          <Styles.DivColumns>
            <Styles.TitleColumns>Ajuda e informações</Styles.TitleColumns>
            <Styles.UlOptions>
              {helpOptions.map((options) => (
                <Styles.Li>{options}</Styles.Li>
              ))}
            </Styles.UlOptions>
          </Styles.DivColumns>
          <Styles.DivColumns>
            <Styles.TitleColumns>Institucional</Styles.TitleColumns>
            <Styles.UlOptions>
              {corporationOptions.map((options) => (
                <Styles.Li>{options}</Styles.Li>
              ))}
            </Styles.UlOptions>
          </Styles.DivColumns>
          <Styles.DivColumns>
            <Styles.TitleColumns>Download</Styles.TitleColumns>
            <Styles.UlDownload>
              <Styles.LiDownload>
                <Styles.AnchorStores
                  href="https://www.apple.com/br/app-store/"
                  target="_blank"
                >
                  <Styles.ImgStores src={AppleStore} alt="Apple store link" />
                </Styles.AnchorStores>
              </Styles.LiDownload>
              <Styles.LiDownload>
                <Styles.AnchorStores
                  href="https://play.google.com/store/apps/"
                  target="_blank"
                >
                  <Styles.ImgStores src={GooglePlay} alt="Google Play link" />
                </Styles.AnchorStores>
              </Styles.LiDownload>
            </Styles.UlDownload>
          </Styles.DivColumns>
        </Styles.DivRight>
      </Styles.DivContainer>
    </Styles.Footer>
  );
}

export default Footer;
