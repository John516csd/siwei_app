import React, { useContext, useState } from 'react';
import { DataProvider } from '@/pages/index';
import { Box, Grid, Skeleton, Typography } from '@mui/material';
import NoteItem from '@/components/NoteItem';
import LoadingCom from '../Loading';

const MeetingList = (props: API.IMeetingListProp) => {
  const meetingMap = useContext<API.IMeetingMap>(DataProvider);
  const { isLoading, activeId, changeActiveId } = props;

  return (
    <Box
      sx={{
        height: '100vh',
        width: '328px',
        background: '#1B1E28',
        color: '#FFFFFF',
        padding: '24px 16px',
      }}
    >
      <Grid container direction="column">
        <Grid item>
          <h2 style={{ color: '#FFFFFF' }}>Meeting Notes</h2>
        </Grid>
        <Grid item>
          <Box
            sx={{
              height: 'calc(100vh - 75px)',
              overflow: 'scroll',
              overflowX: 'hidden',
              overflowY: 'auto',
            }}
          >
            {isLoading ? (
              <LoadingCom />
            ) : (
              Object.keys(meetingMap).map((key) => {
                return (
                  <NoteItem
                    dayNotes={meetingMap[key]}
                    title={key}
                    key={key}
                    activeId={activeId}
                    handleChangeId={changeActiveId}
                  />
                );
              })
            )}
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MeetingList;
