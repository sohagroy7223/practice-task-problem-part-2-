function calculatWatchTime(times) {
    let sum = 0;
    for (const time of times) {
        sum = sum + time;
    }
    const hour = Math.floor(sum / 3600);
    const remainingSecond = sum % 3600;

    const minute = Math.floor(remainingSecond / 60);
    const second = Math.floor(remainingSecond % 60);
    return `${hour} hour ${minute} minute ${second} second`;
}
const facebook = 1800;
const instragram = 500;
const tiktok = 1200;
const YouTube = 600;

const result = calculatWatchTime([facebook, instragram, tiktok, YouTube]);
console.log("total time is:", result);
