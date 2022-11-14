document.querySelector("button").addEventListener("click", function () {
    const gender = document.querySelector("#gender").value; // valgte køn fra select (dropdown)
    const age = document.querySelector("#age").value; // indtastede alder fra inputfelt

    // kalder funktionen whichGender og sætter #result-gender i HTML
    document.querySelector("#result-gender").innerHTML = whichGender(gender, age);

    // kalder funktionen intervalAge med indtastet age og sætter #result-age i HTML
    document.querySelector("#result-age").innerHTML = intervalAge(age);

    const sleepTime = document.querySelector("#sleep-time").value; // valgte tid i Sleep Time
    const wakeUptime = document.querySelector("#wake-up-time").value; // valgte tid i Wake Up Time

    //kalder funktionen calculateSleepTime med sleepTime og wakeUpTime
    document.querySelector("#result-sleep-time").innerHTML = calculateSleepTime(sleepTime, wakeUptime);
});

// funktionen returnerer "You are a female adult..."
// eller "You are a male adult" på baggrund af gender og age
function whichGender(gender, age) {
    if (gender === "female" && age >= 18) {
        return "You are a female adult and science say that women need a bit more sleep than men, because of hormonal relationship";
    } else if (gender === "male" && age >= 18) {
        return "You are a male adult and science say that men have a bit of less need of sleep, because women's brain is a little more complex";
    }
}

// funktionen returnerer en tekst,
// der beskriver søvnbehov på baggrund af indtastede alder
function intervalAge(age) {
    if (age <= 3) {
        return "Babies need to sleep ca. 18 hours per day.";
    } else if (age >= 3 && age <= 5) {
        return "Toddlers need to sleep 12 hours per day.";
    } else if (age >= 6 && age <= 12) {
        return "School kids need to sleep 11-14 hours per day.";
    } else if (age >= 13 && age <= 17) {
        return "Teenagers need to sleep 9-11 hours per day.";
    } else if (age >= 18) {
        return "Adults need to sleep 7-9 hours per day.";
    }
}

//funktionen beregner forskellen mellem sleep og wakeUp
//som kommer fra dato-inputfelterne
function calculateSleepTime(sleep, wakeUp) {
    // dato splittes, så vi kan læse timer og minutter
    sleep = sleep.split(":");
    wakeUp = wakeUp.split(":");

    // sleep og wakeUp laves om til en Date. Date er et JavaScript datoformat.
    const sleepDate = new Date(0, 0, 0, sleep[0], sleep[1], 0);
    const wakeUpDate = new Date(0, 0, 0, wakeUp[0], wakeUp[1], 0);

    //vi beregner forskellen med sleepDate og wakeUpDate
    //.getTime() giver en tid i millisekunder
    const diff = wakeUpDate.getTime() - sleepDate.getTime();
    // forskellen i milisekunder laves om til en JavaScript Date
    const dateDiff = new Date(diff);
    // vi trækker antal timer ud fra dateDiff
    const hoursDiff = dateDiff.getUTCHours();
    // vi trækker antal minutter ud fra dateDiff
    const mintutesDiff = dateDiff.getUTCMinutes();
    // hoursDiff og mintutesDiff anvendes til at lave en besked til brugeren:
    // "You sleepp xx hours and xx minutes."
    return "You sleep " + hoursDiff + " hours and " + mintutesDiff + " minutes.";
}
