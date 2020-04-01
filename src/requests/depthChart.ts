import { request } from 'graphql-request'; 
import {
    scrapeRequest,
    cheerio,
    tableParser,
    teams,
    depthChartUrl,
    positions,
    getHost
} from '../constants';
import { createPlayer } from '../queries';

export const depthChart = () => {
    teams.forEach(team => {
        const url = `${depthChartUrl}${team.abbr}`;
        let playerString = '';
        let position = '';
        let depthChartPos = 0;

        scrapeRequest(url, async (error, response, html) => {
            if (!error && response.statusCode == 200) {
                let $ = cheerio.load(html);

                tableParser($);
                const data = $('.Table').parsetable();

                data[0].forEach( async (span, index) => {
                    if (span.includes('class="AnchorLink"')) {
                        if (index >= 13 && index <= 18) {
                            playerString = span.substring(span.indexOf('href'), span.indexOf('</a>'));
                            playerString = playerString.substring(playerString.indexOf('">') + 2, playerString.length);

                            switch (index) {
                                case 13:
                                    position = positions[0];
                                    depthChartPos = 1;
                                    break;
                                case 14:
                                    position = positions[1];
                                    depthChartPos = 1;
                                    break;
                                case 15:
                                    position = positions[2];
                                    depthChartPos = 1;
                                    break;
                                case 16:
                                    position = positions[2];
                                    depthChartPos = 2;
                                    break;
                                case 17:
                                    position = positions[2];
                                    depthChartPos = 3;
                                    break;
                                case 18:
                                    position = positions[3];
                                    depthChartPos = 1;
                                    break;
                            };

                            const p = {
                                firstName: playerString.substring(0, playerString.indexOf(' ')),
                                lastName: playerString.substring(playerString.indexOf(' ') + 1, playerString.length),
                                team: team.id,
                                position: position,
                                depthChartPos: depthChartPos
                            };

                            await request(getHost(), createPlayer(
                                p.firstName,
                                p.lastName,
                                p.team,
                                p.position,
                                p.depthChartPos
                            ))
                        }
                    }
                });

                data[1].forEach(async (span, index) => {
                    if (span.includes('class="AnchorLink"')) {
                        if (index >= 13 && index <= 18) {
                            playerString = span.substring(span.indexOf('href'), span.indexOf('</a>'));
                            playerString = playerString.substring(playerString.indexOf('">') + 2, playerString.length);

                            switch (index) {
                                case 13:
                                    position = positions[0];
                                    depthChartPos = 2;
                                    break;
                                case 14:
                                    position = positions[1];
                                    depthChartPos = 2;
                                    break;
                                case 15:
                                    position = positions[2];
                                    depthChartPos = 4;
                                    break;
                                case 16:
                                    position = positions[2];
                                    depthChartPos = 5;
                                    break;
                                case 17:
                                    position = positions[2];
                                    depthChartPos = 6;
                                    break;
                                case 18:
                                    position = positions[3];
                                    depthChartPos = 2;
                                    break;
                            };

                            const p = {
                                firstName: playerString.substring(0, playerString.indexOf(' ')),
                                lastName: playerString.substring(playerString.indexOf(' ') + 1, playerString.length),
                                team: team.id,
                                position: position,
                                depthChartPos: depthChartPos
                            };

                            await request(getHost(), createPlayer(
                                p.firstName,
                                p.lastName,
                                p.team,
                                p.position,
                                p.depthChartPos
                            ))
                        }
                    }
                });

                data[2].forEach(async (span, index) => {
                    if (span.includes('class="AnchorLink"')) {
                        if (index >= 13 && index <= 18) {
                            playerString = span.substring(span.indexOf('href'), span.indexOf('</a>'));
                            playerString = playerString.substring(playerString.indexOf('">') + 2, playerString.length);

                            switch (index) {
                                case 13:
                                    position = positions[0];
                                    depthChartPos = 3;
                                    break;
                                case 14:
                                    position = positions[1];
                                    depthChartPos = 3;
                                    break;
                                case 15:
                                    position = positions[2];
                                    depthChartPos = 7;
                                    break;
                                case 16:
                                    position = positions[2];
                                    depthChartPos = 8;
                                    break;
                                case 17:
                                    position = positions[2];
                                    depthChartPos = 9;
                                    break;
                                case 18:
                                    position = positions[3];
                                    depthChartPos = 3;
                                    break;
                            };

                            let firstname = playerString.substring(0, playerString.indexOf(' '));
                            firstname = firstname.replace('&apos;', `'`);
                            firstname = firstname.replace(' ', '');
                            const p = {
                                firstName: firstname,
                                lastName: playerString.substring(playerString.indexOf(' ') + 1, playerString.length),
                                team: team.id,
                                position: position,
                                depthChartPos: depthChartPos
                            };

                            await request(getHost(), createPlayer(
                                p.firstName,
                                p.lastName,
                                p.team,
                                p.position,
                                p.depthChartPos
                            ))
                        }
                    }
                });
            }
        });
    });
}