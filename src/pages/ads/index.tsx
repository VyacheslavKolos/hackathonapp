import { Box } from '@mui/material';
import TabLayout from '../components/TabLayout';
import AdsItem from '../components/AdsItem/AdsItem.tsx';

const AdsPage = () => (
  <TabLayout>
    <Box display="flex" flexDirection="column" gap="17px">
      <AdsItem />
      <AdsItem />
      <AdsItem />
    </Box>
  </TabLayout>
);

export default AdsPage;
