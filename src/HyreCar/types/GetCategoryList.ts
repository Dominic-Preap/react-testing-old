/* tslint:disable */
/* eslint-disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GetCategoryList
// ====================================================

export interface GetCategoryList_viewer_categoryList {
  __typename: "Category";
  /**
   * Category unique ID
   */
  categoryID: number | null;
  name: string | null;
}

export interface GetCategoryList_viewer {
  __typename: "Viewer";
  categoryList: (GetCategoryList_viewer_categoryList | null)[] | null;
}

export interface GetCategoryList {
  /**
   * Data under client context
   */
  viewer: GetCategoryList_viewer | null;
}
