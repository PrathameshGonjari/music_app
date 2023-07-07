import styled from 'styled-components';

import { Typography } from '@mui/material';

export const Wrapper = styled.div`
  img {
    width: 180px;
    height: 180px;
    object-fit: contain;
  }
`;

export const TinyText = styled(Typography)({
  fontSize: "0.75rem",
  opacity: 0.38,
  fontWeight: 500,
  letterSpacing: 0.2,
});
