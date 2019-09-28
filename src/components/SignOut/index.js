import React from 'react';
import { withFirebase } from '../Firebase';
import CustomButton from '../custom-button/custom-button.component'
const SignOutButton = ({ firebase }) => (
  <CustomButton onClick={firebase.doSignOut}>
    Salir
  </CustomButton>
);
export default withFirebase(SignOutButton);