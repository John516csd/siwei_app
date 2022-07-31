import { Box } from '@mui/material';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { getDateTime, getDuringTime } from '@/utils';
import style from './index.less';

const content = (props: API.IContentProp) => {
  const { meetingList, activeId } = props;
  const [activeNote, setActiveNote] = useState<API.INotesItem>();
  useEffect(() => {
    for (let i = 0; i < meetingList.length; ++i) {
      let noteItem = meetingList[i];
      if (noteItem.id === activeId) {
        setActiveNote(noteItem);
        break;
      }
    }
  }, [meetingList, activeId]);
  return (
    <Box
      sx={{
        width: 'calc(100% - 384px)',
        height: '100vh',
        position: 'absolute',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#1B1E28',
      }}
    >
      {activeNote ? (
        <Card sx={{ width: 320, marginBottom: '200px' }} className={style.card}>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Meet note of the Day
            </Typography>
            <Typography variant="h5" component="div">
              {getDuringTime(activeNote?.create_time, activeNote?.duration)}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {getDateTime(activeNote?.create_time)}
            </Typography>
            <Typography variant="body2">{activeNote?.title}</Typography>
          </CardContent>
        </Card>
      ) : (
        <Typography
          variant="h3"
          sx={{ marginBottom: '200px', color: '#ffffff' }}
        >
          Not active note
        </Typography>
      )}
    </Box>
  );
};

export default content;
