const COUNTRY_HOLIDAYS = {
  JP: {
    '2021-01-01': 'New Year\'s Day',
    '2021-01-11': 'Coming of Age Day',
    '2021-02-11': 'National Foundation Day',
    '2021-02-23': 'Emperor\'s Birthday',
    '2021-03-20': 'Vernal Equinox Day',
    '2021-04-29': 'Showa Day',
    '2021-05-03': 'Constitution Memorial Day',
    '2021-05-04': 'Greenery Day',
    '2021-05-05': 'Children\'s Day',
    '2021-07-22': 'Marine Day',
    '2021-07-23': 'Sports Day',
    '2021-08-08': 'Mountain Day',
    '2021-09-20': 'Respect for the Aged Day',
    '2021-09-23': 'Autumnal Equinox Day',
    '2021-11-03': 'Culture Day',
    '2021-11-23': 'Labor Thanksgiving Day',
  },
  US: {
    '2021-01-01': 'New Year\'s Day',
    '2021-01-18': 'Martin Luther King Jr. Day',
    '2021-01-20': 'Inauguration Day',
    '2021-02-15': 'Presidents\' Day',
    '2021-05-31': 'Memorial Day',
    '2021-07-05': 'Independence Day',
    '2021-09-06': 'Labor Day',
    '2021-10-11': 'Columbus Day',
    '2021-11-11': 'Veterans Day',
    '2021-11-25': 'Thanksgiving Day',
    '2021-12-24': 'Christmas Day',
  }
};

const TIMEZONE_COUNTRY_MAPPING = {
  'Asia/Tokyo': 'JP',
  'America/New_York': 'US',
  'America/Detroit': 'US',
  'America/Kentucky/Louisville': 'US',
  'America/Kentucky/Monticello': 'US',
  'America/Indiana/Indianapolis': 'US',
  'America/Indiana/Vincennes': 'US',
  'America/Indiana/Winamac': 'US',
  'America/Indiana/Marengo': 'US',
  'America/Indiana/Petersburg': 'US',
  'America/Indiana/Vevay': 'US',
  'America/Chicago': 'US',
  'America/Indiana/Tell_City': 'US',
  'America/Indiana/Knox': 'US',
  'America/Menominee': 'US',
  'America/North_Dakota/Center': 'US',
  'America/North_Dakota/New_Salem': 'US',
  'America/North_Dakota/Beulah': 'US',
  'America/Denver': 'US',
  'America/Boise': 'US',
  'America/Phoenix': 'US',
  'America/Los_Angeles': 'US',
  'America/Anchorage': 'US',
  'America/Juneau': 'US',
  'America/Sitka': 'US',
  'America/Yakutat': 'US',
  'America/Nome': 'US',
  'America/Adak': 'US',
  'America/Metlakatla': 'US',
  'Pacific/Honolulu': 'US',
};

function getHoliday(moment) {
  let timezone = moment.tz();
  let country = TIMEZONE_COUNTRY_MAPPING[timezone];
  if (country !== undefined) {
    return COUNTRY_HOLIDAYS[country][moment.format('YYYY-MM-DD')];
  } else {
    return undefined;
  }
}
