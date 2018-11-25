import { gql } from 'apollo-server-express';

const Skill = gql`
	type Skill {
		title: String!
		iconName: String!
		group: String!
	}
`;

export const types = () => [Skill];

export const typeResolvers = {};
