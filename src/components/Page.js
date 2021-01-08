import styled from "styled-components";

const Wrapper = styled.div`
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
`;

export function Page({ children }) {
    return (
        <Wrapper>
            {children}
        </Wrapper>
    );
}