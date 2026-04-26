import { healthDefine } from "../healthStatus";

test ('healthy', () => {
    const character = {name: 'Маг', health: 90};
    const healthStatus = healthDefine(character);
    expect (healthStatus).toBe ('health');
})

test ('wounded', () => {
    const character = {name: 'Некто', health: 30};
    const healthStatus = healthDefine(character);
    expect (healthStatus).toBe ('wounded');
})

test ('critical', () => {
    const character = {name: 'Ещё кто-то', health: 10};
    const healthStatus = healthDefine(character);
    expect (healthStatus).toBe ('critical');
})
