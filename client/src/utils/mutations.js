import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $password: String!) {
    addUser(username: $username, password: $password) {
      token
      user {
        username
        _id
      }
    }
  }
`;

export const LOGIN_USER = gql`
    mutation login($username: String!, $password: String!) {
        login(username: $username, password: $password) {
            token
            user {
                _id
                username
            }
        }
    }
`;

export const ADD_SLEEP = gql`
    mutation addSleep($date: String!, $hours: Int!, $quality: Int!) {
        addSleep(date: $date, hours: $hours, quality: $quality) {
            _id
            date
            hours
            quality
        }
    }
`;