const getDetailTitles = {
    planets: [
        {
            key: "diameter",
            title: "Diameter"
        },
        {
            key: "population",
            title: "Population"
        },
        {
            key: "orbital_period",
            title: "Orbital Period"
        },
        {
            key: "rotation_period",
            title: "Rotation Period"
        },
        {
            key: "terrain",
            title: "Terrain"
        },
        {
            key: "gravity",
            title: "Gravity"
        }
    ],
    ships: [
        {
            key: "max_atmosphering_speed", 
            title: "Max Atmosphering Speed"
        },
        {
            key: "manufacturer", 
            title: "Manufacturer"
        },
        {
            key: "crew",
            title: "Crew"
        },
        {
            key: "cargo_capacity",
            title: "Cargo Capacity"
        },
        {
            key: "length",
            title: "Length"
        },
        {
            key: "passengers",
            title: "Passengers"
        }
    ],
    vehicles: [
        {
            key: "max_atmosphering_speed", 
            title: "Max Atmosphering Speed"
        },
        {
            key: "manufacturer", 
            title: "Manufacturer"
        },
        {
            key: "crew",
            title: "Crew"
        },
        {
            key: "cargo_capacity",
            title: "Cargo Capacity"
        },
        {
            key: "length",
            title: "Length"
        },
        {
            key: "passengers",
            title: "Passengers"
        }
    ],
    characters: [
        {
            key: "birth_year",
            title: "Birth Year"
        },
        {
            key: "gender",
            title: "Gender"
        },
        {
            key: "height",
            title: "Height"
        },
        {
            key: "mass",
            title: "Mass"
        },
        {
            key: "hair_color",
            title: "Hair Color"
        },
        {
            key: "eye_color",
            title: "Eye Color"
        }
    ],
    films: [
        {
            key: "director",
            title: "Director"
        },
        {
            key: "episode_id",
            title: "Episodes"
        },
        {
            key: "producer",
            title: "Producer"
        },
        {
            key: "release_date",
            title: "Release Date"
        }
    ],
    races: [
        {
            key: "average_height",
            title: "Average Height"
        },
        {
            key: "average_lifespan",
            title: "Average Lifespan"
        },
        {
            key: "classification",
            title: "Classification"
        },
        {
            key: "language",
            title: "Language"
        },
        {
            key: "designation",
            title: "Designation"
        },
        {
            key: "skin_colors",
            title: "Skin Colors"
        }
    ]
}

const getType = (type) => {
    switch (type) {
        case "people":
        case "pilots":
        case "residents":
            return "characters"
        case "species":
            return "races"
        case "starships":
            return "ships"
        default:
            return type
    }
}

export { getDetailTitles, getType }