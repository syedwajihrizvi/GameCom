import { IoPersonSharp } from "react-icons/io5";
import { MdGroups } from "react-icons/md";
import { FaArrowsSplitUpAndLeft } from "react-icons/fa6"
import { CiGlobe } from "react-icons/ci";

export class GameModeIcons {
    static singlePlayerIds = [1]
    static multiPlayerIds = [2,3]
    static splitScreenIds = [4]
    static massiveMultiPlayerOnlineIds = [5]

    static getGameModeIcon(gameModeId: number) {
        if (this.singlePlayerIds.includes(gameModeId))
            return IoPersonSharp
        if (this.multiPlayerIds.includes(gameModeId))
            return MdGroups
        if (this.splitScreenIds.includes(gameModeId))
            return FaArrowsSplitUpAndLeft
        if (this.massiveMultiPlayerOnlineIds.includes(gameModeId))
            return CiGlobe
    }
}