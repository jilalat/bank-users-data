'use strict';

let users = [
  {
    fullName: 'Teresa Reynolds',
    idNumber: '4709935578',
    description:
      'Bunkbed  Drop  down  Deflector  Risotto  Uplifted  Synergy  Vindicate  Java  Suave  Chosen  Sleet  Voting  Reclining  Diaper  Isolating  Unzip  Reporter  Golf  Showman  Flosss',
    currency: 'USD',
    deposit: '0190108',
    rate: '641544',
    balance: '-1598207735',
    status: 'ACTIVE',
  },
  {
    fullName: 'Lois Waters',
    idNumber: '6924871646',
    description:
      'Granny  Wince  Icon  Share  Astonish  Subsystem  Punctured  Auction  Bunkbed  Think  Lunchbox  Jingle  Letdown  Rubber  Snowstorm  Skedaddle  Cut  Mocker  Exclusive  Upbeat',
    currency: 'EUR',
    deposit: '4468146',
    rate: '892496',
    balance: '9369680749',
    status: 'INACTIVE',
  },
  {
    fullName: 'Roberta Francis',
    idNumber: '9434221226',
    description:
      'Hastily  Calcium  Outspoken  Subtitle  Doornail  Limes  Emote  Composure  Discount  Duchess  Shoplift  Prelude  Reformist  Aware  Satirical  Flatly  Flounder  Plus  Genre  Fidgeting',
    currency: 'EUR',
    deposit: '1472711',
    rate: '224769',
    balance: '-6908307213',
    status: 'PAID',
  },
  {
    fullName: 'Mable Caldwell',
    idNumber: '5764927799',
    description:
      'Catapult  Aflutter  Reformist  Falcon  Uncloak  Cusp  Enlarging  Extending  Spill  Thrash  Claim  Unreeling  Hatching  Alienate  Conduit  Silt  Immobile  Percolate  Rephrase  Dimple',
    currency: 'INR',
    deposit: '2489707',
    rate: '342142',
    balance: '0',
    status: 'OPEN',
  },
  {
    fullName: 'Genevieve Cortez',
    idNumber: '3962149490',
    description:
      'Random  Train  Pelvis  Nuclei  Slept  Sloping  Washcloth  Backroom  Backspin  Sandfish  Stir  Mowing  Absurd  Almost  Slimness  Embargo  Occupancy  Finer  Prenatal  Trade',
    currency: 'EUR',
    deposit: '8843045',
    rate: '812272',
    balance: '3166305644',
    status: 'ORDERED',
  },
  {
    fullName: 'Wayne Hubbard',
    idNumber: '4778738075',
    description:
      'Geologist  Parking  Tapestry  Shrunk  Reappoint  Prideful  Runaround  Trophy  Preacher  Richly  Courier  Hardcore  Stingy  Snugness  Unrushed  Movie  Reflex  Deduce  Calibrate  Wrath',
    currency: 'INR',
    deposit: '1461559',
    rate: '062410',
    balance: '-1122470730',
    status: 'ACTIVE',
  },
  {
    fullName: 'Lucy Elliott',
    idNumber: '7486292013',
    description:
      'Dreadful  Yearning  Legible  Stipulate  Factor  Refusal  Denatured  Ibuprofen  Shakiness  Catnip  Regulate  Panic  Subscript  Cargo  Slimy  Patience  Woven  Excitable  Scarf  Showoff',
    currency: 'EUR',
    deposit: '3524020',
    rate: '277289',
    balance: '3714576807',
    status: 'ORDERED',
  },
  {
    fullName: 'Darnell Barton',
    idNumber: '7609134786',
    description:
      'Salvage  Unmolded  Deceiving  Astonish  Roundness  Thickness  Marry  Unearth  Synthetic  Applicant  Monogamy  Sliceable  Thirteen  Casket  Humming  Sassy  Pediatric  Jogging  Detoxify  Jersey',
    currency: 'EUR',
    deposit: '1136287',
    rate: '247781',
    balance: '3902749183',
    status: 'ACTIVE',
  },
  {
    fullName: 'Melvin Bennett',
    idNumber: '9576569304',
    description:
      'Sssheet  Rinse  Slider  Circling  Placidly  Dictation  Game  Squire  District  Darwinism  Supremacy  Aggregate  Tingling  Shortlist  Entangled  Ruby  Product  Vocation  Gambling  Vindicate',
    currency: 'USD',
    deposit: '2582985',
    rate: '429851',
    balance: '5237845048',
    status: 'OPEN',
  },
  {
    fullName: 'Amber Griffith',
    idNumber: '5840109798',
    description:
      'Affection  Service  Likeness  Antihero  Absentee  Enforcer  Choosy  Elf  Shortage  Trousers  Roving  Scrutiny  Vitally  Dyslexia  Seismic  Attitude  Feisty  Suffering  Dowry  Anemic',
    currency: 'INR',
    deposit: '4856617',
    rate: '256769',
    balance: '7819995075',
    status: 'PAID',
  },
  {
    fullName: 'Cristina Snyder',
    idNumber: '5137168347',
    description:
      'Slang  Guide  Herald  Backing  Raking  Baboon  Punk  Previous  Skype  Uniquely  Pantry  Connector  Vanilla  Giving  Freemason  Register  Choking  Navigate  Public  Fetal',
    currency: 'EUR',
    deposit: '5977925',
    rate: '575380',
    balance: '6866997163',
    status: 'ACTIVE',
  },
  {
    fullName: 'Beth Perry',
    idNumber: '0894331518',
    description:
      'Rash  Viscosity  Lecturer  Define  Could  Condense  Shower  Founding  Activity  Mocha  Rinsing  Lilly  Reformer  Scarf  Trailside  Rehire  Fifth  Foam  Tightrope  Legislate',
    currency: 'INR',
    deposit: '5789310',
    rate: '530072',
    balance: '6560775003',
    status: 'ACTIVE',
  },
  {
    fullName: 'Chelsea Stone',
    idNumber: '5095488485',
    description:
      'Dime  Refusal  Faucet  Bluish  Renderer  Steadfast  Thrive  Impotent  Rockstar  Eternity  Cyclist  Mankind  Suds  Situation  Pull  Octagon  Stingray  Scorer  Music  Vendetta',
    currency: 'EUR',
    deposit: '5824163',
    rate: '484711',
    balance: '8592461599',
    status: 'INACTIVE',
  },
  {
    fullName: 'Thelma Padilla',
    idNumber: '1235213738',
    description:
      'Heap  Scoreless  Skater  Brittle  Symptom  Fencing  Prize  Nutty  Reorder  Uncloak  Faceted  Spree  Giant  Camcorder  Parish  Unfounded  Emboss  Agility  Unvented  Deskwork',
    currency: 'EUR',
    deposit: '0966945',
    rate: '655960',
    balance: '2312433214',
    status: 'ACTIVE',
  },
  {
    fullName: 'Irene Welch',
    idNumber: '4702604398',
    description:
      'Acclimate  Gag  Blot  Duckbill  Mummy  Replace  Overnight  Able  Quit  Deodorize  Jujitsu  Huddle  Starlight  Yippee  Eardrum  Easiest  Easing  Skewed  Concur  Aqueduct',
    currency: 'USD',
    deposit: '1832706',
    rate: '170854',
    balance: '3035524055',
    status: 'OPEN',
  },
  {
    fullName: 'Doris Chandler',
    idNumber: '3411999877',
    description:
      'Sliding  Colonial  Ungodly  Emit  Ounce  Frail  Flint  Backward  Dragonish  Sedate  Fanciness  Crimp  Breeder  Goofball  Ladder  Neglector  Celibacy  Lapped  Reusable  Yarn',
    currency: 'INR',
    deposit: '7200319',
    rate: '221401',
    balance: '3575076183',
    status: 'ACTIVE',
  },
  {
    fullName: 'Frances Black',
    idNumber: '9434221226',
    description:
      'Pacifier  Drum  Abreast  Distort  Lividly  Kinetic  Stowaway  Feast  Undoing  Paternal  Verse  Flagship  Suitcase  Wanted  Acronym  Dowry  Rubbed  Deceptive  Promotion  Parole',
    currency: 'EUR',
    deposit: '0140836',
    rate: '143802',
    balance: '8671405270',
    status: 'INACTIVE',
  },
  {
    fullName: 'Marcia Harris',
    idNumber: '1397034539',
    description:
      'Gestate  Tradition  Wildfowl  Public  Koala  Persuader  Cough  Dropper  Pluck  Economist  Brought  Herbicide  Radiantly  Trekker  Playing  Subprime  Subdued  Purplish  Stem  Pesticide',
    currency: 'USD',
    deposit: '7863259',
    rate: '959580',
    balance: '2044120124',
    status: 'PAID',
  },
  {
    fullName: 'Delores Foster',
    idNumber: '8674418779',
    description:
      'Waffle Gawk Eject Pond Fetch Astrology Bluff Platinum Proposal Shower Tainted Prewar Blabber Extras Disobey Freewill Unweave Pantry Hypnotism Gigabyte',
    currency: 'EUR',
    deposit: '0050501',
    rate: '361711',
    balance: '6022690123',
    status: 'ACTIVE',
  },
  {
    fullName: 'Norman Buchanan',
    idNumber: '2326343600',
    description:
      'Backpedal  Smartly  Relocate  Thrift  Mocker  Resend  Romp  Clerk  Spiffy  Culprit  Uncolored  Gag  Cilantro  Neurotic  Repeater  Composer  Rubbing  Flatbed  Shallow  Uneaten',
    currency: 'INR',
    deposit: '9134971',
    rate: '538399',
    balance: '0850711688',
    status: 'INACTIVE',
  },
  {
    fullName: 'Charles Bradley',
    idNumber: '1031253602',
    description:
      'Slacks  Undermine  Cornfield  Busboy  Overthrow  Triceps  Hardener  Closable  Automated  Parasite  Quintuple  Antelope  Undocked  Outclasss  Stellar  Unsliced  Reprogram  Bootleg  Flogging  Handcart',
    currency: 'EUR',
    deposit: '3660042',
    rate: '529565',
    balance: '8564614162',
    status: 'ACTIVE',
  },
  {
    fullName: 'Fredrick Young',
    idNumber: '3864631428',
    description:
      'Jam  Preaching  Botanist  Riot  Catchy  Scanning  Preface  Dreamlike  Subtly  Squeegee  Wildfire  Unknotted  Siamese  Acclaim  Wobbly  Vascular  Clunky  Payphone  Shaded  Radiance',
    currency: 'INR',
    deposit: '8016529',
    rate: '892306',
    balance: '2449115824',
    status: 'INACTIVE',
  },
  {
    fullName: 'Juan Joseph',
    idNumber: '0687482206',
    description:
      'Patchwork  Manor  Avert  Football  Expand  Hardness  Cadmium  Mutilator  Transform  Unscented  Germicide  Postnasal  Gimmick  Pawing  Projector  Styling  Spender  Pavement  Perm  Revoke',
    currency: 'INR',
    deposit: '3585134',
    rate: '925489',
    balance: '1925762012',
    status: 'ACTIVE',
  },
  {
    fullName: 'Lillie Maxwell',
    idNumber: '7260676439',
    description:
      'Repayment  Snowdrift  Anime  Boxy  Unbent  Disgrace  Scheming  Thread  Cusp  Rigid  Genre  Zesty  Green  Hardly  Await  Fedora  Tummy  Selection  During  Heavily',
    currency: 'EUR',
    deposit: '9599424',
    rate: '703555',
    balance: '3067796592',
    status: 'PAID',
  },
  {
    fullName: 'Omar Munoz',
    idNumber: '1209085221',
    description:
      'Skewed  Freewill  Gains  Idealism  Mystified  Pony  Alkalize  Stench  Maternity  Paging  Laboring  Dinginess  Vitalize  Gratify  Freefall  Almost  Theft  Popular  Roster  Tulip',
    currency: 'EUR',
    deposit: '5042734',
    rate: '882937',
    balance: '9554866191',
    status: 'INACTIVE',
  },
  {
    fullName: 'Joann Morrison',
    idNumber: '6924871646',
    description:
      'Unglue  Countable  Unnerving  Canopener  Gnarly  Collision  Manual  Lusty  Hundredth  Random  Survivor  Arbitrary  Overeager  Pavement  Canning  Disparate  Harvest  Cultivate  Dragging  Browsing',
    currency: 'USD',
    deposit: '9541969',
    rate: '267336',
    balance: '4257941434',
    status: 'OPEN',
  },
  {
    fullName: 'Archie Stokesss ',
    idNumber: '9434895783',
    description:
      'Salad  Resistant  Puzzling  Endless  Slacked  Define  Shiftless  Bobble  Tissue  Cornfield  Giggling  Wobbling  Polyester  Wagon  Zoology  Estrogen  Goldfish  Gaffe  Browse  Shirt',
    currency: 'INR',
    deposit: '5479568',
    rate: '154580',
    balance: '6639078105',
    status: 'ORDERED',
  },
  {
    fullName: 'Jamie Cole',
    idNumber: '6652967290',
    description:
      'Visor  Zit  Situated  Employer  Starless  Unguarded  Skimmer  Deflector  Stopped  Cola  Tribesman  Secret  Washer  Tanning  Whacky  Overbook  Supernova  Recycled  Gyration  Recipient',
    currency: 'EUR',
    deposit: '2740067',
    rate: '726171',
    balance: '9234710923',
    status: 'INACTIVE',
  },
  {
    fullName: 'Earnest Roberson',
    idNumber: '9779761564',
    description:
      'Shelving  Apprehend  Anteater  Squirt  Envision  Litigate  Bagful  Watch  Suspect  Friday  Duo  Subdivide  Cricket  Hatless  Wrangle  Cloud  Providing  Manual  Stung  Rash',
    currency: 'INR',
    deposit: '2295637',
    rate: '388082',
    balance: '8409647561',
    status: 'ACTIVE',
  },
  {
    fullName: 'Yolanda Grisssin',
    idNumber: '1665912884',
    description:
      'Joining  Lazy  Stipend  Actress  Handwoven  Gulp  Decorated  Moonlight  Evasion  Corrosive  Patronage  Chowtime  Bleach  Stinging  Degraded  Mummy  Pound  Willfully  Unscathed  Sheet',
    currency: 'EUR',
    deposit: '0405947',
    rate: '309092',
    balance: '7571624225',
    status: 'INACTIVE',
  },
  {
    fullName: 'Elijah Banks',
    idNumber: '7241658188',
    description:
      'Trivial  Facility  Uplifted  Jailhouse  Flyable  Champion  Retract  Elastic  Karaoke  Bungee  Saint  Garnish  Impale  Marxism  Overarch sss Survivor  Climate  Twisty  Tablet  Flatfoot',
    currency: 'EUR',
    deposit: '0321758',
    rate: '590848',
    balance: '6025379216',
    status: 'PAID',
  },
  {
    fullName: 'Hector Glover',
    idNumber: '7305416671',
    description:
      'Repaint  Blurb  Evidence  Untreated  Pampered  Trickery  Lapped  Oaf  Deplored  Resume  Cosponsor  Dumping  Mortician  Pushcart  Steam  Escapade  Tightwad  Grant  Overcast  Trodden',
    currency: 'USD',
    deposit: '4335385',
    rate: '512823',
    balance: '2737103623',
    status: 'INACTIVE',
  },
  {
    fullName: 'Margarita Cunningham',
    idNumber: '1870370258',
    description:
      'Glance  Unexpired  Drearily  Gallantly  Smashup  Wildcat  Radar  Mowing  Bulk  Unlocked  Grapple  Curator  Rigging  Huff  Spoils  Married  Portfolio  Stitch  Scabby  Shrivel',
    currency: 'INR',
    deposit: '1827344',
    rate: '407700',
    balance: '3073964890',
    status: 'OPEN',
  },
];

