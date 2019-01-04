import styled from 'styled-components';
import media from '../../styles/media';
import { fontSizeREM } from '../../styles/mixins';

export const Section = styled.section`
	padding: 30px 0;
	${media.desktop`padding: 40px 0;`}
	//${fontSizeREM(20)}
`;

export default Section;
