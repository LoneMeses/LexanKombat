import {createSlice} from "@reduxjs/toolkit";
import {IScore} from "../../types/IScore.ts";


const initialState: IScore = {
    score: parseInt(localStorage.getItem("score") as string) || 0,
    scoreTapNumber: parseInt(localStorage.getItem("scoreTapNumber") as string) || 1,
}

export const scoreSlice = createSlice({
    name: 'score',
    initialState,
    reducers: {
        scoreIncrement: (state: IScore) => {
            state.score += state.scoreTapNumber
        }
    }
})
export default scoreSlice.reducer;