// Local Storage
let getLocalStorage = localStorage.getItem('usersData');
let getUsersData = JSON.parse(getLocalStorage);

// Top Main
let main = document.getElementById('main');
let searchBar = document.querySelector('.search-bar');
let searchInputField = document.querySelector('.search-input-field');
let searchIcon = document.querySelector('.search-icon');
let blackSearchUserIcon = document.querySelector('.black-search-user-icon');
let colorSearchUserIcon = document.querySelector('.color-search-user-icon');
let blackDeleteSearch = document.querySelector('.black-delete-search');
let colorDeleteSearch = document.querySelector('.color-delete-search');
let addUserRound = document.querySelector('.add-user-icons');
let addUserBlackIcon = document.querySelector('.add-user-black-icon');
let addUserColoredIcon = document.querySelector('.add-user-colored-icon');

// Message Modal
let errorModal = document.querySelector('.error-modal');
let successfullyAddUserModal = document.querySelector('.add-user-modal');
let successfullyAdded = document.querySelector('.added');
let successfullyUpdated = document.querySelector('.updated');
let successfullyAddUserModalValue = document.querySelector(
  '.add-user-modal-value'
);

// Form
let formContainer = document.getElementById('form-container');
let addUserForm = document.querySelector('.form');
let progressBar = document.querySelector('.progress-bar');
let progressColor = document.querySelector('.progress-color');
let progressValue = document.querySelector('.progress-value');

