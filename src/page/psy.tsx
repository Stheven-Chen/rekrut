import React, { useState, useEffect } from 'react';
import Sidebar from '../component/sideBar';
import { State } from '../component/state';
import List from '../component/list';

const Psy: React.FC = () => {
  const [candidate, setCandidate] = useState<State[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = 'Psychological Test'
        const res = await fetch(`https://rekrutserver.stheven.website/show?status=${query}`);
        if (!res.ok) {
          throw new Error('Gagal Melakukan Fetch Data');
        }
        const data = await res.json();
        setCandidate(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, []);

  return (
    <Sidebar
      content={
        
          <List
          judul='Psychological Test'
          data={candidate}
          to='pystest'
          />
  
      }
    />
  );
};

export default Psy;
