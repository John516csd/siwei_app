import './index.less';
import React, { useEffect, useState } from 'react';
import { fetchAData, fetchBData } from '@/api/data';
import { decrypto, encrypto, key } from '@/utils/index';
import { Grid } from '@mui/material';
import Nav from '@/components/Nav';
import MeetingList from '@/components/MeetList';
import Content from '@/components/Content';

export const DataProvider = React.createContext({});

function IndexPage() {
  const [meetingMap, setMeetingMap] = useState<API.IMeetingMap>({});
  const [meetingList, setMeetingList] = useState<API.INotesItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [activeId, setActiveId] = useState('');

  const changeActiveId = (id: string) => {
    setActiveId(id);
  };

  const fetchData = async () => {
    try {
      setLoading(true);
      const allData = await Promise.all([
        fetchAData({ page_now: 1, page_size: 10 }),
        fetchBData({ page_now: 1, page_size: 10 }),
      ]);
      setLoading(false);
      const meetingList: API.INotesItem[] = allData
        .map((item) => JSON.parse(decrypto(item.data))?.data?.list)
        .reduce((pre, cur) => [...pre, ...cur], [])
        .sort((a: API.INotesItem, b: API.INotesItem) => {
          let timeA = new Date(a.create_time).getTime();
          let timeB = new Date(b.create_time).getTime();
          return timeA - timeB;
        });
      setMeetingList(meetingList);
      const meetingMap: API.IMeetingMap = {};
      for (let i = 0; i < meetingList.length; ++i) {
        let note = meetingList[i];
        let key = note.create_time.split(' ')[0];
        if (!meetingMap[key]) {
          meetingMap[key] = [note];
          continue;
        }
        meetingMap[key] = [...meetingMap[key], note];
      }
      console.log(meetingMap);
      setMeetingMap(meetingMap);
    } catch (err) {
      console.log('请求接口出错');
    }
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <DataProvider.Provider value={meetingMap}>
      <Grid container>
        <Grid item>
          <Nav />
        </Grid>
        <Grid item>
          <MeetingList
            isLoading={loading}
            activeId={activeId}
            changeActiveId={changeActiveId}
          />
        </Grid>
        <Grid>
          <Content meetingList={meetingList} activeId={activeId} />
        </Grid>
      </Grid>
    </DataProvider.Provider>
  );
}

export default IndexPage;
