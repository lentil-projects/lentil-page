import greg from '../assets/logos/greg.png';
import twins from '../assets/logos/twins.jpg';
import ernest from '../assets/logos/ernest.png';
import coffee from '../assets/logos/coffee5.png';
import hippo from '../assets/logos/chicken-hippo.png';
import bird from '../assets/logos/bird.png';
import jail from '../assets/logos/jail.png';
import rdr from '../assets/logos/RDR.png';

export const teamNames = {
    team1: 'Ernest Pudding\'s Gourd Surprise',
    team2: 'RitterDesRechts',
    team3: 'Basic Bitches',
    team4: 'Hippo Thiccc',
    team5: 'Dick Bremer\'s AOE Indictment',
    team6: 'The Minnesota Twins',
    team7: 'King Bird',
    team8: 'Team Greg'
}

export const shortNames = {
    team1: 'EPGS',
    team2: 'RitterDesRechts',
    team3: 'Basic Bitches',
    team4: 'Hippo Thiccc',
    team5: 'DBAOEI',
    team6: 'The Minnesota Twins',
    team7: 'King Bird',
    team8: 'Team Greg'
}

const flags = {
    usa: 'https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg',
    germany: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
    trinidad: 'https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg',
    canada: 'https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg'
}

export const playerNames = {
    team1: [
        {
            seed: 1,
            flag: flags.usa,
            logo: ernest,
            player: 'Airiel',
            elo: '1378',
            twitch: 'https://www.twitch.tv/airiel_aoc'
        },
        {
            player: 'SurlyFish',
            elo: '~850',
            flag: flags.usa
        }
    ],
    team2: [
        {
            player: 'Invictus',
            elo: '1295',
            flag: flags.germany,
            seed: 2,
            twitch: 'https://www.twitch.tv/invictus1988spqr',
            logo: rdr
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
            flag: flags.usa,
            logo: coffee
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
            flag: flags.usa,
            logo: hippo
        },
        {
            player: 'skyruby',
            elo: '~900',
            flag: flags.canada
        }
    ],
    team5: [
        {
            player: 'ScrapIron',
            elo: '1042',
            seed: 5,
            flag: flags.usa,
            logo: jail
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
            flag: flags.usa
        }
    ],
    team7: [
        {
            player: 'nyap',
            elo: '1043',
            seed: 7,
            flag: flags.usa,
            logo: bird
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