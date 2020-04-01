export const scrapeRequest = require('request');
export const cheerio = require('cheerio');
export const tableParser = require('cheerio-tableparser');

export const getHost = () => `http://127.0.0.1:4000/graphql`;

export const depthChartUrl = 'https://www.espn.com/nfl/team/depth/_/name/';

export const positions = [
    'QB',
    'RB',
    'WR',
    'TE'
];

export const teams = [
    {
        id: 1,
        abbr: 'ari',
        name: 'arizona cardinals'
    },
    {
        id: 2,
        abbr: 'atl',
        name: 'atlanta falcons'
    },
    {
        id: 3,
        abbr: 'bal',
        name: 'baltimore ravens'
    },
    {
        id: 4,
        abbr: 'buf',
        name: 'buffalo bills'
    },
    {
        id: 5,
        abbr: 'car',
        name: 'carolina panthers'
    },
    {
        id: 6,
        abbr: 'chi',
        name: 'chicago bears'
    },
    {
        id: 7,
        abbr: 'cin',
        name: 'cincinnati bengals'
    },
    {
        id: 8,
        abbr: 'cle',
        name: 'cleveland browns'
    },
    {
        id: 9,
        abbr: 'dal',
        name: 'dallas cowboys'
    },
    {
        id: 10,
        abbr: 'den',
        name: 'denver broncos'
    },
    {
        id: 11,
        abbr: 'det',
        name: 'detroit lions'
    },
    {
        id: 12,
        abbr: 'gb',
        name: 'green bay packers'
    },
    {
        id: 13,
        abbr: 'hou',
        name: 'houston texans'
    },
    {
        id: 14,
        abbr: 'ind',
        name: 'indianapolis colts'
    },
    {
        id: 15,
        abbr: 'jax',
        name: 'jacksonville jaguars'
    },
    {
        id: 16,
        abbr: 'kc',
        name: 'kansas city chiefs'
    },
    {
        id: 17,
        abbr: 'lv',
        name: 'las vegas raiders'
    },
    {
        id: 18,
        abbr: 'lac',
        name: 'los angeles chargers'
    },
    {
        id: 19,
        abbr: 'lar',
        name: 'los angeles rams'
    },
    {
        id: 20,
        abbr: 'mia',
        name: 'miami dolphins'
    },
    {
        id: 21,
        abbr: 'min',
        name: 'minnesota vikings'
    },
    {
        id: 22,
        abbr: 'no',
        name: 'new orleans saints'
    },
    {
        id: 23,
        abbr: 'nyg',
        name: 'new york giants'
    },
    {
        id: 24,
        abbr: 'nyj',
        name: 'new york jets'
    },
    {
        id: 25,
        abbr: 'ne',
        name: 'new england patriots'
    },
    {
        id: 26,
        abbr: 'phi',
        name: 'philadelphia eagles'
    },
    {
        id: 27,
        abbr: 'pit',
        name: 'pittsburgh steelers'
    },
    {
        id: 28,
        abbr: 'sf',
        name: 'san francisco 49ers'
    },
    {
        id: 29,
        abbr: 'sea',
        name: 'seattle seahawks'
    },
    {
        id: 30,
        abbr: 'tb',
        name: 'tampa bay'
    },
    {
        id: 31,
        abbr: 'ten',
        name: 'tennessee titans'
    },
    {
        id: 32,
        abbr: 'wsh',
        name: 'washington redskins'
    }
];