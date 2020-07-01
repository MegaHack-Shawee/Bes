import styled from 'styled-components/native';

export default styled.Text`
    color: ${props => props.color || '#000'};
    font-weight: ${props => props.weight || 'normal'};
    font-size: ${props => props.size || '12px'};
`;
