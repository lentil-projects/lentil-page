import greg from '../assets/logos/greg.png';
import twins from '../assets/logos/twins.jpg';

export const teamNames = {
    team1: 'Airiel/SurlyFish',
    team2: 'RitterDesRechts',
    team3: 'Basic Bitches',
    team4: 'Hippo_run/skyruby',
    team5: 'ScrapIron/Master_Beef',
    team6: 'The Minnesota Twins',
    team7: 'King Bird',
    team8: 'Team Greg'
}

const flags = {
    usa: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
    germany: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
    trinidad: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg'
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
            flag: flags.germany,
            seed: 2,
            twitch: 'https://www.twitch.tv/invictus1988spqr'
        },
        {
            player: 'HopesPokes',
            elo: '904',
            flag: flags.germany
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
            seed: 5,
            flag: flags.usa
        },
        {
            player: 'Master_Beef',
            elo: '996',
            flag: flags.usa
        }
    ],
    team6: [
        {
            player: 'GuanFranco',
            logo: twins,
            elo: '1228',
            seed: 6,
            twitch: 'https://www.twitch.tv/guanfranco',
            flag: flags.trinidad
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
            player: 'nyap',
            elo: '1043',
            seed: 7,
            flag: flags.usa
        },
        {
            player: 'Albatross_Rex',
            elo: '850',
            flag: flags.usa
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