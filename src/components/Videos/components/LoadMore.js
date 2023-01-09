import React from 'react';

import {Button, Box} from '@mui/material/';

const LoadMore = ({video, onVideoSelect, displayCount, setDisplayCount}) => {
  const loadMore = (e) => {
    setDisplayCount(displayCount+5);

  }

  return(
    <Box>
      <Button variant="outlined" disabled={displayCount >= 50} onClick={loadMore}>Load More</Button>
    </Box>
  );

}

export default LoadMore;
