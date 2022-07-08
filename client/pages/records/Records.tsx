import React, {useEffect, useState} from 'react';
import Table from '../../components/Table';
import { UrlSite } from '../../services/const';

import { WrapperSt } from './style';

const colNames = ['Очки', 'Игрок'];

const Records = () => {

  const [leaderboard, setLeaderboard] = useState([{}]);

  useEffect(() => {
      fetch(`${UrlSite.URL}/leaderboard/troy`, {
          credentials: 'include',
          method: 'POST',
          headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json'
          },
          body: JSON.stringify({
              "ratingFieldName": "score",
              "cursor": 0,
              "limit": 100
          })
      }).then((data) => {
          return data.json();
      }).then((data) => {
              setLeaderboard(data.map(item => item.data))
      });
  }, [0]);

  return (
    <WrapperSt>
      <Table colNames={colNames} content={leaderboard} isShowBtn={false} />
    </WrapperSt>
  );
};

export default Records;
