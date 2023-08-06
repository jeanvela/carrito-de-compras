
interface Games {
    id: number
    title: string
    description: string
    price: number
    image: string
    platform: string[]
    amount: number
}


const videoGames: Games[] = [
    {
        id: 1,
        title: "Resident evil 4 remake",
        description: "Resident Evil 4 is a 2023 survival horror game developed and published by Capcom. It is a remake of the 2005 game Resident Evil 4. Players control the US agent Leon S. Kennedy, who must save Ashley Graham, the daughter of the United States president, from the mysterious Los Illuminados cult.",
        price: 15000,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202210/0706/EVWyZD63pahuh95eKloFaJuC.png",
        platform: ["Pc","Playstation 5","Playstation 4", "Xbox series S/X"],
        amount: 1
    },
    {
        id: 2,
        title: "Resident evil 2 remake",
        description: "Resident Evil 2 Remake will return us to Raccoon City, the North American city from the Capcom game series, controlled by the Umbrella corporation and in which there has been a biological security breach that has turned all its inhabitants into zombies and mutant creatures.",
        price: 12000,
        image: "https://www.cloudgamingcatalogue.com/wp-content/uploads/2022/05/Resident-Evil-2.jpg",
        platform: ["Pc","Playstation 5","Playstation 4", "Xbox series S/X"],
        amount: 1
    },
    {
        id: 3,
        title: "Resident evil 6",
        description: "Resident Evil 6 allows players to select between four scenarios with interwoven storylines centered on Division of Security Operations (DSO) agent Leon S. Kennedy, Bioterrorism Security Assessment Alliance (BSAA) Captain Chris Redfield, mercenary Jake Muller and spy Ada Wong.",
        price: 6000,
        image: "https://resim.epey.com/163288/m_resident-evil-6-ps3-1.jpg",
        platform: ["Pc","Playstation 3","Playstation 4","Xbox one","Nintendo Switch","Xbox 360"],
        amount: 1
    },
    {
        id: 4,
        title: "Resident evil 5",
        description: "The plot involves an investigation of a terrorist threat by Bioterrorism Security Assessment Alliance agents Chris Redfield and Sheva Alomar in Kijuju, a fictional region of West Africa. Chris learns that he must confront his past in the form of an old enemy, Albert Wesker, and his former partner, Jill Valentine.",
        price: 5500,
        image: "https://image.api.playstation.com/cdn/UP0102/CUSA04437_00/xAtMOkY23P4b0hj4gy8ZMiBgIcknZjKM.png",
        platform: ["Pc","Playstation 3","Playstation 4","Xbox one","Nintendo Switch","Xbox 360"],
        amount: 1
    },
    {
        id: 5,
        title: "Resident Evil 7: Biohazard",
        description: "In Resident Evil 7, Ethan Winters receives a mysterious message from his wife Mia, who has been missing for years. This leads him to a secluded plantation in rural Louisiana, where he finds his wife, only to discover that she's violent and has bizarre regenerative powers.",
        price: 15000,
        image: "https://image.api.playstation.com/cdn/UP0102/CUSA04772_00/cxd9vkFOAHVwwYG7lQKENGkrfyoAChNh.png",
        platform: ["Pc","Playstation 5","Playstation 4","Xbox one","Nintendo Switch","Xbox series S/X"],
        amount: 1
    },
    {
        id: 6,
        title: "Resident Evil Village",
        description: "Ethan Winters' wife & daughter are kidnapped and brought to a village deep within the snowy mountains of Europe. There he must fight against various monsters such as Vampires, Lycans, Wolves, Witches, Fishmen, Dolls, Zombies & industrial abominations in order to save his family from the evil Mother Miranda.",
        price: 17000,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202101/0812/FkzwjnJknkrFlozkTdeQBMub.png",
        platform: ["Pc","Playstation 5","Playstation 4","Xbox one","Nintendo Switch","Xbox series S/X"],
        amount: 1
    },
    {
        id: 7,
        title: "The Last of Us Part II",
        description: "Set five years after The Last of Us (2013), the game focuses on two playable characters in a post-apocalyptic United States whose lives intertwine: Ellie, who sets out in revenge for a murder, and Abby, a soldier who becomes involved in a conflict between her militia and a religious cult.",
        price: 16000,
        image: "https://image.api.playstation.com/vulcan/img/rnd/202010/2618/w48z6bzefZPrRcJHc7L8SO66.png",
        platform: ["Playstation 5","Playstation 4","Strategy"],
        amount: 1
    },
    {
        id: 8,
        title: "The Last of Us",
        description: "The Last of Us is a 2013 action-adventure game developed by Naughty Dog and published by Sony Computer Entertainment. Players control Joel, a smuggler tasked with escorting a teenage girl, Ellie, across a post-apocalyptic United States. The Last of Us is played from a third-person perspective.",
        price: 5000,
        image: "https://i.blogs.es/juegos/18551/the_last_of_us_remake/fotos/ficha/the_last_of_us_remake-5734699.jpg",
        platform: ["Pc","Playstation 3","Playstation 4","Strategy"],
        amount: 1
    },
    {
        id: 9,
        title: "Uncharted 4: El desenlace del ladrón",
        description: "Uncharted 4: A Thief's End is an action-adventure game played from a third-person perspective, with platforming elements. Players traverse several environments, moving through locations including towns, buildings, and wilderness to advance through the game's story.",
        price: 15000,
        image: "https://m.media-amazon.com/images/M/MV5BMTYzYzIxMjktMDM4NS00MTM5LWJlMDgtNDRhMDNhOGRmY2EwXkEyXkFqcGdeQXVyMTk2OTAzNTI@._V1_.jpg",
        platform: ["Pc","Playstation 5","Playstation 4","Strategy"],
        amount: 1
    },
    {
        id: 10,
        title: "Watch Dogs 2",
        description: "Similar to its predecessor, Watch Dogs 2 is an action-adventure game with stealth elements and played from a third-person perspective as Marcus Holloway, a young hacker.",
        price: 13500,
        image: "https://store-images.s-microsoft.com/image/apps.26142.69997608528322872.06dc9610-5c4e-484e-b028-58ad215e637a.b216af15-301f-4f23-83a3-69a59a87985b",
        platform: ["Pc","Playstation 4","Xbox one"],
        amount: 1
    },
    {
        id: 11,
        title: "FIFA 22",
        description: "The game features more than 30 officially licensed leagues, more than 700 clubs, and more than 17,000 players. For the first time, the Indian Super League and its eleven teams were added, as well as the UEFA Europa Conference League, the third tier of European club football established in 2021.",
        price: 14000,
        image: "https://store.playstation.com/store/api/chihiro/00_09_000/container/CL/es/99/UP0006-CUSA27110_00-FIFAFOOTBALL2022/0/image?_version=00_09_000&platform=chihiro&bg_color=000000&opacity=100&w=720&h=720",
        platform: ["Pc","Playstation 5","Playstation 4","Xbox one","Nintendo Switch","Xbox series S/X"],
        amount: 1
    },
    {
        id: 12,
        title: "God of War 4",
        description: "As mentor and protector to Atreus, a son determined to earn his respect, he is forced to deal with and control the rage that has long defined him while out in a very dangerous world with his son. His vengeance against the Gods of Olympus behind him, Kratos now lives in the realm of Norse deities and monsters.",
        price: 15000,
        image: "https://rickygame.com.ar/wp-content/uploads/2021/09/god-41-43a2e19293fa5c11cd15879211330939-1024-1024.jpg",
        platform: ["Pc","Playstation 4"],
        amount: 1
    },
    {
        id: 13,
        title: "God of War: Ragnarök",
        description: "God of War Ragnarök is an action-adventure game developed by Santa Monica Studio and published by Sony Interactive Entertainment. It was released worldwide on November 9, 2022, for both the PlayStation 4 and PlayStation 5, marking the first cross-gen release in the God of War series.",
        price: 18000,
        image: "https://image.api.playstation.com/vulcan/ap/rnd/202207/1210/4xJ8XB3bi888QTLZYdl7Oi0s.png",
        platform: ["Playstation 5","Playstation 4"],
        amount: 1
    },
    {
        id: 14,
        title: "Call of Duty: WWII",
        description: "Call of Duty: WWII is the fourteenth game in the Call of Duty franchise and Sledgehammer Games' second to be developed in a three-year development cycle. Set during World War II, it tells the story of an unbreakable brotherhood of common men fighting to preserve freedom in a world on the brink of tyranny.",
        price: 12000,
        image: "https://image.api.playstation.com/cdn/UP0002/CUSA08602_00/zu7qYQztIwUYzw2H8iArIzKhwsfdnDs9.png",
        platform: ["Pc","Playstation 4","Xbox one"],
        amount: 1
    },
    {
        id: 15,
        title: "Call of Duty: Modern Warfare 2",
        description: "Call of Duty®: Modern Warfare® II drops players into an unprecedented global conflict that features the return of the iconic Operators of Task Force 141. From small-scale, high-stakes infiltration tactical ops to highly classified missions, players will deploy alongside friends in a truly immersive experience.",
        price: 14500,
        image: "https://i.3djuegos.com/juegos/18491/call_of_duty_modern_warfare_2/fotos/ficha/call_of_duty_modern_warfare_2-5754880.jpg",
        platform: ["Pc","Playstation 5","Playstation 4","Xbox one","Xbox series S/X"],
        amount: 1
    },
]

export default videoGames