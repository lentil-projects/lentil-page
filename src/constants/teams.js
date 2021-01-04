import greg from '../assets/logos/greg.png';

export const teamNames = {
    team1: 'Airiel/SurlyFish',
    team2: 'RitterDesRechts',
    team3: 'Basic Bitches',
    team4: 'Hippo_run/skyruby',
    team5: 'ScrapIron/Master_Beef',
    team6: 'GuanFranco/crochet',
    team7: 'hyap/Albatross',
    team8: 'Team Greg'
}

const flags = {
    usa: 'https://seeklogo.com/images/A/American_Flag-logo-4ECE0EED17-seeklogo.com.png'
}

export const playerNames = {
    team1: [
        {
            seed: 1,
            flag: flags.usa,
            player: 'Airiel',
            elo: '1378',
            twitch: 'https://www.twitch.tv/airiel_aoc'
        },
        {
            player: 'SurlyFish',
            elo: '~850'
        }
    ],
    team2: [
        {
            player: 'Invictus',
            elo: '1295',
            seed: 2,
            twitch: 'https://www.twitch.tv/invictus1988spqr'
        },
        {
            player: 'HopesPokes',
            elo: '904'
        }
    ],
    team3: [
        {
            seed: 3,
            player: 'EmpiranT',
            elo: '1387',
            twitch: 'https://www.twitch.tv/empirant',
            flag: flags.usa
        },
        {
           player: 'Gingersnap',
            elo: '~800',
            flag: flags.usa
        }
    ],
    team4: [
        {
            player: 'Hippo_run',
            elo: '1284',
            seed: 4,
            twitch: 'https://www.twitch.tv/hippo_run',
            flag: flags.usa
        },
        {
            player: 'skyruby',
            elo: '~900'
        }
    ],
    team5: [
        {
            player: 'ScrapIron',
            elo: '1042',
            seed: 5
        },
        {
            player: 'Master_Beef',
            elo: '996',
        }
    ],
    team6: [
        {
            player: 'GuanFranco',
            elo: '1228',
            seed: 6,
            twitch: 'https://www.twitch.tv/guanfranco'
        },
        {
            player: 'crochet',
            elo: '768',
            flag: flags.usa,
            twitch: 'https://www.twitch.tv/crochetcode'
        }
    ],
    team7: [
        {
            player: 'hyap',
            elo: '1043',
            seed: 7
        },
        {
            player: 'Albatross_Rex',
            elo: '850'
        }
    ],
    team8: [
        {
            player: 'Piña Koala',
            elo: '~1000',
            seed: 8,
            flag: flags.usa,
            logo: greg
        },
        {
            player: 'GrayCarbon',
            elo: '~800',
            flag: flags.usa
        }
    ],
}