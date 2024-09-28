import { gql } from "@apollo/client";

export const GET_CART = gql`
  query GqlGetCart($uuid: ID) {
    getCart(uuid: $uuid) {
      uuid
      currency
      cartItems {
        uuid
        detail
        quantity
        options
        menuItem {
          name
          slug
          description
          image
          price
          options
          calories
          uuid
          status
        }
        cart {
          uuid
          currency
          guest {
            uuid
            firstname
            lastname
            email
            phone
            address {
              uuid
              addressline1
              addressline2
              postcode
              state
              city
              country
              active
            }
          }
        }
      }
      guest {
        email
        firstname
        id
        lastname
        order {
          grand_total
          delivery_time
          currency_code
          id
          quantity
          status
        }
        phone
        uuid
        address {
          addressline1
          city
          country
          id
          postcode
          state
          updated_at
        }
      }
    }
  }
`;
