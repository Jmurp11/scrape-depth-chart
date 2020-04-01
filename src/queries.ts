export const createPlayer = (firstName, lastName, team, position,
    depthChartPos) => {
    return `
        mutation {
            createPlayer(input: {
                firstName: "${firstName}", lastName: "${lastName}", 
                team: ${team}, position: "${position}", depthChartPos: ${depthChartPos}
            }) {
                success{
                    message
                }
                errors {
                    message
                }
            }
        }
    `;
};
