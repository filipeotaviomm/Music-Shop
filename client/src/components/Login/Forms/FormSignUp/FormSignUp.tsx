import { IContext } from "../../../../types/types";

import { useUserContext } from "../../../../providers/UserContext";
import UserName from "./UserName";
import Email from "./Email";
import Password from "./Password";
import Confirmation from "./Confirmation";
import React from "react";

function FormSignUp() {
  const { step,signUpInfo } = useUserContext() as IContext;
  React.useEffect(() => {
    console.log(signUpInfo);
  }, [signUpInfo]);
  return (
    <>
      {step === 0 && <UserName />}
      {step === 1 && <Email />}
      {step === 2 && <Password />}
      {step === 3 && <Confirmation />}
      <></>
    </>
  );
}

export default FormSignUp;
