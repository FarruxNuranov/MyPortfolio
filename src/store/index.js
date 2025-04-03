import { configureStore } from "@reduxjs/toolkit";
import projectSlice from './project/projectSlice'
import LanguageReducer from './language/languageSlice'

export const store = configureStore({
    reducer: {
        project: projectSlice,
        language: LanguageReducer
    }
})