// Form Btns
let formBtns = document.querySelector('.form-btns');
let submitBtn = document.querySelector('.submit-btn');
let updateUserBtn = document.querySelector('.update-user-btn');
let clearBtn = document.querySelector('.clear-btn');
let cancelFormBtn = document.querySelector('.cancel-form');
let cancelUpdate = document.querySelector('.cancel-update');

// Form Inputs
let fullNameInput = document.querySelector('.full-name-input');
let idNumberInput = document.querySelector('.id-number-input');
let descriptionInput = document.querySelector('.description-input');
let currencyInput = document.querySelector('.currency-input');
let depositInput = document.querySelector('.deposit-input');
let rateInput = document.querySelector('.rate-input');
let balanceInput = document.querySelector('.balance-input');
let statusInput = document.querySelector('.status-input');

// Form Validation
let errorIcon = document.querySelectorAll('.error-icon');
let validIcon = document.querySelectorAll('.valid-icon');
let inputDiv = document.querySelectorAll('.input-div');
let inputArea = document.querySelectorAll('.input');
let errors = document.querySelectorAll('.errors');
let inputAndBlurEventListeners = ['input', 'blur'];
let changeAndBlurEventListeners = ['change', 'blur'];
let inputsFocusEventListener = [
  fullNameInput,
  idNumberInput,
  descriptionInput,
  currencyInput,
  depositInput,
  rateInput,
  balanceInput,
  statusInput,
];

