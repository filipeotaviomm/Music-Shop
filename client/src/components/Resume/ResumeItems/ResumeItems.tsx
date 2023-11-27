import { Category } from "../../../styled-components/Header.styles.tsx";
import { nanoid } from "nanoid";
import { DefaultButton } from "../../../styled-components/Button.styles.ts";
import { ItemsWrapper } from "../../../styled-components/UserProfile.styles.ts";
import { colors } from "../../../styled-components/root.ts";
import { useNavigate } from "react-router-dom";
interface ResumeItemsProps {
  array: Array<{ url: string; text: string }>;
}

function ResumeItems({ array }: ResumeItemsProps) {
  const navigate = useNavigate();
  const currentURL: string = window.location.href;

  const hasName = (string: string) =>
    currentURL.includes(string)
      ? `2px solid ${colors.purpleBorder}`
      : "2px solid transparent";

  return (
    <ItemsWrapper>
      {array.map(({ text, url }) => (
        <Category key={nanoid()}>
          <DefaultButton
            style={{ outline: hasName(url), color: hasName(url) }}
            onClick={() => navigate(`/resumo/${url}`)}
          >
            {text}
          </DefaultButton>
        </Category>
      ))}
    </ItemsWrapper>
  );
}


export default ResumeItems;
