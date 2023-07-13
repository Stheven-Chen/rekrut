import {State} from './state'
import {useNavigate} from 'react-router-dom'

interface list{
    data:any
    judul:string
    to:string
}

const List = (props:list) =>{
    const navigate = useNavigate()
    return(
        <>
        <h1 className="text-xl text-gray-900 font-semibold">{props.judul}</h1>
          <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 w-full gap-8 h-full p-5">
            {props.data.length > 0 &&
              props.data.map((item: State, index: number) => {
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
                    <span className="text-end">{item.doneStatus}</span>
                  </div>
                );
              })}
          </div>
          </>
    )
}

export default List;