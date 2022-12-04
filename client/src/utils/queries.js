import { gql } from '@apollo/client';

export const QUERY_ME = gql`
    {
        me {
            _id
            username
            sleep {
                _id
                date
                hours
                quality
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
