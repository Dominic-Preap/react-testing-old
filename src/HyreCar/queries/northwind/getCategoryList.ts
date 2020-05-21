import { gql } from 'apollo-boost';

export const GET_CATEGORY_LIST = gql`
  query GetCategoryList {
    viewer {
      categoryList {
        categoryID
        name
      }
    }
  }
`;
