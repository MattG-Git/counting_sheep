import { gql } from '@apollo/client';


export const QUERY_sleepData = gql`
query getSleepData {
  sleepData {
    date
    hours
    quality
  }
}
`;
