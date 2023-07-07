import React from 'react';
import Sidebar from '../component/sideBar';
import { useSelector } from 'react-redux';
import { CandidateState } from '../reducers/candidateSlice';
import {useNavigate} from 'react-router-dom'

interface Data {
  nama: string[];
  jenisKelamin: string[];
  tanggalLahir: string[];
  phone: string[];
  email: string[];
  domisili: string[];
  pendTerakhir: string[];
  univ: string[];
  jurusan: string[];
  ipk: string[];
  perusahaan: string[];
  posisiT: string[];
  posisi: string[];
  sumber: string[];
  candidate: any;
  addedDate: string[];
  hasil: string[];
  status: string[];
  id: number[];
}

const Interview: React.FC = () => {
  const candidate = useSelector((state: CandidateState) => state.candidate);

  const data: Data[] = [];

  const navigate = useNavigate()

  for (let i = 0; i < candidate.nama.length; i++) {
    const obj: Data = {
      nama: Array.isArray(candidate.nama) ? [candidate.nama[i]] : [],
      jenisKelamin: Array.isArray(candidate.jenisKelamin) ? [candidate.jenisKelamin[i]] : [],
      tanggalLahir: Array.isArray(candidate.tanggalLahir) ? [candidate.tanggalLahir[i]] : [],
      phone: Array.isArray(candidate.phone) ? [candidate.phone[i]] : [],
      email: Array.isArray(candidate.email) ? [candidate.email[i]] : [],
      domisili: Array.isArray(candidate.domisili) ? [candidate.domisili[i]] : [],
      pendTerakhir: Array.isArray(candidate.pendTerakhir) ? [candidate.pendTerakhir[i]] : [],
      univ: Array.isArray(candidate.univ) ? [candidate.univ[i]] : [],
      jurusan: Array.isArray(candidate.jurusan) ? [candidate.jurusan[i]] : [],
      ipk: Array.isArray(candidate.ipk) ? [candidate.ipk[i]] : [],
      perusahaan: Array.isArray(candidate.perusahaan) ? [candidate.perusahaan[i]] : [],
      posisiT: Array.isArray(candidate.posisiT) ? [candidate.posisiT[i]] : [],
      posisi: Array.isArray(candidate.posisi) ? [candidate.posisi[i]] : [],
      sumber: Array.isArray(candidate.sumber) ? [candidate.sumber[i]] : [],
      candidate: Array.isArray(candidate.candidate) ? [candidate.candidate[i]] : [],
      addedDate: Array.isArray(candidate.addedDate) ? [candidate.addedDate[i]] : [],
      hasil: Array.isArray(candidate.hasil) ? [candidate.hasil[i]] : [],
      status: Array.isArray(candidate.status) ? [candidate.status[i]] : [],
      id: Array.isArray(candidate.id) ? [candidate.id[i]] : [],
    };
    data.push(obj);
  }

 

  return (
    <Sidebar
      content={
        <>
        <h1 className="text-xl text-gray-900 font-semibold">Interview</h1>
        <div className="grid grid-cols-4 sm:grid-cols-1 md:grid-cols-3 w-full gap-8 h-full p-5">
        {candidate.id.length > 0 &&
            data.map((item: Data, index: number) => {
            let color = '';
            if (item.status.includes('New')) {
                color = 'orange';
            } else if (item.status.includes('Interview')) {
                color = 'blue';
            } else if (item.status.includes('Rejected')) {
                color = 'red';
            } else if (item.status.includes('Accepted')) {
                color = 'green';
            }else if (item.status.includes('Consideration')) {
                color = 'yellow';
            }
            return (
                <div
                className={`grid grid-cols-2 bg-white h-32 p-4 w-full rounded-md gap-2 shadow-xl transform-gpu transition-transform duration-300 active:scale-90 cursor-pointer`}
                style={{borderTop: `3px solid ${color}` }}
                key={index}
                onClick = {()=>navigate(`/result/interview/${item.id}`)}
                >
                <span className="text-start">{item.nama}</span>
                <span className="text-end">{item.posisi}</span>
                <span className="text-start">{item.addedDate}</span>
                <span className="text-end">{item.status}</span>
                </div>
            );
            })}
        </div>
        </>
      }
    />
  );
};

export default Interview;
