import React, {useState} from 'react';
import Sidebar from '../component/sideBar'
import { useParams, useNavigate } from 'react-router-dom';
import { CandidateState, update } from '../reducers/candidateSlice';
import { useSelector, useDispatch } from 'react-redux';
import Button from'../component/button' 

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
    id: any;
  }

const Edit: React.FC = ()=>{
    const { id } = useParams<{ id: string }>();
    console.log("id:", id);
    const candidate = useSelector((state:CandidateState)=>state.candidate)
    const dispatch= useDispatch()
    const navigate = useNavigate()
    const data: Data[] = [];
    for (let i = 0; i < candidate.nama.length; i++) {
        const obj: Data = {
          nama: Array.isArray(candidate.nama) ? candidate.nama[i] : [],
          jenisKelamin: Array.isArray(candidate.jenisKelamin) ? candidate.jenisKelamin[i] : [],
          tanggalLahir: Array.isArray(candidate.tanggalLahir) ? candidate.tanggalLahir[i] : [],
          phone: Array.isArray(candidate.phone) ? candidate.phone[i] : [],
          email: Array.isArray(candidate.email) ? candidate.email[i] : [],
          domisili: Array.isArray(candidate.domisili) ? candidate.domisili[i] : [],
          pendTerakhir: Array.isArray(candidate.pendTerakhir) ? candidate.pendTerakhir[i] : [],
          univ: Array.isArray(candidate.univ) ? candidate.univ[i] : [],
          jurusan: Array.isArray(candidate.jurusan) ? candidate.jurusan[i] : [],
          ipk: Array.isArray(candidate.ipk) ? candidate.ipk[i] : [],
          perusahaan: Array.isArray(candidate.perusahaan) ? candidate.perusahaan[i] : [],
          posisiT: Array.isArray(candidate.posisiT) ? candidate.posisiT[i] : [],
          posisi: Array.isArray(candidate.posisi) ? candidate.posisi[i] : [],
          sumber: Array.isArray(candidate.sumber) ? candidate.sumber[i] : [],
          candidate: Array.isArray(candidate.candidate) ? candidate.candidate[i] : [],
          addedDate: Array.isArray(candidate.addedDate) ? candidate.addedDate[i] : [],
          hasil: Array.isArray(candidate.hasil) ? candidate.hasil[i] : [],
          status: Array.isArray(candidate.status) ? candidate.status[i] : [],
          id: Array.isArray(candidate.id) ? candidate.id[i] : [],
        };
        data.push(obj);
      }
    const selectCandidate = data.filter(f=>f.id.toString() === id);
    console.log(selectCandidate)
    
    const [candidateData, setCandidateData] = useState({
        nama: selectCandidate[0].nama,
        jenisKelamin: selectCandidate[0].jenisKelamin,
        tanggalLahir: selectCandidate[0].tanggalLahir,
        phone: selectCandidate[0].phone,
        email: selectCandidate[0].email,
        domisili: selectCandidate[0].domisili,
        pendTerakhir: selectCandidate[0].pendTerakhir,
        univ: selectCandidate[0].univ,
        jurusan: selectCandidate[0].jurusan,
        ipk: selectCandidate[0].ipk,
        perusahaan: selectCandidate[0].perusahaan,
        posisiT: selectCandidate[0].posisiT,
        posisi: selectCandidate[0].posisi,
        sumber: selectCandidate[0].sumber,
        candidate: selectCandidate[0].candidate,
        addedDate: selectCandidate[0].addedDate,
        hasil: selectCandidate[0].hasil,
        status: selectCandidate[0].status,
        id: selectCandidate[0].id

    })

    const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement|HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setCandidateData((prevData: any) => ({
          ...prevData,
          [name]: value,
        }));
      };

    const submit = (e:React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();

        dispatch(update({
            id: selectCandidate[0].id,
            data: candidateData
          }));
        navigate('/result')

    }

    const status = [
        {
          name: "New",
          value: 'New'
        },
        {
          name: "Interview",
          value: 'Interview'
        },
        {
          name: "Rejected",
          value: 'Rejected'
        },
        {
          name: "Consideration",
          value: 'Consideration'
        },
        {
          name: "Accepted",
          value: 'Accepted'
        },
      ];

    return(
        <Sidebar
        content={
            <>
                <h1 className="text-xl text-gray-900 font-semibold">{candidateData.nama}</h1>
                <form onSubmit={submit}>
                    <div className='grid grid-cols-2 gap-4'>
                    <label htmlFor="nama" className="text-gray-700">
                        Nama:
                    </label>
                    <input
                        type="text"
                        id="nama"
                        name="nama"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        value={candidateData.nama}
                        onChange={inputChange}
                    />
                    <label htmlFor="posisi" className="text-gray-700">
                        Posisi yang di Ambil:
                    </label>
                    <input
                        type="text"
                        id="posisi"
                        name="posisi"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        value={candidateData.posisi}
                        onChange={inputChange}
                    />
                    <label htmlFor="ipk" className="text-gray-700">
                        IPK:
                    </label>
                    <input
                        type="text"
                        id="ipk"
                        name="ipk"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        value={candidateData.ipk}
                        onChange={inputChange}
                    />
                    <label htmlFor="jurusan" className="text-gray-700">
                        Jurusan:
                    </label>
                    <input
                        type="text"
                        id="jurusan"
                        name="jurusan"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        value={candidateData.jurusan}
                        onChange={inputChange}
                    />
                    <label htmlFor="univ" className="text-gray-700">
                        Universitas:
                    </label>
                    <input
                        type="text"
                        id="univ"
                        name="univ"
                        className="border border-gray-300 rounded-md p-2 w-full"
                        value={candidateData.univ}
                        onChange={inputChange}
                    />
                     <label htmlFor="status" className={`text-gray-700`}>
                        Status Saat Ini:
                    </label>
                    <select
                        id="status"
                        name="status"
                        value={candidateData.status}
                        onChange={inputChange}
                        className="border border-gray-300 rounded-md p-2 w-full"
                    >
                        <option value="" className='text-center'>--Pilih--</option>
                        {status.map((item, index) => (
                        <option key={index} value={item.value}>{item.name}</option>
                        ))}
                    </select>
                    
                    <label htmlFor="hasil" className={`text-gray-700`}>
                        Hasil:
                    </label>
                    <textarea
                      id="hasil"
                      name="hasil"
                      value={candidateData.hasil}
                      onChange={inputChange}
                      className="rounded-md pl-3 w-full h-32 mt-5 p-3 font-Poppins" 
                      rows={5}                   
                      />
                    </div>
                    <div className='flex justify-center items-center mt-6 gap-4'>
                    <Button
                        text="Back"
                        textColor='white'
                        color='#FFA41B'
                        onClick={()=>navigate('/result')}
                        />
                    <Button
                        text="Next"
                        textColor='white'
                        />
                    </div>
                </form>
            </>
        }
        />
    );
};
export default Edit