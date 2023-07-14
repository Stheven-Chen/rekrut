import { useEffect, useState } from 'react';
import { State } from './state';
import { useNavigate } from 'react-router-dom';

interface ListProps {
  data: any;
  judul: string;
  to: string|undefined;
}

const List = (props: ListProps) => {
  const navigate = useNavigate();
  const [candidate, setCandidate] = useState<State[]>([]);
  const [p, setP] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const handleBack = () => {
   if(p===1){
    setP(1)
   }else{
    setP(p-1)
   }

  };

  const handleNext = () => {
    if(p===pageCount){
        setP(pageCount)
    }else{
    setP(p + 1);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = props.data;
        if (query) { // Check if props.data is not empty or undefined
        //   const res = await fetch(`http://localhost:3001/show?status=${query}&p=${p}`);
          const res = await fetch(`https://rekrutserver.stheven.website/show?status=${query}&p=${p}`);
          if (!res.ok) {
            throw new Error('Gagal Melakukan Fetch Data');
          }
          const data = await res.json();
          setCandidate(data[0]);
          setPageCount(data[1]);
        }
      } catch (err) {
        console.error(err);
      }
    };
  
    fetchData();
  }, [p, props.data]);
  
    return(
        <>
        <h1 className="text-xl text-gray-900 font-semibold">{props.judul}</h1>
          <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 w-full gap-8 h-full p-5">
            {candidate.length > 0 &&
              candidate.map((item: State, index: number) => {
                let color = '';
                if (item.status.includes('New')) {
                  color = 'orange';
                } else if (
                  item.status.includes('Interview HC') ||
                  item.status.includes('Psychological Test') ||
                  item.status.includes('Interview User') ||
                  item.status.includes('Offering') ||
                  item.status.includes('Medical Check Up')
                ) {
                  color = 'blue';
                } else if (item.status.includes('Rejected')) {
                  color = 'red';
                } else if (item.status.includes('Accepted')) {
                  color = 'green';
                } else if (item.status.includes('Consideration')) {
                  color = 'yellow';
                }
                return (
                  <div
                    className={`grid grid-cols-2 bg-white h-32 p-4 w-full rounded-md gap-2 shadow-xl transform-gpu transition-transform duration-300 active:scale-90 cursor-pointer`}
                    style={{ borderTop: `3px solid ${color}` }}
                    key={index}
                    onClick={() => navigate(`/result/${props.to}/${item._id}`)}
                  >
                    <span className="text-start">{item.nama}</span>
                    <span className="text-end">{item.posisi}</span>
                    <span className="text-start">{item.addedDate}</span>
                    <span className="text-end">{item.lokasi}</span>
                  </div>
                );
              })}
              <div className='flex gap-5 items-center'>
                <button className='bg-yellow-500 h-18 w-20 rounded-xl transform-gpu transition-transform duration-300 active:scale-90 font-Poppins' disabled={p===1} onClick = {()=>handleBack()}>Back</button>
                <button className='bg-sky-500 h-18 w-20 rounded-xl transform-gpu transition-transform duration-300 active:scale-90 font-Poppins' disabled={p===pageCount} onClick = {()=>handleNext()}>Next</button>
              </div>
          </div>


          </>
    )
}

export default List;