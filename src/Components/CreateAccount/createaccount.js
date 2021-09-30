import React from "react";
import { AuthContext } from "../Auth/AuthProvider";
import BankForm from "../BankForm/BankForm";

export default function CreateAccount() {

    const auth = React.useContext(AuthContext);  

    function handleCreate(newUser){
      auth.users.push({name: newUser.name, email: newUser.email, password: newUser.password, balance: 100, isLoged: false
      })
      console.log()
      return true
    }
    return (

      <BankForm
        bgcolor="black"
        txtcolor='white'
        label="Create Account"
        handle={handleCreate}
        hideAmount={true}
        successButton="Add nother account"
    />
    )
  }