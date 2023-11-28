import {
    DClose,
    DDescription,
    DTitle,
} from "../../styled-components/Modal.styles.tsx";
import FormSignUp from "../Login/Forms/FormSignUp";
import AlternateForm from "../Login/AlternateForm";
import FormLogin from "../Login/Forms/FormLogin";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";

function LoginOrSignUp(isSignUp: boolean) {
    const LogInInfo = {
        title: "Bem-vinda(o) de volta",
        description: "Logue para comprar o melhor equipamento por menos ",
        question: "Não tens conta com a gente?",
        buttonTitle: "CADASTRAR",
    };
    const SignUpInfo = {
        title: "Bem-vinda(o)",
        description: "Cadastre-se conosco e encontre seu equipamento ",
        question: "Tens conta com a gente?",
        buttonTitle: "LOGIN",
    };

    return (
        <>
            <div
                style={{
                    display: "flex",
                    flexFlow: "column",
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                }}
            >
                <DTitle>{isSignUp ? SignUpInfo.title : LogInInfo.title}</DTitle>
                <DDescription>
                    <VisuallyHidden>{isSignUp ? SignUpInfo.description : LogInInfo.description }</VisuallyHidden>
                    </DDescription>
                        </div>

                    {isSignUp ? <FormSignUp/> : <FormLogin/>}
                        {isSignUp
                            ? AlternateForm(SignUpInfo.question, SignUpInfo.buttonTitle)
                            : AlternateForm(LogInInfo.question, LogInInfo.buttonTitle)}
                        <DClose asChild></DClose>
                    </>
                    );
                    }

                    export default LoginOrSignUp;
