import gql from "graphql-tag";
export default gql`
  input ItemInput {
    delete: Int
    id: Int
    sku: Int
    name: String
    expired_time: Int
    remark: String
    description: String
  }

  type Item {
    delete: Int
    id: Int
    sku: Int
    name: String
    expired_time: Int
    remark: String
    description: String
    created_at: DateTime
    updated_at: DateTime
    deleted_at: DateTime
  }

  type Mutation {
    mutateItem(data: ItemInput!): Item
  }

  type Query {
    getItem: Item
  }
`;
