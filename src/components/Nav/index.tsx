import { Box, Stack, SvgIcon } from '@mui/material';
import Logo from '@/assert/icon.svg';
import React from 'react';
import style from './index.less';

const LogoIcon = () => {
  return <img src={Logo} style={{ margin: '24px 0' }} />;
};

const Item = (props: any) => {
  return (
    <div
      style={
        props?.active
          ? {
              width: '20px',
              height: '20px',
              background: '#9F2AEC',
              borderRadius: '4px',
            }
          : {
              width: '20px',
              height: '20px',
              background: '#575D64',
              borderRadius: '4px',
            }
      }
    ></div>
  );
};

const Nav = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        backgroundColor: '#282B32',
        width: '56px',
        position: 'relative',
      }}
    >
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
      >
        <LogoIcon />
        <Item active={true} />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </Stack>
      <Stack
        direction="column"
        justifyContent="center"
        alignItems="center"
        spacing={2}
        style={{
          bottom: '100px',
        }}
        className={style.alignCenter}
      >
        <Item />
        <Item />
        <Item />
      </Stack>
    </Box>
  );
};

export default Nav;
