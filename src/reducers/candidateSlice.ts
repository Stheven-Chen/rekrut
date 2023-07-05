import {createSlice} from '@reduxjs/toolkit'

interface State{
    nama:string[];
    jenisKelamin:string[];
    tanggalLahir:string[];
    phone:string[];
    email:string[];
    domisili:string[];
    pendTerakhir:string[];
    univ:string[];
    jurusan:string[];
    ipk:string[];
    perusahaan:string[];
    posisiT:string[];
    posisi:string[];
    sumber:string[];
    candidate:any;
    addedDate:string[];
    hasil:string[];
    status:string[];
    id:number[]
};

const initialState:State = {
    nama:[],
    jenisKelamin:[],
    tanggalLahir:[],
    phone:[],
    email:[],
    domisili:[],
    pendTerakhir:[],
    univ:[],
    jurusan:[],
    ipk:[],
    perusahaan:[],
    posisiT:[],
    posisi:[],
    sumber:[],
    candidate:[],
    addedDate:[],
    hasil:[],
    status:[],
    id:[]
    
}

export const candidateSlice = createSlice({
    name: 'candidate',
    initialState,
    reducers: {
        newCandidate: (state, action) => {
            state.nama.push(action.payload.nama);
            state.jenisKelamin.push(action.payload.jenisKelamin);
            state.tanggalLahir.push(action.payload.tanggalLahir);
            state.phone.push(action.payload.phone);
            state.email.push(action.payload.email);
            state.domisili.push(action.payload.domisili);
            state.pendTerakhir.push(action.payload.pendTerakhir);
            state.univ.push(action.payload.univ);
            state.jurusan.push(action.payload.jurusan);
            state.ipk.push(action.payload.ipk);
            state.perusahaan.push(action.payload.perusahaan);
            state.posisiT.push(action.payload.posisiT);
            state.posisi.push(action.payload.posisi);
            state.sumber.push(action.payload.sumber);
            state.candidate.push(action.payload.candidate);
            state.status.push(action.payload.status);
            state.addedDate.push(action.payload.addedDate);
            state.id.push(state.id.length + 1); // Increment the id by 1 based on the length of the id array
          },
          
          
          update: (state, action) => {
            const { id, data } = action.payload;
          
            const targetIndex = state.id.findIndex((item) => item === id);
            console.log(id)
            console.log(targetIndex)
            console.log(state.id)
            if (targetIndex !== -1) {
              state.nama[targetIndex] = data.nama;
              state.jenisKelamin[targetIndex] = data.jenisKelamin;
              state.tanggalLahir[targetIndex] = data.tanggalLahir;
              state.phone[targetIndex] = data.phone;
              state.email[targetIndex] = data.email;
              state.domisili[targetIndex] = data.domisili;
              state.pendTerakhir[targetIndex] = data.pendTerakhir;
              state.univ[targetIndex] = data.univ;
              state.jurusan[targetIndex] = data.jurusan;
              state.ipk[targetIndex] = data.ipk;
              state.perusahaan[targetIndex] = data.perusahaan;
              state.posisiT[targetIndex] = data.posisiT;
              state.posisi[targetIndex] = data.posisi;
              state.sumber[targetIndex] = data.sumber;
              state.candidate[targetIndex] = data.candidate;
              state.addedDate[targetIndex] = data.addedDate;
              state.hasil[targetIndex] = data.hasil;
              state.status[targetIndex] = data.status;
            }
          }
          
    }
})

export const { newCandidate, update } = candidateSlice.actions;
export default candidateSlice.reducer;
export type CandidateState = ReturnType<typeof candidateSlice.reducer>;