import React, { useState } from 'react';
import Sidebar from '../component/sideBar';
import { useLocation, useNavigate } from 'react-router-dom';
import Button from '../component/button';
import {useDispatch, useSelector} from 'react-redux';
import {newCandidate, CandidateState} from '../reducers/candidateSlice'


const Kerja: React.FC = () => {
  const { state } = useLocation();
  const {
    nama,
    jenisKelamin,
    tanggalLahir,
    phone,
    email,
    domisili,
    pendTerakhir,
    univ,
    jurusan,
    ipk
  } = state;
  const [data, setData] = useState({
    perusahaan: '',
    posisiT: '',
    posisi: '',
    sumber: ''
  });
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const candidate = useSelector((state:CandidateState)=>state.candidate)

  const selectOptions = [
    {
      name: "BDP",
      value: 'bdp'
    },
    {
      name: "Surveyor",
      value: 'surveyor'
    },
    {
      name: "Marketing",
      value: 'marketing'
    },
    {
      name: "Klaim",
      value: 'klaim'
    },
    {
      name: "Akseptasi",
      value: 'Akseptasi'
    },
  ];

  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData((prevData: any) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const lastCandidate = candidate.length > 0 ? candidate[candidate.length - 1] : null;
    const newId = lastCandidate ? lastCandidate.id + 1 : 1;
    
    dispatch(
      newCandidate({
        nama,
        jenisKelamin,
        tanggalLahir,
        phone,
        email,
        domisili,
        pendTerakhir,
        univ,
        jurusan,
        ipk,
        perusahaan: data.perusahaan,
        posisiT: data.posisiT,
        posisi: data.posisi,
        sumber: data.sumber,
        addedDate: new Date().toISOString().split('T')[0].toString(),
        id: newId,
        status:'New'
      })
    );
    
    navigate('/home');
  };
  

  return (
    <Sidebar
      content={
        <div className='p-2'>
          <h1 className="text-xl text-gray-900 font-semibold">Pengalaman Kerja</h1>
          <form onSubmit={submit} className="mt-6">
            <div className="grid grid-cols-2 gap-4">
              <label htmlFor="perusahaan" className="text-gray-700">
                Perusahaan Terakhir:
              </label>
              <input
                type="text"
                id="perusahaan"
                name="perusahaan"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.perusahaan}
                onChange={inputChange}
              />
              <label htmlFor="posisiT" className="text-gray-700">
                Posisi Terakhir:
              </label>
              <input
                type="text"
                id="posisiT"
                name="posisiT"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={data.posisiT}
                onChange={inputChange}
              />
               <label htmlFor="posisi" className={`text-gray-700`}>
                Posisi yang Dilamar:
              </label>
              <select
                id="posisi"
                name="posisi"
                value={data.posisi}
                onChange={inputChange}
                className="border border-gray-300 rounded-md p-2 w-full"
              >
                <option value="" className='text-center'>--Pilih--</option>
                {selectOptions.map((item, index) => (
                  <option key={index} value={item.value}>{item.name}</option>
                ))}
              </select>
              <label htmlFor="sumber" className="text-gray-700">
                Source:
              </label>
              <div className='flex flex-col'>
                <label>
                  <input
                    type="radio"
                    className='mr-2'
                    id="sumber"
                    name="sumber"
                    value="jobFair"
                    checked={data.sumber === 'jobFair'}
                    onChange={inputChange}
                  />
                  Job Fair
                </label>
                <label>
                  <input
                    type="radio"
                    className='mr-2'
                    id="sumber"
                    name="sumber"
                    value="jobPortal"
                    checked={data.sumber === 'jobPortal'}
                    onChange={inputChange}
                  />
                  Job Portal
                </label>
              </div>
             
            </div>
            <div className='flex justify-center items-center mt-6'>
              <Button
                text="Next"
                textColor='white'
              />
            </div>
          </form>
        </div>
      }
    />
  );
};

export default Kerja;
