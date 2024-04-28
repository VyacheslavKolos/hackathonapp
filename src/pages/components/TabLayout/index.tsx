import { FC, ReactNode } from 'react';

import { Box } from '@mui/material';

type Props = {
  children: ReactNode;
};

const TabLayout: FC<Props> = ({ children }) => (
  <Box
    marginTop="30px"
    sx={{
      maxHeight: '900px',
      overflowY: 'auto',
    }}
  >
    {children}
  </Box>
);

export default TabLayout;
