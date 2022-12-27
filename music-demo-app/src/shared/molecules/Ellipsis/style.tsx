import styled from "styled-components";

export const MainWrapper = styled.div`
  .overflow {
    overflow: hidden;
    -ms-text-overflow: ellipsis;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  .overflow:hover {
    overflow: visible;
  }

  .overflow:hover span {
    position: relative;
    background-color: white;

    box-shadow: 0 0 4px 0 black;
    border-radius: 1px;
  }
`;
