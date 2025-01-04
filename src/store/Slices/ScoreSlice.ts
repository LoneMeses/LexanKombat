import {createSlice} from "@reduxjs/toolkit";
import {IScore} from "../../types/IScore.ts";


const initialState: IScore = {
    score: parseInt(localStorage.getItem("score") as string) || 0,
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        scoreIncrement: (state: IScore) => {
            state.score += 1
        }
    }
})
export default scoreSlice.reducer;
