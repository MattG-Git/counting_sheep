import { gql } from '@apollo/client';

export const QUERY_LOGIN = gql`
query loginUser($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
  `;

export const QUERY_sleepData = gql`
    query getSleepData($username: String) {
        sleepData(username: $username) {
            _id
            date
            hours
            quality
        }
    }
`;
