import * as React from 'react';
import { styled } from '@mui/material/styles';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, {
  AccordionSummaryProps,
} from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import { Typography, Card, CardContent, Tooltip } from '@mui/material';
import style from './index.less';
import { INoteCardProps, IProps } from './typing';
import { getDateTime, getDuringTime } from '@/utils';

const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  backgroundColor: '#1B1E28',
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));

const AccordionSummary = styled((props: AccordionSummaryProps) => (
  <MuiAccordionSummary
    expandIcon={
      <ArrowForwardIosSharpIcon sx={{ fontSize: '0.6rem', color: '#ffffff' }} />
    }
    {...props}
  />
))(({ theme }) => ({
  backgroundColor: '#1B1E28',
  flexDirection: 'row-reverse',
  '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
    transform: 'rotate(90deg)',
  },
  color: '#ffffff',
}));

const AccordionDetails: any = styled(MuiAccordionDetails)(({ theme }) => ({
  color: '#ffffff',
  padding: '0px',
}));

const NoteCard = (props: INoteCardProps) => {
  const { noteData, handleChangeId, activeId } = props;
  return (
    <Card
      variant="outlined"
      sx={
        noteData.id === activeId
          ? {
              background: '#41454B',
              border: '1px solid #41454B',
              marginBottom: '10px',
            }
          : {
              background: '#1B1E28',
              border: '1px solid #41454B',
              marginBottom: '10px',
            }
      }
      className={style.noteCard}
      onClick={() => {
        handleChangeId(noteData.id);
      }}
    >
      <CardContent
        sx={{
          height: '62px',
          padding: '8px 12px 0',
          color: '#ffffff',
        }}
      >
        <Tooltip title={noteData.title} placement="right">
          <Typography
            component="div"
            sx={{
              fontSize: '16px',
              width: '265px',
              textOverflow: 'ellipsis',
              overflow: 'hidden',
              whiteSpace: 'nowrap',
            }}
          >
            {noteData.title}
          </Typography>
        </Tooltip>
        <Typography color="#9DA3AB" sx={{ fontSize: '12px' }}>
          {getDuringTime(noteData.create_time, noteData.duration)}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default function CustomizedAccordions(props: IProps) {
  const dayNotes = props.dayNotes;
  const title = props.title;
  const changeActiveId = props.handleChangeId;
  const activeId = props.activeId;
  const [expanded, setExpanded] = React.useState<string[]>(['panel1']);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
      if (newExpanded) {
        setExpanded([...expanded, panel]);
      } else {
        setExpanded([...expanded].filter((item) => item !== panel));
      }
    };

  return (
    <div>
      <Accordion
        expanded={expanded.includes('panel1')}
        onChange={handleChange('panel1')}
      >
        <AccordionSummary>
          <Typography sx={{ fontSize: '14px', marginLeft: '5px' }}>
            {getDateTime(title)}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {dayNotes.map((note) => {
            return (
              <NoteCard
                noteData={note}
                key={note.id}
                handleChangeId={changeActiveId}
                activeId={activeId}
              />
            );
          })}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
