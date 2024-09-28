import { gql } from "@apollo/client";
import { CORE_MENU_FIELDS, CORE_MENU_ITEM_FIELDS } from "../../../models";

export const GQL_GET_MENU_ITEM = gql`
  ${CORE_MENU_FIELDS}
  ${CORE_MENU_ITEM_FIELDS}
  query GqlGetMenuItemByUuid($uuid: ID!) {
    getMenuItem(uuid: $uuid) {
      ...CoreMenuItemFields
      menu {
        ...CoreMenuFields
      }
    }
  }
`;
