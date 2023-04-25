import Sand_Crawler from '~/assets/vehicles/Sand Crawler.png'
import AT_ST from '~/assets/vehicles/AT-ST.png'
import TIE_IN from '~/assets/vehicles/TIE_IN interceptor.png'
import Armored_Aslt_Tank from '~/assets/vehicles/Armored Assault Tank.png'
import STAP from '~/assets/vehicles/Single Trooper Aerial Platform.png'
import C_9979 from '~/assets/vehicles/C-9979 landing craft.png'
import Tribubble from '~/assets/vehicles/Tribubble bongo.png'
import SithSpeeder from '~/assets/vehicles/Sith speeder.png'
import Zephyr_G from '~/assets/vehicles/Zephyr-G swoop bike.png'
import Koro_2 from '~/assets/vehicles/Koro-2 Exodrive.png'
import FireSpeeder from '~/assets/vehicles/Emergency Firespeeder.png'
import DroidTriFighter from '~/assets/vehicles/Droid tri-fighter.png'
import Oevvaor from '~/assets/vehicles/Oevvaor jet catamaran.png'
import RGFC from '~/assets/vehicles/Raddaugh Gnasp fluttercraft.png'
import DGunShip from '~/assets/vehicles/Droid gunship.png'

const vehicles = [
    {
        name: "Sand Crawler",
        image: Sand_Crawler
    },
    {
        name: "T-16 skyhopper",
        image: "https://static.wikia.nocookie.net/starwars/images/4/4d/T16skyhopper_negvv.png"
    },
    {
        name: "X-34 landspeeder",
        image: "https://static.wikia.nocookie.net/starwars/images/b/be/X-34-TGTB.png"
    },
    {
        name: "TIE/LN starfighter",
        image: "https://static.wikia.nocookie.net/starwars/images/9/92/TIEfighter2-Fathead.png"
    },
    {
        name: "Snowspeeder",
        image: "https://static.wikia.nocookie.net/starwars/images/2/27/Rebel_snowspeeder_SWL.png"
    },
    {
        name: "TIE bomber",
        image: "https://static.wikia.nocookie.net/starwars/images/3/3a/TIEBomber-SotGSE.png"
    },
    {
        name: "AT-AT",
        image: "https://static.wikia.nocookie.net/starwars/images/1/16/AT-AT_2_Fathead.png"
    },
    {
        name: "AT-ST",
        image: AT_ST
    },
    {
        name: "Storm IV Twin-Pod cloud car",
        image: "https://static.wikia.nocookie.net/starwars/images/3/3b/Cloud-car-v2.png"
    },
    {
        name: "Sail barge",
        image: "https://static.wikia.nocookie.net/starwars/images/d/db/Sailbarge_negvv.png"
    },
    {
        name: "Bantha-II cargo skiff",
        image: "https://static.wikia.nocookie.net/starwars/images/c/cc/Bantha-II_Cargo_Skiff_BG.png"
    },
    {
        name: "TIE/IN interceptor",
        image: TIE_IN
    },
    {
        name: "Imperial Speeder Bike",
        image: "https://static.wikia.nocookie.net/starwars/images/6/64/74zSpeederbike-NEGVV.png"
    },
    {
        name: "Vulture Droid",
        image: "https://static.wikia.nocookie.net/starwars/images/2/2a/Vulture_Droid_SWCT.png"
    },
    {
        name: "Multi-Troop Transport",
        image: "https://static.wikia.nocookie.net/starwars/images/7/73/MTT-SWE.png"
    },
    {
        name: "Armored Assault Tank",
        image: Armored_Aslt_Tank
    },
    {
        name: "Single Trooper Aerial Platform",
        image: STAP
    },
    {
        name: "C-9979 landing craft",
        image: C_9979
    },
    {
        name: "Tribubble bongo",
        image: Tribubble
    },
    {
        name: "Sith speeder",
        image: SithSpeeder
    },
    {
        name: "Zephyr-G swoop bike",
        image: Zephyr_G
    },
    {
        name: "Koro-2 Exodrive airspeeder",
        image: Koro_2
    },
    {
        name: "XJ-6 airspeeder",
        image: "https://static.wikia.nocookie.net/starwars/images/1/12/XJ6Airspeeder-FFp64.png"
    },
    {
        name: "LAAT/i",
        image: "https://static.wikia.nocookie.net/starwars/images/9/97/Laati-NEGVV.png"
    },
    {
        name: "LAAT/c",
        image: "https://static.wikia.nocookie.net/starwars/images/c/ca/LAATc-TCWIV.png"
    },
    {
        name: "AT-TE",
        image: "https://static.wikia.nocookie.net/starwars/images/0/04/ATTE-TCW.png"
    },
    {
        name: "SPHA",
        image: "https://static.wikia.nocookie.net/starwars/images/8/8a/Sphat-NEGVV.png"
    },
    {
        name: "Flitknot speeder",
        image: "https://static.wikia.nocookie.net/starwars/images/d/d7/FlitknotSpeeder-WSMI.png"
    },
    {
        name: "Neimoidian shuttle",
        image: "https://static.wikia.nocookie.net/starwars/images/1/1c/Sheathipede-SWE.png"
    },
    {
        name: "Geonosian starfighter",
        image: "https://static.wikia.nocookie.net/starwars/images/e/e6/Nantex_cockpit.png"
    },
    {
        name: "Tsmeu-6 personal wheel bike",
        image: "https://static.wikia.nocookie.net/starwars/images/d/d7/GrievousWheelBike-WSMI.png"
    },
    {
        name: "Emergency Firespeeder",
        image: FireSpeeder
    },
    {
        name: "Droid tri-fighter",
        image: DroidTriFighter
    },
    {
        name: "Oevvaor jet catamaran",
        image: Oevvaor
    },
    {
        name: "Raddaugh Gnasp fluttercraft",
        image: RGFC
    },
    {
        name: "Clone turbo tank",
        image: "https://static.wikia.nocookie.net/starwars/images/e/e4/Juggernaut-SWBoL.png"
    },
    {
        name: "Corporate Alliance tank droid",
        image: "https://static.wikia.nocookie.net/starwars/images/6/6a/NR-N99Persuader-BTCG.png"
    },
    {
        name: "Droid gunship",
        image: DGunShip
    },
    {
        name: "AT-RT",
        image: "https://static.wikia.nocookie.net/starwars/images/c/c4/AT-RT-TCW.png"
    }
]

export default vehicles