// Sort-by
let blueUpIcon = document.querySelectorAll('.blue-up');
let blackUpIcon = document.querySelectorAll('.black-up');
let blackDownIcon = document.querySelectorAll('.black-down');
let blueDownIcon = document.querySelectorAll('.blue-down');
let tableNameP = document.querySelector('.p-name');
let tableStatusP = document.querySelector('.p-status');
let statusOrder = ['OPEN', 'ACTIVE', 'INACTIVE', 'PAID', 'ORDERED'];
let clickToReset = [
  tableStatusP,
  tableNameP,
  blueUpIcon[0],
  blueDownIcon[0],
  blueUpIcon[1],
  blueDownIcon[1],
];

// table Body
let tableBody = document.querySelector('.table-body');
let emptyData = document.querySelector('.empty-row');
let rowIdIndexArr = [];

// Progress Bar
let subValidArr = [];
let updValidArr = [0, 1, 2, 3, 4, 5, 6, 7];

// Table Footer
// active Users :
let activeUsers = document.querySelector('.active-users');
let totalOfUsers = document.querySelectorAll('.total-of-users');

// rows per page
let rowsPerPage = document.getElementById('rows-per-page');

// starting & ending-index
let startingIndex = document.querySelector('.starting-index');
let endingIndex = document.querySelector('.ending-index');

// Next & Previous pages
let currentPage = 0;
let blackRightArrow = document.querySelector('.black-right-arrow');
let colorRightArrow = document.querySelector('.color-right-arrow');
let blackLeftArrow = document.querySelector('.black-left-arrow');
let colorLeftArrow = document.querySelector('.color-left-arrow');

// Search Bar Style
blackSearchUserIcon.addEventListener('mouseenter', () => {
  blackSearchUserIcon.classList.add('hidden');
  colorSearchUserIcon.classList.remove('hidden');
});

colorSearchUserIcon.addEventListener('mouseleave', () => {
  colorSearchUserIcon.classList.add('hidden');
  blackSearchUserIcon.classList.remove('hidden');
});

colorSearchUserIcon.addEventListener('click', () => {
  searchIcon.classList.add('hidden');
  searchBar.classList.remove('hidden');
  searchInputField.focus();
  if (searchInputField.value.trim() !== '') {
    blackDeleteSearch.classList.remove('hidden');
  } else {
    blackDeleteSearch.classList.add('hidden');
  }
});

blackDeleteSearch.addEventListener('mouseenter', () => {
  colorDeleteSearch.classList.remove('hidden');
  blackDeleteSearch.classList.add('hidden');
});

colorDeleteSearch.addEventListener('mouseleave', () => {
  colorDeleteSearch.classList.add('hidden');
  blackDeleteSearch.classList.remove('hidden');
});

colorDeleteSearch.addEventListener('click', () => {
  searchInputField.focus();
  searchInputField.value = '';
  refresh(getUsersData);
  colorDeleteSearch.classList.add('hidden');
  blackDeleteSearch.classList.add('hidden');
});

searchBar.addEventListener('mouseleave', () => {
  if (searchInputField.value.trim() === '') {
    searchIcon.classList.remove('hidden');
    searchBar.classList.add('hidden');
  }
});

// search
let filteredArr = arr => {
  let searchInputValue = searchInputField.value.toLowerCase();
  let filtered = arr.filter(user => {
    return (
      user.fullName.toUpperCase().includes(searchInputValue) ||
      user.description.toUpperCase().includes(searchInputValue) ||
      user.fullName.toLowerCase().includes(searchInputValue) ||
      user.description.toLowerCase().includes(searchInputValue) ||
      user.idNumber.includes(searchInputValue)
    );
  });
  return filtered;
};

searchInputField.addEventListener('input', () => {
  if (searchInputField.value.trim() !== '') {
    blackDeleteSearch.classList.remove('hidden');
  } else {
    blackDeleteSearch.classList.add('hidden');
  }
});

searchInputField.addEventListener('keyup', () => {
  tableBody.innerHTML = null;
  currentPage = 0;
  refresh(getUsersData);
});

// Add User Icon Style

