import React, {useState} from 'react'

const Test: React.FC = () =>{
    const [data, setData] = useState({
        test:'',
    })

    const handleSumbit=()=>{

    }

    const inputChange = (e: React.ChangeEvent<HTMLInputElement>) =>{
        const {name, value} = e.target;
        setData((prevData:any)=>({
            ...prevData,
            [name]: value
        }))
    }

    return(
        <div className='p-5'>
           <form onSubmit={handleSumbit} className='flex flex-col'> 
           <label htmlFor="test">masukkan angka</label>
            <input 
            className='border-solid border-2 border-dark'
            type="text"
            name='test'
            onChange={inputChange}
            />
            <button type='submit'>Input</button>
            </form>

            <span>{`hasil dari submit: ${data.test}`}</span>
        </div>  
    )
}

export default Test