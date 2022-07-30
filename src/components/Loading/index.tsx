import { Skeleton } from '@mui/material';
import React from 'react';

const LoadingCom = () => {
  return (
    <React.Fragment>
      <Skeleton
        sx={{
          bgcolor: '#282B32',
          width: '100%',
          height: '32px',
          margin: '10px 0',
        }}
        variant="rectangular"
      />
      <Skeleton
        sx={{ bgcolor: '#282B32', width: '100%', height: '62px' }}
        variant="rectangular"
      />
      <Skeleton
        sx={{
          bgcolor: '#282B32',
          width: '100%',
          height: '32px',
          margin: '10px 0',
        }}
        variant="rectangular"
      />
      <Skeleton
        sx={{ bgcolor: '#282B32', width: '100%', height: '62px' }}
        variant="rectangular"
      />
      <Skeleton
        sx={{
          bgcolor: '#282B32',
          width: '100%',
          height: '32px',
          margin: '10px 0',
        }}
        variant="rectangular"
      />
      <Skeleton
        sx={{ bgcolor: '#282B32', width: '100%', height: '62px' }}
        variant="rectangular"
      />
    </React.Fragment>
  );
};

export default LoadingCom;
