import {createSlice} from '@reduxjs/toolkit'
import {State} from '../component/state'


const initialState:State = {
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
  _id: undefined
}

export const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        newCandidate: (state, action) => {
          state.nama = action.payload.nama;
          state.jenisKelamin = action.payload.jenisKelamin;
          state.tanggalLahir = action.payload.tanggalLahir;
          state.phone = action.payload.phone;
          state.email = action.payload.email;
          state.domisili = action.payload.domisili;
          state.pendTerakhir = action.payload.pendTerakhir;
          state.univ = action.payload.univ;
          state.jurusan = action.payload.jurusan;
          state.ipk = action.payload.ipk;
          state.perusahaan = action.payload.perusahaan;
          state.posisiT = action.payload.posisiT;
          state.posisi = action.payload.posisi;
          state.sumber = action.payload.sumber;
          state.addedDate = action.payload.addedDate;
          state.HCDate = action.payload.HCDate;
          state.pysDate = action.payload.pysDate;
          state.userDate = action.payload.userDate;
          state.offeringDate = action.payload.offeringDate;
          state.MCUDate = action.payload.MCUDate;
          state.hasilHC = action.payload.hasilHC;
          state.hasilPys = action.payload.hasilPys;
          state.hasilUser = action.payload.hasilUser;
          state.hasilOffering = action.payload.hasilOffering;
          state.hasilMCU = action.payload.hasilMCU;
          state.status = action.payload.status;
          state.doneStatus = action.payload.doneStatus;

          fetch('https://rekrutserver.stheven.website/candidates', {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(state)
          })

          },
          
          
          update: (state, action) => {
          state.nama = action.payload.nama;
          state.jenisKelamin = action.payload.jenisKelamin;
          state.tanggalLahir = action.payload.tanggalLahir;
          state.phone = action.payload.phone;
          state.email = action.payload.email;
          state.domisili = action.payload.domisili;
          state.pendTerakhir = action.payload.pendTerakhir;
          state.univ = action.payload.univ;
          state.jurusan = action.payload.jurusan;
          state.ipk = action.payload.ipk;
          state.perusahaan = action.payload.perusahaan;
          state.posisiT = action.payload.posisiT;
          state.posisi = action.payload.posisi;
          state.sumber = action.payload.sumber;
          state.addedDate = action.payload.addedDate;
          state.HCDate = action.payload.HCDate;
          state.pysDate = action.payload.pysDate;
          state.userDate = action.payload.userDate;
          state.offeringDate = action.payload.offeringDate;
          state.MCUDate = action.payload.MCUDate;
          state.hasilHC = action.payload.hasilHC;
          state.hasilPys = action.payload.hasilPys;
          state.hasilUser = action.payload.hasilUser;
          state.hasilOffering = action.payload.hasilOffering;
          state.hasilMCU = action.payload.hasilMCU;
          state.status = action.payload.status;
          state.doneStatus = action.payload.doneStatus;
          state._id = action.payload._id;

          fetch(`https://rekrutserver.stheven.website/candidates?id=${state._id}`, {
            method:'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body:JSON.stringify(state)
          })
          }
          
    }
})

export const { newCandidate, update } = candidateSlice.actions;
export default candidateSlice.reducer;
export type CandidateState = ReturnType<typeof candidateSlice.reducer>;