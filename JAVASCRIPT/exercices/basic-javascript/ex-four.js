today = new Date();

const christmas = new Date(today.getFullYear(), 11, 25);

    if (today.getMonth() == 11 && today.getDate() > 25) {
        christmas.setFullYear(christmas.getFullYear() + 1);
    }

const milliSeconds = 1000 * 60 * 60 * 24;

console.log( Math.round((christmas.getTime() - today.getTime()) / milliSeconds) + " days left until Christmas!");
