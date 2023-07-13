import React, { useState, useEffect } from 'react';
import Sidebar from '../component/sideBar';
import { useParams, useNavigate } from 'react-router-dom';
import { update } from '../reducers/candidateSlice';
import { useDispatch } from 'react-redux';
import Button from '../component/button';
import { State } from '../component/state';

const PsyEdit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  console.log('id:', id);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [candidateData, setCandidateData] = useState<State>({
    nama: '',
    jenisKelamin: '',
    tanggalLahir: '',
    phone: '',
    email: '',
    domisili: '',
    pendTerakhir: '',
    univ: '',
    jurusan: '',
    ipk: '',
    perusahaan: '',
    posisiT: '',
    posisi: '',
    sumber: '',
    addedDate: '',
    HCDate: '',
    pysDate: '',
    userDate: '',
    offeringDate: '',
    MCUDate: '',
    hasilHC: '',
    hasilPys: '',
    hasilUser: '',
    hasilOffering: '',
    hasilMCU: '',
    status: '',
    doneStatus: '',
    _id:undefined
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`https://rekrutserver.stheven.website/show?id=${id}`);
        if (!res.ok) {
          throw new Error(`Gagal Mengambil Data dengan id : ${id}`);
        }
        const data = await res.json();
        console.log(data[0])
        setCandidateData(data[0]);
      } catch (err) {
        console.error(err);
      }
    };

    fetchData();
  }, [id]);


  const inputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setCandidateData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const submit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    dispatch(update({
      nama:candidateData.nama,
      jenisKelamin:candidateData.jenisKelamin,
      tanggalLahir:candidateData.tanggalLahir,
      phone:candidateData.phone,
      email:candidateData.email,
      domisili:candidateData.domisili,
      pendTerakhir:candidateData.pendTerakhir,
      univ:candidateData.univ,
      jurusan:candidateData.jurusan,
      ipk:candidateData.ipk,
      perusahaan:candidateData.perusahaan,
      posisiT:candidateData.posisiT,
      posisi:candidateData.posisi,
      sumber:candidateData.sumber,
      addedDate:candidateData.addedDate,
      HCDate:new Date().toISOString().split('T')[0].toString(),
      pysDate:candidateData.pysDate,
      userDate:candidateData.userDate,
      offeringDate:candidateData.offeringDate,
      MCUDate:candidateData.MCUDate,
      hasilHC:candidateData.hasilHC,
      hasilPys:candidateData.hasilPys,
      hasilUser:candidateData.hasilUser,
      hasilOffering:candidateData.hasilOffering,
      hasilMCU:candidateData.hasilMCU,
      status:candidateData.status,
      doneStatus:candidateData.doneStatus,
      _id:candidateData._id,
    }));

    navigate('/result/interview');
  };

  const status = [
    {
      name: 'New',
      value: 'New',
    },
    {
      name: 'Interview HC',
      value: 'Interview HC',
    },
    {
      name: 'Psychological Test',
      value: 'Psychological Test',
    },
    {
      name: 'Interview User',
      value: 'Interview User',
    },
    {
      name: 'Offering',
      value: 'Offering',
    },
    {
      name: 'Medical Check Up',
      value: 'Medical Check Up',
    },
    {
      name: 'Rejected',
      value: 'Rejected',
    },
    {
      name: 'Consideration',
      value: 'Consideration',
    },
    {
      name: 'Accepted',
      value: 'Accepted',
    },
  ];

  return (
    <Sidebar
      content={
        <>
          <h1 className="text-xl text-gray-900 font-semibold">Psychological Test</h1>
          <form onSubmit={submit}>
            <div className="grid grid-cols-2 gap-4">
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

              <label htmlFor="pysDate" className="text-gray-700">
              Psychological Test Date:
              </label>
              <input
                type="date"
                id="pysDate"
                name="pysDate"
                className="border border-gray-300 rounded-md p-2 w-full"
                value={candidateData.pysDate}
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
                <option value="" className="text-center">
                  --Pilih--
                </option>
                {status.map((item, index) => (
                  <option key={index} value={item.value}>
                    {item.name}
                  </option>
                ))}
              </select>

              <label htmlFor="hasilPsy" className={`text-gray-700`}>
                Hasil:
              </label>
              <textarea
                id="hasilPsy"
                name="hasilPsy"
                value={candidateData.hasilPys}
                onChange={inputChange}
                className="rounded-md pl-3 w-full h-32 mt-5 p-3 font-Poppins"
                rows={5}
              />
            </div>
            <div className="flex justify-center items-center mt-6 gap-4">
              <Button text="Back" textColor="white" color="#FFA41B" onClick={() => navigate('/result/pystest')} />
              <Button text="Next" textColor="white" />
            </div>
          </form>
        </>
      }
    />
  );
};

export default PsyEdit;
