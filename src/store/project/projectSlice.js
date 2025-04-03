import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios"





const initialState = {
project: null,
active: false ,
theme: "light"
}



export const getProject = createAsyncThunk('projectSlice/getProject', async() => {
    let {data} = await axios.get(`https://api.github.com/users/FarruxNuranov/repos`)
    
    return data
    
  
    
})



const projectSlice = createSlice({
    name : 'projectSlice',
    initialState,
    reducers: {
        getActive(state) {
            let current = state.active == true ? false : true
             state.active = current
            },
            toggleActive: (state) => {
                state.active = !state.active; // меняем состояние
              },
        getTheme(state) {
            let current = state.theme == 'dark' ? 'light' : 'dark'
             state.theme = current
             localStorage.setItem('theme', JSON.stringify(current));
            },
            initTheme(state) {
                let value = localStorage.getItem('theme')
                if (value) {
                    state.theme = JSON.parse(value) 
                }

            }
            
            
    },
    extraReducers: (builder) =>  {
        builder.addCase(getProject.fulfilled, (state,action) => {
            state.loading = false;
            state.project = action.payload
        })}
    
})

export const { getTheme, initTheme, getActive, toggleActive } = projectSlice.actions

export default projectSlice.reducer