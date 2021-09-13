const generateNumdersRange = (from, to) => {
  const result = [];
  for (let i = from; i <= to; i += 1) {
    result.push(i);
  }
  return result;
};
// generate seats
const getLineSeats = () =>
  generateNumdersRange(1, 10)
    .map(
      (seatNumber) => `<div
class="sector__seat"
data-seats-number="${seatNumber}"
></div>`
    )
    .join('');

// generate Lines
const getSectorLines = () => {
  const seatsString = getLineSeats();
  return generateNumdersRange(1, 10)
    .map(
      (lineNumber) => `<div
class="sector__line"
data-line-number="${lineNumber}"
>${seatsString}</div>`
    )
    .join('');
};

const arenaElem = document.querySelector('.arena');

// generate sectors
const renderArena = () => {
  const linesSstring = getSectorLines();

  const sectorsString = generateNumdersRange(1, 3)
    .map(
      (sectorNumber) => `<div
class="sector"
data-sector-number="${sectorNumber}"
>${linesSstring}</div>`
    )
    .join('');
  arenaElem.innerHTML = sectorsString;
};

// event delegation
const onSeatSelect = (event) => {
  const isSeat = event.target.classList.contains('sector__seat');
  if (!isSeat) {
    return;
  }

  const seatNumber = event.target.dataset.seatsNumber;
  const lineNumber = event.target.closest('.sector__line').dataset.lineNumber;
  const sectorNumber = event.target.closest('.sector').dataset.sectorNumber;

  const selectedseatElem = document.querySelector('.board__selected-seat');
  selectedseatElem.textContent = `S ${sectorNumber} - L ${lineNumber} - S ${seatNumber}`;
};

arenaElem.addEventListener('click', onSeatSelect);

renderArena();
