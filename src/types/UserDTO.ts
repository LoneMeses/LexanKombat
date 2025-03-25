import {IUser} from "./IUser.ts";
import {IScore} from "./IScore.ts";
import {IEnergy} from "./IEnergy.ts";
import {IPrice} from "./IPrice.ts";

export interface UserDTO {
    user: IUser,
    score: IScore,
    energy: IEnergy,
    price: IPrice
}

export interface UsersForLeaderboard {
    userId: number,
    firstName: string,
    photoUrl: string,
    score: IScore
}