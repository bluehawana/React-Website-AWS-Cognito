import { CognitoUserPool } from 'amazon-cognito-identity-js';

const poolData  = {
  UserPoolId:'eu-north-1_SI38j3atU',
  ClientId:'4cm80rr1v2231mvs4licb4roi1'
};

export default new CognitoUserPool(poolData);