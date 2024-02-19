const DISPLAY_WIDTH = window.innerWidth;
const DISPLAY_HEIGHT = window.innerHeight;
const BASE_COLOR = '#1f2449';
const SNOW_SPEED = 1/8;
const SNOW_WIDTH = 2;

const SNOWFLAKE_TEMPLATE = [
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [1, 1, 1, 1, 1, 1, 1, 1, 1],
    [0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 0, 0, 1, 0],
    [1, 0, 0, 0, 1, 0, 0, 0, 1],
];

function setBaseColor(ctx, width, height) {
    ctx.fillStyle = BASE_COLOR;
    ctx.fillRect(0, 0, width, height);
}

function initSnowFallAnimation(width, height) {
    const snowCanvas = document.getElementById('snow-canvas');
    snowCanvas.setAttribute('width', width);
    snowCanvas.setAttribute('height', height);

    const snowCtx = snowCanvas.getContext('2d');

    setBaseColor(snowCtx, width, height);

    return snowCtx;
}

// { x: number, y: number, moveType: quadratic }
const snows = [];

function getRandom(max) {
    return Math.round(Math.random() * max);
}

function generateSnows(width, height) {
    for (let y = 0; y < height; y++) {
        for (let x = 0; x < width; x++) {
            const random = getRandom(width);

            if (random === 100) {
                const snow = { x, y };
                snows.push(snow)
            }
        }
    }
}

function renderSnowflake(posX, posY, ctx, template = SNOWFLAKE_TEMPLATE) {
    for (let y = 0; y < template.length; y++) {
        const row = template[y];

        for (let x = 0; x < row.length; x++) {
            if (row[x] === 0) continue;

            ctx.fillRect(posX + x, posY + y, 1, 1);
        }
    }
}

function renderSnowflakes(ctx, snowsData) {
    ctx.fillStyle = '#fff';

    for (let i = 0; i < snowsData.length; i++) {
        const snowflake = snowsData[i];
        renderSnowflake(snowflake.x, snowflake.y, ctx);
    }
}

function moveSnowfall_old(snowsData) {
    for(let i = 0; i < snowsData.length; i++) {
        if (snowsData[i].y === DISPLAY_HEIGHT)
            snowsData[i].y = -10;
        else
            snowsData[i].y += 1;
    }
}

function moveSnowfall(snowsData) {
    for(let i = 0; i < snowsData.length; i++) {
        if (snowsData[i].y === DISPLAY_HEIGHT)
            snowsData[i].y = -10;
        snowsData[i].y += 1;
        snowsData[i].x += Math.sin(snowsData[i].y*SNOW_SPEED)*SNOW_WIDTH;
    }
}

const snowCtx = initSnowFallAnimation(DISPLAY_WIDTH, DISPLAY_HEIGHT);

generateSnows(DISPLAY_WIDTH, DISPLAY_HEIGHT);

setInterval(function() {
    setBaseColor(snowCtx, DISPLAY_WIDTH, DISPLAY_HEIGHT);
    moveSnowfall(snows);
    renderSnowflakes(snowCtx, snows);
}, 10)

// console.log(snows, snows.length);
