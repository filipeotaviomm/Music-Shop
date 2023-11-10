import {useUserContext} from "../../providers/UserContext";
import * as Dialog from '@radix-ui/react-dialog';
import {colors, fontSize} from "../../styled-components/root.ts";
import {VisuallyHidden} from "@radix-ui/react-visually-hidden";
import {Cart} from "../../types/types";
import {Field, Form, SendBtn} from "../../styled-components/Modal.styles.tsx";

function UserSignUp() {
    const { isSignUp, setIsSignUp } =
        useUserContext() as Cart;
    return (
        <>
            <Dialog.Title
                style={{
                    textAlign: "center",
                    fontWeight: "500",
                    fontSize: fontSize.h2,
                    marginBlockEnd: "16px",
                    marginBlockStart: "80px",
                }}
            >
                CADASTRO
            </Dialog.Title>
            <VisuallyHidden asChild>
                <Dialog.Description>Crie sua conta conosco</Dialog.Description>
            </VisuallyHidden>

            <Form>
                <Field>
                    <label htmlFor="name">E-mail</label>
                    <input id="name" />
                </Field>
                <Field>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <label htmlFor="password">Senha</label>
                    </div>
                    <input type="password" id="password" />
                </Field>
                <Field>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <label htmlFor="confirmPassword">Confirmar senha</label>
                    </div>
                    <input type="password" id="confirmPassword" />
                </Field>

                <Dialog.Close asChild>
                    <SendBtn
                        style={{
                            position: "absolute",
                        }}
                    >
                        CADASTRAR
                    </SendBtn>
                </Dialog.Close>
            </Form>

            <div
                style={{
                    display: "flex",
                    marginTop: 25,
                    justifyContent: "flex-end",
                }}
            ></div>

            <div
                style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "1rem",
                }}
            >
                <h3>Tens conta com a gente?</h3>
                <button
                    onClick={() => setIsSignUp(!isSignUp)}
                    style={{
                        textDecoration: "underline",
                        backgroundColor: "inherit",
                        color: colors.purple,
                        fontWeight: 500,
                    }}
                >
                    LOGIN
                </button>
            </div>
        </>
    );
}
export {UserSignUp};