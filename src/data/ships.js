const shipModels = [
    {
        "model": "CR90 corvette",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/2/24/TantiveIV-TSWB.png"
    },
    {
        "model": "Imperial I-class Star Destroyer",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/e/e4/ImperialClassStarDestroyer-TSWB.png"
    },
    {
        "model": "Sentinel-class landing craft",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/5/5b/Imperial_Sentinel-class_shuttle.png"
    },
    {
        "model": "DS-1 Orbital Battle Station",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/7/72/DeathStar1-SWE.png"
    },
    {
        "model": "YT-1300 light freighter",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/9/90/Millennium_Falcon_DICE.png"
    },
    {
        "model": "BTL Y-wing",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/b/bf/Y-wing_2.png"
    },
    {
        "model": "T-65 X-wing",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/8/80/X-wing_Fathead.png"
    },
    {
        "model": "Twin Ion Engine Advanced x1",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/1/1d/Vader_TIEAdvanced_SWB.png"
    },
    {
        "model": "Executor-class star dreadnought",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/a/a1/Executor2_BF2.png"
    },
    {
        "model": "GR-75 medium transport",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/6/67/GR-75_Medium_Transport_TAEtrivia.png"
    },
    {
        "model": "Firespray-31-class patrol and attack",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/c/c7/Firespray_SotG.png"
    },
    {
        "model": "Lambda-class T-4a shuttle",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/d/d3/ImperialShuttle-DB.png"
    },
    {
        "model": "EF76 Nebulon-B escort frigate",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/7/71/NebulonB-SWS.png"
    },
    {
        "model": "MC80 Liberty type Star Cruiser",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/9/94/MCLiberty.jpg"
    },
    {
        "model": "RZ-1 A-wing Interceptor",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/a/aa/Awing-sag.jpg"
    },
    {
        "model": "A/SF-01 B-wing starfighter",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/9/9f/B-wing-Squadronds.png"
    },
    {
        "model": "Consular-class cruiser",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/8/81/Radiant7_negvv.png"
    },
    {
        "model": "Lucrehulk-class Droid Control Ship",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/9/95/Lucrehulk_battleship_TCW.jpg"
    },
    {
        "model": "N-1 starfighter",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/d/d3/N-1_BF2.png"
    },
    {
        "model": "J-type 327 Nubian royal starship",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/9/9e/Naboo_Royal_Starship.png"
    },
    {
        "model": "Star Courier",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/2/2e/Scimitar_BF2.png"
    },
    {
        "model": "J-type diplomatic barge",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/1/1c/J-type_Diplomatic_Barge_TCW.png"
    },
    {
        "model": "Botajef AA-9 Freighter-Liner",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/c/c7/Aa9coruscantfreighter.jpg"
    },
    {
        "model": "Delta-7 Aethersprite-class interceptor",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/7/79/Jedi_Starfighter_EpII.png"
    },
    {
        "model": "H-type Nubian yacht",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/8/87/H-Type_Nubian_yacht_USW.png"
    },
    {
        "model": "Acclamator I-class assault ship",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/4/4b/Acclamator.jpg"
    },
    {
        "model": "Punworcca 116-class interstellar sloop",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/b/b2/DookusSolarSailer-TCW.png"
    },
    {
        "model": "Providence-class carrier/destroyer",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/4/47/InvisibleHandStarboard-FF.png"
    },
    {
        "model": "Theta-class T-2c shuttle",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/8/8e/Theta-class_shuttle.png"
    },
    {
        "model": "Senator-class Star Destroyer",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/c/c8/Imperialattackcruisers.png"
    },
    {
        "model": "J-type star skiff",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/1/1f/Nabooskiff-SWCTP.png"
    },
    {
        "model": "Eta-2 Actis-class light interceptor",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/0/04/Eta-2JediInterceptor-USC.png"
    },
    {
        "model": "Aggressive Reconnaissance-170 starfighte",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/b/ba/ARC170starfighter.jpg"
    },
    {
        "model": "Munificent-class star frigate",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/0/07/Munificent_TCW.jpg"
    },
    {
        "model": "Belbullab-22 starfighter",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/2/21/SoullessOne-TCW.png"
    },
    {
        "model": "Alpha-3 Nimbus-class V-wing starfighter",
        "imageUrl": "https://static.wikia.nocookie.net/starwars/images/a/a9/V-wing_BF2.png"
    }
]

export default shipModels