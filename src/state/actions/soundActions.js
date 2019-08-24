export const PLAY = 'PLAY';
export const STOP = 'STOP';

export const playSound = (url) => {
    return {
        type: PLAY,
        url: url,
    };
}

export const stopSound = () => {
    return {
        type: STOP,
    };
}