addUserRound.addEventListener('mouseenter', () => {
  addUserBlackIcon.classList.add('hidden');
  addUserColoredIcon.classList.remove('hidden');
});

addUserRound.addEventListener('mouseleave', () => {
  addUserBlackIcon.classList.remove('hidden');
  addUserColoredIcon.classList.add('hidden');
});

addUserRound.addEventListener('click', () => {
  if (fullNameInput.value !== '' && submitBtn.classList.contains('hidden')) {
    mustUpdateOrCancel();
  } else {
    updValidArr = [];
    resetForm();
    formContainer.scrollIntoView();
    showSubmitFormBtns();
  }
});

let mustUpdateOrCancel = () => {
  errorModal.classList.remove('hidden');
  formContainer.scrollIntoView();
  setTimeout(errorModalMessage, 5000);
};

inputsFocusEventListener.forEach(element => {
  element.addEventListener('focus', () => {
    if (
      submitBtn.classList.contains('hidden') &&
      updateUserBtn.classList.contains('hidden')
    ) {
      subValidArr = [];
      updValidArr = [];
    }
  });
});

addUserForm.addEventListener('input', () => {
  if (formBtns.firstElementChild.classList.contains('hidden')) {
    showSubmitFormBtns();
  }
});

// Submit Progress Bar
let addProgressValue = i => {
  if (inputDiv[i].classList.contains('valid-border')) {
    if (!subValidArr.includes(i)) {
      subValidArr.push(i);
    }
  } else {
    if (subValidArr.includes(i)) {
      subValidArr.splice(subValidArr.indexOf(i), 1);
    }
  }
  progressValue.textContent = (100 / inputDiv.length) * subValidArr.length;
  progressColor.style.width = `${progressValue.textContent}%`;
};

// Update Progress Bar
let removeProgressValue = i => {
  if (!inputDiv[i].classList.contains('valid-border')) {
    if (updValidArr.includes(i)) {
      updValidArr.splice(updValidArr.indexOf(i), 1);
    }
  } else {
    if (!updValidArr.includes(i)) {
      updValidArr.push(i);
    }
  }
  progressValue.textContent = (100 / inputDiv.length) * updValidArr.length;
  progressColor.style.width = `${progressValue.textContent}%`;
};

// Form Errors
let onValid = k => {
  inputDiv[k].classList.add('valid-border');
  validIcon[k].classList.remove('hidden');
  inputDiv[k].classList.remove('error-border');
  errorIcon[k].classList.add('hidden');
  errors[k].classList.add('non-visible');
};

let onError = k => {
  inputDiv[k].classList.add('error-border');
  errorIcon[k].classList.remove('hidden');
  errors[k].classList.remove('non-visible');
  errors[k].textContent = 'This field is required';
  inputDiv[k].classList.remove('valid-border');
  validIcon[k].classList.add('hidden');
};

let mustBeNumber = (value, index) => {
  if (value.trim() == '') {
    onError(index);
  } else if (!isNaN(value) && value.trim() !== '') {
    onValid(index);
  } else if (isNaN(value) && value.trim() !== '') {
    onError(index);
    errors[index].textContent = `This field must be a number`;
  }
};

let fullNameInputErrors = () => {
  if (fullNameInput.value.trim() == '') {
    onError(0);
  } else if (/[^a-z A-Z]/.test(fullNameInput.value)) {
    onError(0);
    errors[0].textContent = `Customer name must be string`;
  } else {
    onValid(0);
  }
};

let fullNameExist = arr => {
  arr.forEach(element => {
    if (
      element.fullName.toLowerCase() == fullNameInput.value.toLowerCase() ||
      element.fullName.toUpperCase() == fullNameInput.value.toUpperCase()
    ) {
      onError(0);
      errors[0].textContent = `User already exists`;
    }
  });
};

let idNumberInputErrors = () => {
  if (
    !isNaN(idNumberInput.value) &&
    idNumberInput.value.length != 10 &&
    idNumberInput.value.trim() !== ''
  ) {
    onError(1);
    errors[1].textContent = 'Customer number should be 10 digits';
  }
};

let idExist = arr => {
  arr.forEach(element => {
    if (element.idNumber == idNumberInput.value) {
      onError(1);
      errors[1].textContent = `User ID Number already exists`;
    }
  });
};

let descriptionInputErrors = () => {
  if (descriptionInput.value.length >= 10) {
    onValid(2);
  } else {
    onError(2);
    if (
      descriptionInput.value.trim() !== '' &&
      descriptionInput.value.length > 0 &&
      descriptionInput.value.length < 10
    ) {
      errors[2].textContent = 'Description should at least have 10 characters';
    }
  }
};

let currencyInputErrors = () => {
  if (currencyInput.value != '') {
    onValid(3);
  } else {
    onError(3);
    errors[3].textContent = 'You must choose a Currency';
  }
};

let statusInputErrors = () => {
  if (statusInput.value != '') {
    onValid(7);
  } else {
    onError(7);
    errors[7].textContent = 'This field is required';
  }
};

let formErrors = () => {
  fullNameInputErrors();
  mustBeNumber(idNumberInput.value, 1);
  idNumberInputErrors();
  descriptionInputErrors();
  currencyInputErrors();
  mustBeNumber(depositInput.value, 4);
  mustBeNumber(rateInput.value, 5);
  mustBeNumber(balanceInput.value, 6);
  statusInputErrors();
};

