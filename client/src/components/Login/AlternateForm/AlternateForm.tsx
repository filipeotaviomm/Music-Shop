import { colors } from "../../../styled-components/root.ts";
import { useUserContext } from "../../../providers/UserContext";
import { IContext } from "../../../types/types";

function AlternateForm(question: string, buttonText: string) {
  const { isSignUp, setIsSignUp } = useUserContext() as IContext;

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <h3>{question}</h3>
      <button
        onClick={() => setIsSignUp(!isSignUp)}
        style={{
          textDecoration: "underline",
          backgroundColor: "inherit",
          color: colors.purple,
          fontWeight: 500,
            zIndex:1
        }}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default AlternateForm;
