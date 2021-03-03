function tvShows(shows, durations, k) {

  let obj = {};

  for (let i=0; i<shows.length; i++) {
    if (obj[shows[i]]) {
      obj[shows[i]] += durations[i]
    } else {
      obj[shows[i]] = durations[i]
    }
  }

  let keys = Object.keys(obj);

  keys.sort((a,b) => obj[b] - obj[a]);
  console.log(keys)

  let total = 0;

  for (let i=0; i<k; i++) {
    total += obj[keys[i]]
  }

  return total 

}

console.log(tvShows(["Top Gun", "Aviator", "Top Gun", "Roma", "Logan"], [5, 3, 5, 13, 4], 2))
