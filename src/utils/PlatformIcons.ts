import { FaPlaystation, FaXbox, FaWindows, FaLinux, FaApple,FaAndroid } from "react-icons/fa"
import { BsNintendoSwitch } from "react-icons/bs";
import _ from 'lodash'

export class PlatformIcons {
    static playstationIDs = [7, 8, 48, 167, 9, 165, 390, 46, 38, 131]
    static xboxIDs = [11, 12, 49, 169]
    static nintendoIDs = [131, 20, 4, 159, 37, 19, 416, 130, 137, 21, 18, 5, 41]
    static pcIDs = [149, 274, 142, 125, 157, 6, 128, 13, 405, 161, 405, 74, 82]
    static linuxIDs = [3]
    static appleIDs = [14, 75, 115, 476, 39]
    static android = [34]

    static getPlatformIcon(platformId: number) {
        if (this.playstationIDs.includes(platformId))
            return FaPlaystation
        if (this.xboxIDs.includes(platformId))
            return FaXbox
        if (this.nintendoIDs.includes(platformId))
            return BsNintendoSwitch
        if (this.pcIDs.includes(platformId))
            return FaWindows
        if (this.linuxIDs.includes(platformId))
            return FaLinux
        if (this.appleIDs.includes(platformId))
            return FaApple  
        if (this.android.includes(platformId))
            return FaAndroid
    }

    static relevantplatform(platformId: number) {
        return this.playstationIDs.includes(platformId) || 
               this.xboxIDs.includes(platformId) ||
               this.nintendoIDs.includes(platformId) ||
               this.pcIDs.includes(platformId) ||
               this.linuxIDs.includes(platformId) ||
               this.appleIDs.includes(platformId) ||
               false
    }

    static getAllPlatformIds() {
        return _.flatten([
            this.playstationIDs,
            this.xboxIDs,
            this.nintendoIDs,
            this.pcIDs,
            this.linuxIDs,
            this.appleIDs,
            this.android
        ])
    }
}