let formInputAndBlurErrors = (progV, arr) => {
  inputAndBlurEventListeners.forEach(event =>
    fullNameInput.addEventListener(event, () => {
      fullNameInputErrors();
      fullNameExist(arr);
      progV(0);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    idNumberInput.addEventListener(event, () => {
      mustBeNumber(idNumberInput.value, 1);
      idNumberInputErrors();
      idExist(arr);
      progV(1);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    descriptionInput.addEventListener(event, () => {
      descriptionInputErrors();
      progV(2);
    })
  );

  changeAndBlurEventListeners.forEach(event =>
    currencyInput.addEventListener(event, () => {
      currencyInputErrors();
      progV(3);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    depositInput.addEventListener(event, () => {
      mustBeNumber(depositInput.value, 4);
      progV(4);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    rateInput.addEventListener(event, () => {
      mustBeNumber(rateInput.value, 5);
      progV(5);
    })
  );

  inputAndBlurEventListeners.forEach(event =>
    balanceInput.addEventListener(event, () => {
      mustBeNumber(balanceInput.value, 6);
      progV(6);
    })
  );

  changeAndBlurEventListeners.forEach(event =>
    statusInput.addEventListener(event, () => {
      statusInputErrors();
      progV(7);
    })
  );
};

formInputAndBlurErrors(addProgressValue, getUsersData);

// Form Btns
let resetForm = () => {
  inputDiv.forEach(element => {
    element.classList.remove('valid-border');
    element.classList.remove('error-border');
  });
  inputArea.forEach(element => {
    element.value = '';
  });
  validIcon.forEach(element => {
    element.classList.add('hidden');
  });
  errorIcon.forEach(element => {
    element.classList.add('hidden');
  });
  errors.forEach(element => {
    element.classList.add('non-visible');
  });
  progressValue.textContent = '0';
  progressColor.style.width = '1%';
  subValidArr = [];
};

clearBtn.onclick = () => resetForm();
cancelFormBtn.onclick = () => {
  resetAndHideFormBtns();
  main.scrollIntoView();
};

let hideFormBtns = () => {
  progressBar.classList.add('hidden');
  submitBtn.classList.add('hidden');
  updateUserBtn.classList.add('hidden');
  clearBtn.classList.add('hidden');
  cancelFormBtn.classList.add('hidden');
  cancelUpdate.classList.add('hidden');
};

let showSubmitFormBtns = () => {
  updateUserBtn.classList.add('hidden');
  progressBar.classList.remove('hidden');
  submitBtn.classList.remove('hidden');
  clearBtn.classList.remove('hidden');
  cancelFormBtn.classList.remove('hidden');
  cancelUpdate.classList.add('hidden');
};

// submit Form
let setAndRefresh = arr => {
  localStorage.setItem('usersData', JSON.stringify(arr));
  refresh(arr);
};

let resetAndHideFormBtns = () => {
  resetForm();
  hideFormBtns();
};

submitBtn.addEventListener('click', e => {
  e.preventDefault();
  if (
    Object.entries(inputDiv).every(element =>
      element[1].classList.contains('valid-border')
    )
  ) {
    if (!submitBtn.classList.contains('hidden')) {
      successfullyAddUserModal.classList.remove('hidden');
      successfullyAdded.classList.remove('hidden');
      successfullyUpdated.classList.add('hidden');
      successfullyAddUserModalValue.innerHTML = fullNameInput.value;
      getUsersData.unshift({
        fullName: fullNameInput.value,
        idNumber: idNumberInput.value,
        description: descriptionInput.value,
        currency: currencyInput.value,
        deposit: depositInput.value,
        rate: rateInput.value,
        balance: balanceInput.value,
        status: statusInput.value,
      });
      setTimeout(hideSuccessfullyAdded, 5000);
      setAndRefresh(getUsersData);
      main.scrollIntoView();
      let goTo = document.getElementById(idNumberInput.value);
      goTo.classList.add('green-border');
      goTo.scrollIntoView({ block: 'center' });
      resetAndHideFormBtns();
      setTimeout(hideSuccessBorder, 5000, goTo);
    }
  } else {
    formErrors();
    fullNameExist(getUsersData);
    idExist(getUsersData);
  }
});

// Message Modal
let hideSuccessfullyAdded = () => {
  successfullyAddUserModal.classList.add('hidden');
};

let errorModalMessage = () => {
  errorModal.classList.add('hidden');
};

let hideSuccessBorder = index => {
  index.classList.remove('green-border');
};

//theade

// Sort Functions
let sortByFullNameAtoZ = (a, b) =>
  a.fullName.toLowerCase() > b.fullName.toLowerCase()
    ? 1
    : b.fullName.toLowerCase() > a.fullName.toLowerCase()
    ? -1
    : 0;

let sortByFullNameZtoA = (a, b) =>
  a.fullName.toLowerCase() > b.fullName.toLowerCase()
    ? -1
    : b.fullName.toLowerCase() > a.fullName.toLowerCase()
    ? 1
    : 0;

let sortByStatusAtoZ = (a, b) =>
  statusOrder.indexOf(a.status) > statusOrder.indexOf(b.status)
    ? 1
    : statusOrder.indexOf(a.status) < statusOrder.indexOf(b.status)
    ? -1
    : 0;

let sortByStatusZtoA = (a, b) =>
  statusOrder.indexOf(a.status) > statusOrder.indexOf(b.status)
    ? -1
    : statusOrder.indexOf(a.status) < statusOrder.indexOf(b.status)
    ? 1
    : 0;

let sortedArr = arr => {
  if (
    blackUpIcon[0].classList.contains('hidden') &&
    !blueUpIcon[0].classList.remove('hidden')
  ) {
    return arr.sort(sortByFullNameAtoZ);
  } else if (
    blackDownIcon[0].classList.contains('hidden') &&
    !blueDownIcon[0].classList.remove('hidden')
  ) {
    return arr.sort(sortByFullNameZtoA);
  } else if (
    blackUpIcon[1].classList.contains('hidden') &&
    !blueUpIcon[1].classList.remove('hidden')
  ) {
    return arr.sort(sortByStatusAtoZ);
  } else if (
    blackDownIcon[1].classList.contains('hidden') &&
    !blueDownIcon[1].classList.remove('hidden')
  ) {
    return arr.sort(sortByStatusZtoA);
  }
};

// Sort-by
let sortUpIcon = (i, j) => {
  blackUpIcon[i].classList.add('hidden');
  blackDownIcon[i].classList.remove('hidden');
  blueUpIcon[i].classList.remove('hidden');
  blueDownIcon[i].classList.add('hidden');
  blueUpIcon[j].classList.add('hidden');
  blueDownIcon[j].classList.add('hidden');
  blackUpIcon[j].classList.remove('hidden');
  blackDownIcon[j].classList.remove('hidden');
  refresh(getUsersData);
};

let sortDownIcon = (i, j) => {
  blackUpIcon[i].classList.remove('hidden');
  blackDownIcon[i].classList.add('hidden');
  blueUpIcon[i].classList.add('hidden');
  blueDownIcon[i].classList.remove('hidden');
  blueUpIcon[j].classList.add('hidden');
  blueDownIcon[j].classList.add('hidden');
  blackUpIcon[j].classList.remove('hidden');
  blackDownIcon[j].classList.remove('hidden');
  refresh(getUsersData);
};

let resetSort = i => {
  blackUpIcon[i].classList.remove('hidden');
  blackDownIcon[i].classList.remove('hidden');
  blueUpIcon[i].classList.add('hidden');
  blueDownIcon[i].classList.add('hidden');
  refresh(getUsersData);
};

blackUpIcon[0].onclick = () => sortUpIcon(0, 1);
blackUpIcon[1].onclick = () => sortUpIcon(1, 0);
blackDownIcon[0].onclick = () => sortDownIcon(0, 1);
blackDownIcon[1].onclick = () => sortDownIcon(1, 0);

clickToReset.forEach(element => {
  element.addEventListener('click', () => {
    resetSort(0);
    resetSort(1);
  });
});

//tbody
//create Elements :
let addNewUser = userData => {
  let {
    fullName,
    idNumber,
    description,
    currency,
    deposit,
    rate,
    balance,
    status,
  } = userData;

  let UserRow = document.createElement('tr');
  UserRow.setAttribute('class', 'table-row');
  UserRow.setAttribute('id', `${idNumber}`);
  UserRow.innerHTML = `
<td><input type="checkbox" id="check-user"></td>
<td class="">
<p class="full-name">${fullName}</p>
<p class="id-number">${idNumber}</p>
</td>
<td class="">
<p class="description">${description}</p>
</td>
<td class="">
<p class="rate right-text-align">${Number(rate).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p>
</td>
<td class="">
<p class="balance right-text-align ${checkBalance(balance)}">${Number(
    balance
  ).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p>
</td>
<td class="">
<p class="deposit right-text-align">${Number(deposit).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p>
</td>
<td class="center-text-align">
<button id="" class="${showStatus(status)}">${status}</button>
</td>
`;
  UserRow.appendChild(appendDeleteAndEdit(userData));
  return UserRow;
};

let checkBalance = b => {
  return b > 0 ? 'positive' : 'negative';
};

let showStatus = sts => {
  return `${sts.toLowerCase()}-btn`;
};

let appendDeleteAndEdit = item => {
  let moreTD = document.createElement('td');
  let moreDiv = document.createElement('div');
  let blackDeleteUserIcon = document.createElement('img');
  let blackEditUserIcon = document.createElement('img');
  blackDeleteUserIcon.setAttribute('src', './images/b-delete-user.svg');
  blackDeleteUserIcon.setAttribute(
    'class',
    'medium-icons black-delete-user-icon'
  );
  moreTD.setAttribute('class', 'center-text-align');
  moreDiv.setAttribute('class', 'flex-btwn');
  blackEditUserIcon.setAttribute('src', './images/b-edit-user.svg');
  blackEditUserIcon.setAttribute('class', 'medium-icons black-edit-user-icon');
  moreTD.appendChild(moreDiv);
  moreDiv.appendChild(blackEditUserIcon);
  moreDiv.appendChild(blackDeleteUserIcon);

  blackEditUserIcon.addEventListener('click', e => {
    subValidArr = [];
    updValidArr = [0, 1, 2, 3, 4, 5, 6, 7];
    if (fullNameInput.value !== '' && submitBtn.classList.contains('hidden')) {
      mustUpdateOrCancel();
    } else {
      let rowId = e.target.closest('tr').id;
      editUserFcts(item, rowId);
    }
  });

  blackDeleteUserIcon.onclick = () => deleteUsers(item);
  return moreTD;
};

let extractID = id => {
  let rowIdIndex = getUsersData.findIndex(element => element.idNumber === id);
  if (rowIdIndexArr.length != 0) {
    rowIdIndexArr = [];
    rowIdIndexArr.push(rowIdIndex);
  } else {
    rowIdIndexArr.push(rowIdIndex);
  }
};

let takeCopy = (element, id) => {
  let copyOfGetUsersData = getUsersData.slice();
  let filteredCopyOfGetUsersData = copyOfGetUsersData.filter(
    user => !user.idNumber.includes(id)
  );
  updateUsersForm(element, filteredCopyOfGetUsersData);
};

let updateProgressBar = () => {
  progressBar.classList.remove('hidden');
  progressValue.textContent = 100;
  progressColor.style.width = `${progressValue.textContent}%`;
};

let editUserFcts = (e, id) => {
  resetForm();
  extractID(id);
  takeCopy(e, id);
  updateProgressBar();
  formErrors();
};

let deleteUsers = deleteItem => {
  if (confirm('Are you sure you wont to delete this user ?')) {
    getUsersData.splice(getUsersData.indexOf(deleteItem), 1);
    if (startingIndex.textContent > getUsersData.length) {
      currentPage -= 1;
    }
    setAndRefresh(getUsersData);
  }
};

let updateUsersForm = (editItem, filteredCopy) => {
  submitBtn.classList.add('hidden');
  clearBtn.classList.add('hidden');
  updateUserBtn.classList.remove('hidden');
  formContainer.scrollIntoView();
  cancelFormBtn.classList.add('hidden');
  cancelUpdate.classList.remove('hidden');
  fullNameInput.value = editItem.fullName;
  idNumberInput.value = editItem.idNumber;
  descriptionInput.value = editItem.description;
  currencyInput.value = editItem.currency;
  depositInput.value = editItem.deposit;
  rateInput.value = editItem.rate;
  balanceInput.value = editItem.balance;
  statusInput.value = editItem.status;
  formInputAndBlurErrors(removeProgressValue, filteredCopy);
  updateUserBtn.onclick = () => updateUser();
  cancelUpdate.onclick = () => cancelUpdateUser();
};

let updateUser = () => {
  if (
    Object.entries(inputDiv).every(element =>
      element[1].classList.contains('valid-border')
    )
  ) {
    successfullyAddUserModal.classList.remove('hidden');
    successfullyAdded.classList.add('hidden');
    successfullyUpdated.classList.remove('hidden');
    successfullyAddUserModalValue.innerHTML = fullNameInput.value;
    let updatedObj = {
      fullName: fullNameInput.value,
      idNumber: idNumberInput.value,
      description: descriptionInput.value,
      currency: currencyInput.value,
      deposit: depositInput.value,
      rate: rateInput.value,
      balance: balanceInput.value,
      status: statusInput.value,
    };
    setTimeout(hideSuccessfullyAdded, 5000);
    getUsersData.splice(rowIdIndexArr[0], 1, updatedObj);
    setAndRefresh(getUsersData);
    main.scrollIntoView();
    let goTo = document.getElementById(idNumberInput.value);
    resetAndHideFormBtns();
    goTo.classList.add('green-border');
    goTo.scrollIntoView({ block: 'center' });
    setTimeout(hideSuccessBorder, 5000, goTo);
  }
};

let cancelUpdateUser = () => {
  setAndRefresh(getUsersData);
  main.scrollIntoView();
  resetAndHideFormBtns();
  let goTo = document.querySelectorAll('.table-row')[rowIdIndexArr[0]];
  goTo.classList.add('green-border');
  goTo.scrollIntoView({ block: 'center' });
  setTimeout(hideSuccessBorder, 5000, goTo);
};

// tfoot

// active Users :
let showActiveUsers = arr => {
  let numberOfActiveUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === 'ACTIVE') {
      numberOfActiveUsers.push(arr[i].status);
    }
  }
  return numberOfActiveUsers.length;
};

// rows per page

let rowsPerPageValueOnChange = rowsPerPage.addEventListener('change', e => {
  e = rowsPerPage.value;
  currentPage = 0;
  refresh(getUsersData);
});

// next / previous page :
let nbOfPages = (arr, num) => {
  return arr > num ? Math.ceil(arr.length / num) : arr.length;
};

blackLeftArrow.addEventListener('mouseenter', () => {
  blackLeftArrow.classList.add('hidden');
  colorLeftArrow.classList.remove('hidden');
});

blackRightArrow.addEventListener('mouseenter', () => {
  blackRightArrow.classList.add('hidden');
  colorRightArrow.classList.remove('hidden');
});

colorLeftArrow.addEventListener('mouseleave', () => {
  blackLeftArrow.classList.remove('hidden');
  colorLeftArrow.classList.add('hidden');
});

colorRightArrow.addEventListener('mouseleave', () => {
  blackRightArrow.classList.remove('hidden');
  colorRightArrow.classList.add('hidden');
});

colorRightArrow.addEventListener('click', () => {
  if ((currentPage + 1) * rowsPerPage.value < getUsersData.length) {
    currentPage++;
  }
  refresh(getUsersData);
});

colorLeftArrow.addEventListener('click', () => {
  if (currentPage != 0) {
    currentPage--;
  }
  refresh(getUsersData);
});

// onLoad
let searchOnLoad = () => {
  if (searchInputField.value.trim() !== '') {
    searchBar.classList.remove('hidden');
    blackDeleteSearch.classList.remove('hidden');
    searchIcon.classList.add('hidden');
  }
};

let onLoad = () => {
  resetAndHideFormBtns();
  main.scrollIntoView();
};

let refresh = arrayToRender => {
  searchOnLoad();
  tableBody.innerHTML = null;
  let selectedRowsPerPage = rowsPerPageValueOnChange || rowsPerPage.value;
  let filteredUsers = filteredArr(arrayToRender) || arrayToRender;
  let sortFiltered = filteredUsers.slice() || filteredUsers;
  sortedArr(sortFiltered);
  let totalRowsPerPage = sortFiltered.slice(
    currentPage * selectedRowsPerPage,
    (currentPage + 1) * selectedRowsPerPage
  );
  activeUsers.textContent = showActiveUsers(sortFiltered);
  totalOfUsers.forEach(element => {
    element.textContent = sortFiltered.length;
  });

  startingIndex.textContent = currentPage * selectedRowsPerPage + 1;
  endingIndex.textContent =
    totalRowsPerPage.length -
    selectedRowsPerPage +
    selectedRowsPerPage * (currentPage + 1);
  totalRowsPerPage.forEach(element => {
    tableBody.appendChild(addNewUser(element));
  });
};

if (getLocalStorage == '[]') {
  emptyData.classList.remove('hidden');
  onLoad();
} else if (getLocalStorage == null) {
  localStorage.setItem('usersData', JSON.stringify(users));
  refresh(getUsersData);
  onLoad();
} else {
  searchOnLoad();
  refresh(getUsersData);
  onLoad();
}
