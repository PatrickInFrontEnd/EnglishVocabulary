import styled from "styled-components";

const MainPageWrapper = styled.div`
    width: 100%;
    min-height: 100vh;
    padding: 10px 15px;
    display: grid;
    grid-gap: 10px;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
`;

export default MainPageWrapper;
