import { gql } from "@apollo/client";

export const GET_MENU_ITEMS = gql`
  query GqlGetMenuItems($menu_uuid: ID, $page: Int, $first: Int, $search: String, $filter: [FilterInput]) {
    getMenuItems(input: { menu_uuid: $menu_uuid, page: $page, first: $first, search: $search, filter: $filter }) {
      data {
        uuid
        name
        description
        image
        price
        options
        slug
        menu {
          restaurant {
            bank_info {
              currency
            }
          }
          options_config {
            uuid
            name
            type
            options {
              selection {
                amount
                name
              }
              deselection {
                amount
                name
              }
              extras {
                amount
                name
              }
            }
          }
          uuid
          name
          is_active
        }
        menuCategory {
          uuid
          title
          description
          id
        }
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;
