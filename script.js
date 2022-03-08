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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
  },
  {
    fullName: 'Lois Waters',
    idNumber: '6924871647',
    description:
      'Granny  Wince  Icon  Share  Astonish  Subsystem  Punctured  Auction  Bunkbed  Think  Lunchbox  Jingle  Letdown  Rubber  Snowstorm  Skedaddle  Cut  Mocker  Exclusive  Upbeat',
    currency: 'EUR',
    deposit: '4468146',
    rate: '892496',
    balance: '9369680749',
    status: 'INACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
  },
  {
    fullName: 'Roberta Francis',
    idNumber: '9434221227',
    description:
      'Hastily  Calcium  Outspoken  Subtitle  Doornail  Limes  Emote  Composure  Discount  Duchess  Shoplift  Prelude  Reformist  Aware  Satirical  Flatly  Flounder  Plus  Genre  Fidgeting',
    currency: 'EUR',
    deposit: '1472711',
    rate: '224769',
    balance: '-6908307213',
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    status: 'INACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'INACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'INACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'INACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'INACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    status: 'INACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
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
    status: 'ACTIVE',
    checkStatus: 'unchecked',
    lockStatus: 'not locked',
  },
];

let getLocalStorage = localStorage.getItem('usersData');
let getUsersData = JSON.parse(getLocalStorage);
let totalRowsPerPage;

// Top Main
let main = document.getElementById('main');
let searchBar = document.querySelector('.search-bar');
let searchInputField = document.querySelector('.search-input-field');
let searchIcon = document.querySelector('.search-icon');
let blackSearchUserIcon = document.querySelector('.black-search-user-icon');
let colorSearchUserIcon = document.querySelector('.color-search-user-icon');
let blackDeleteSearch = document.querySelector('.black-delete-search');
let colorDeleteSearch = document.querySelector('.color-delete-search');
let filterBoard = document.querySelector('.filter-board');
let filterIcon = document.querySelector('.filter-icon');
let blackFilterUserIcon = document.querySelector('.black-filter-user-icon');
let colorFilterUserIcon = document.querySelector('.color-filter-user-icon');

let addUserRound = document.querySelector('.add-user-icons');
let addUserBlackIcon = document.querySelector('.add-user-black-icon');
let addUserColoredIcon = document.querySelector('.add-user-colored-icon');

let printUserRound = document.querySelector('.print-user-icons');
let printUserBlackIcon = document.querySelector('.print-user-black-icon');
let printUserColoredIcon = document.querySelector('.print-user-colored-icon');

let deleteUserRound = document.querySelector('.delete-user-icons');
let deleteUserColoredIcon = document.querySelector('.delete-user-colored-icon');
let deleteUserBlackIcon = document.querySelector('.delete-user-black-icon');

let lockUserRound = document.querySelector('.lock-user-icons');
let lockUserColoredIcon = document.querySelector('.lock-user-colored-icon');
let lockUserBlackIcon = document.querySelector('.lock-user-black-icon');

let unlockUserRound = document.querySelector('.unlock-user-icons');
let unlockUserColoredIcon = document.querySelector('.unlock-user-colored-icon');
let unlockUserBlackIcon = document.querySelector('.unlock-user-black-icon');

let uncheckAllUsersRound = document.querySelector('.uncheck-all-users-icons');
let uncheckAllUsersColoredIcon = document.querySelector(
  '.uncheck-all-users-colored-icon'
);
let totalOfCheckedUsers = document.querySelector('.total-of-checked-users');

//dashboard
let dashboard = document.getElementById('dashboard');
let emptyData = document.querySelector('.empty-row');
let topIcons = document.querySelector('.top-icons');

// print Section
let tableNameAndIdNumber = document.querySelector('.table-name-and-id-number');
let tableDescription = document.querySelector('.table-description');
let tableRateAndCurrency = document.querySelector('.table-rate-and-currency');
let tableBalanceAndCurrency = document.querySelector(
  '.table-balance-and-currency'
);
let tableDepositAndCurrency = document.querySelector(
  '.table-deposit-and-currency'
);
let tableStatus = document.querySelector('.table-status');

let printTableStyle = [
  dashboard,
  tableNameAndIdNumber,
  tableDescription,
  tableRateAndCurrency,
  tableBalanceAndCurrency,
  tableDepositAndCurrency,
  tableStatus,
];

// Message Modal
let lockModal = document.querySelector('.lock-modal');
let duplicateModal = document.querySelector('.duplicate-modal');
let successfullyAddUserModal = document.querySelector('.add-user-modal');
let successfullyAdded = document.querySelector('.added');
let successfullyUpdated = document.querySelector('.updated');
let successfullyAddUserModalValue = document.querySelector(
  '.add-user-modal-value'
);

// Form
let formContainer = document.getElementById('form-container');
let addUserForm = document.querySelector('.form');
let addUserInSpecificPlace = [];

// Progress Bar
let progressBar = document.querySelector('.progress-bar');
let progressColor = document.querySelector('.progress-color');
let progressValue = document.querySelector('.progress-value');
let subValidArr = [];
let updValidArr = [0, 1, 2, 3, 4, 5, 6, 7];

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
let fullNameInputDiv = document.querySelectorAll('.full-name-input-div');
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

// table
let table = document.querySelector('.table');

// Table Head :
let tableHead = document.querySelector('.t-head');
let tableCheckUser = document.querySelector('.table-check-user');
let tableMore = document.querySelector('.table-more');

// checkbox
let checkAll = document.getElementById('checkbox');

// Sort-by
let blueUpIcon = document.querySelectorAll('.blue-up');
let blueDownIcon = document.querySelectorAll('.blue-down');
let allName = document.getElementById('all-name');
let azName = document.getElementById('az-name');
let zaName = document.getElementById('za-name');
let allStatus = document.getElementById('all-status');
let activeStatus = document.getElementById('active-status');
let inactiveStatus = document.getElementById('inactive-status');
let paidStatus = document.getElementById('paid-status');
let openStatus = document.getElementById('open-status');
let orderedStatus = document.getElementById('ordered-status');

// table Body
let tableBody = document.querySelector('.table-body');
let rowIdIndexArr = [];

// Table Footer
let tableFooter = document.querySelector('.t-footer');
let totalOfLockedUsers = document.querySelector('.total-of-locked-users');
let activeUsers = document.querySelector('.active-users');
let totalOfUsers = document.querySelectorAll('.total-of-users');
let rowsPerPage = document.getElementById('rows-per-page');
let startingIndex = document.querySelector('.starting-index');
let endingIndex = document.querySelector('.ending-index');
let currentPage = 0;
let blackRightArrow = document.querySelector('.black-right-arrow');
let colorRightArrow = document.querySelector('.color-right-arrow');
let blackLeftArrow = document.querySelector('.black-left-arrow');
let colorLeftArrow = document.querySelector('.color-left-arrow');

// General Functions :
let setAndRefresh = arr => {
  localStorage.setItem('usersData', JSON.stringify(arr));
  refresh(arr);
};

let removeTwoHiddenClassLists = (ele1, ele2) => {
  ele1.classList.remove('hidden');
  ele2.classList.remove('hidden');
};

let addTwoHiddenClassLists = (ele1, ele2) => {
  ele1.classList.add('hidden');
  ele2.classList.add('hidden');
};

let removeAndAddHiddenClassLists = (ele1, ele2) => {
  ele1.classList.remove('hidden');
  ele2.classList.add('hidden');
};

// Filter Style
blackFilterUserIcon.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorFilterUserIcon, blackFilterUserIcon);

colorFilterUserIcon.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackFilterUserIcon, colorFilterUserIcon);

colorFilterUserIcon.onclick = () =>
  removeAndAddHiddenClassLists(filterBoard, filterIcon);

// Search Bar Style
blackSearchUserIcon.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorSearchUserIcon, blackSearchUserIcon);

colorSearchUserIcon.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackSearchUserIcon, colorSearchUserIcon);

colorSearchUserIcon.addEventListener('click', () => {
  removeAndAddHiddenClassLists(searchBar, searchIcon);
  searchInputField.focus();
  searchInputField.value.trim() !== ''
    ? blackDeleteSearch.classList.remove('hidden')
    : blackDeleteSearch.classList.add('hidden');
});

blackDeleteSearch.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorDeleteSearch, blackDeleteSearch);

colorDeleteSearch.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackDeleteSearch, colorDeleteSearch);

colorDeleteSearch.addEventListener('click', () => {
  searchInputField.focus();
  searchInputField.value = '';
  refresh(getUsersData);
  addTwoHiddenClassLists(colorDeleteSearch, blackDeleteSearch);
});

searchBar.addEventListener('mouseleave', () => {
  if (searchInputField.value.trim() === '')
    removeAndAddHiddenClassLists(searchIcon, searchBar);
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

searchInputField.oninput = () =>
  searchInputField.value.trim() !== ''
    ? blackDeleteSearch.classList.remove('hidden')
    : blackDeleteSearch.classList.add('hidden');

searchInputField.addEventListener('keyup', () => {
  tableBody.innerHTML = null;
  currentPage = 0;
  refresh(getUsersData);
  if (totalRowsPerPage.length === 0) checkAll.checked = false;
});

// Print Users Icon Style
let printUsers = userData => {
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
  UserRow.innerHTML = `<td class="r-border">
<p class="full-name">${fullName.toLowerCase()}</p>
<p class="id-number">${idNumber}</p></td>
<td class="r-border"><p class="description">${description}</p></td>
<td class="r-border">
<p class="rate right-text-align">${Number(rate).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p></td>
<td class="r-border">
<p class="balance right-text-align ${checkBalance(balance)}">${Number(
    balance
  ).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p></td>
<td class="r-border">
<p class="deposit right-text-align">${Number(deposit).toFixed(2)}</p>
<p class="currency right-text-align">${currency}</p></td>
<td class="r-border print-status-td center-text-align">
<button id="" class="print-status">${status}</button></td>`;
  return UserRow;
};

let printPDF = () => {
  addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
  addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
  tableFooter.classList.add('hidden');
  addTwoHiddenClassLists(tableCheckUser, formContainer);
  addTwoHiddenClassLists(tableMore, topIcons);
  dashboard.style.padding = '0px';
  dashboard.style.border = 'none';
  tableHead.style.position = 'static';
  printTableStyle.slice(1).forEach(element => {
    element.style.border = '1px solid #000000';
  });
  tableBody.innerHTML = null;
};

let resetDataAfterPrint = () => {
  tableCheckUser.classList.remove('hidden');
  removeTwoHiddenClassLists(tableFooter, formContainer);
  removeTwoHiddenClassLists(tableMore, topIcons);
  main.scrollIntoView();
  tableHead.style.position = '';
  dashboard.style.padding = '40px';
  printTableStyle.forEach(element => (element.style.border = ''));
};

printUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(printUserColoredIcon, printUserBlackIcon);

printUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(printUserBlackIcon, printUserColoredIcon);

printUserRound.addEventListener('click', () => {
  let printCheckedElements = [];
  getUsersData.forEach(element => {
    if (element.checkStatus === 'checked') printCheckedElements.push(element);
  });
  printPDF();
  printCheckedElements.forEach(el => tableBody.appendChild(printUsers(el)));
  window.print();
  resetDataAfterPrint();
  refresh(getUsersData);
  console.log(printCheckedElements);
});

// delete Users Icon Style
deleteUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(deleteUserColoredIcon, deleteUserBlackIcon);

deleteUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(deleteUserBlackIcon, deleteUserColoredIcon);

deleteUserRound.addEventListener('click', () => {
  let deleteCheckedElements = [];
  if (confirm('Are you sure you wont to delete all this users ?')) {
    getUsersData.forEach(element => {
      if (element.checkStatus === 'checked' && element.lockStatus !== 'locked')
        deleteCheckedElements.push(element.idNumber);
    });
    deleteCheckedElements.forEach(element => {
      let i = getUsersData.findIndex(el => el.idNumber === element);
      getUsersData.splice(i, 1);
    });
    setAndRefresh(getUsersData);
  }
    if (startingIndex.textContent == 0 && searchInputField.value.trim() !== '') {
    searchInputField.value = '';
    removeAndAddHiddenClassLists(searchIcon, searchBar);
    currentPage = 0;
    refresh(getUsersData);
      }
  if (getUsersData.length === 0) emptyingTable();
  showRoundIcons(getUsersData);
});

// Lock Users Icon Style
lockUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(lockUserColoredIcon, lockUserBlackIcon);

lockUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(lockUserBlackIcon, lockUserColoredIcon);

lockUserRound.addEventListener('click', () => {
  getUsersData.forEach(element => {
    if (element.checkStatus === 'checked') element.lockStatus = 'locked';
  });
  setAndRefresh(getUsersData);
});

// Unlock Users Icon Style
unlockUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(unlockUserColoredIcon, unlockUserBlackIcon);

unlockUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(unlockUserBlackIcon, unlockUserColoredIcon);

unlockUserRound.addEventListener('click', () => {
  getUsersData.forEach(element => {
    if (element.checkStatus === 'checked') element.lockStatus = 'not locked';
  });
  setAndRefresh(getUsersData);
});

// Total Of Checked Users :
let showTotalOfCheckedUsers = arr => {
  let numberOfCheckedUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].checkStatus === 'checked')
      numberOfCheckedUsers.push(arr[i].checkStatus);
  }
  return numberOfCheckedUsers.length;
};

// Uncheck All Users Icon Style
uncheckAllUsersRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(uncheckAllUsersColoredIcon, totalOfCheckedUsers);

uncheckAllUsersRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(totalOfCheckedUsers, uncheckAllUsersColoredIcon);

uncheckAllUsersRound.addEventListener('click', () => {
  refresh(getUsersData);
  addTwoHiddenClassLists(printUserRound, deleteUserRound);
  addTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
  unlockUserRound.classList.add('hidden');
  checkAll.checked = false;
  uncheckedAll(getUsersData);
});

// Add User Icon Style
addUserRound.onmouseenter = () =>
  removeAndAddHiddenClassLists(addUserColoredIcon, addUserBlackIcon);

addUserRound.onmouseleave = () =>
  removeAndAddHiddenClassLists(addUserBlackIcon, addUserColoredIcon);

addUserRound.addEventListener('click', () => {
  updValidArr = [];
  resetForm();
  formContainer.scrollIntoView();
  showSubmitFormBtns();
});

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
  if (formBtns.firstElementChild.classList.contains('hidden'))
    showSubmitFormBtns();
});

// Submit Progress Bar
let addProgressValue = i => {
  if (inputDiv[i].classList.contains('valid-border')) {
    if (!subValidArr.includes(i)) subValidArr.push(i);
  } else {
    if (subValidArr.includes(i)) subValidArr.splice(subValidArr.indexOf(i), 1);
  }
  progressValue.textContent = (100 / inputDiv.length) * subValidArr.length;
  progressColor.style.width = `${progressValue.textContent}%`;
};

// Update Progress Bar
let removeProgressValue = i => {
  if (!inputDiv[i].classList.contains('valid-border')) {
    if (updValidArr.includes(i)) updValidArr.splice(updValidArr.indexOf(i), 1);
  } else {
    if (!updValidArr.includes(i)) updValidArr.push(i);
  }
  progressValue.textContent = (100 / inputDiv.length) * updValidArr.length;
  progressColor.style.width = `${progressValue.textContent}%`;
};

// Form Errors
let onValid = k => {
  inputDiv[k].classList.add('valid-border');
  inputDiv[k].classList.remove('error-border');
  errors[k].classList.add('non-visible');
  removeAndAddHiddenClassLists(validIcon[k], errorIcon[k]);
};

let onError = k => {
  inputDiv[k].classList.add('error-border');
  errors[k].classList.remove('non-visible');
  errors[k].textContent = 'This field is required';
  inputDiv[k].classList.remove('valid-border');
  removeAndAddHiddenClassLists(errorIcon[k], validIcon[k]);
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
  inputArea.forEach(element => (element.value = ''));
  validIcon.forEach(element => element.classList.add('hidden'));
  errorIcon.forEach(element => element.classList.add('hidden'));
  errors.forEach(element => element.classList.add('non-visible'));
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
  addTwoHiddenClassLists(progressBar, submitBtn);
  addTwoHiddenClassLists(updateUserBtn, clearBtn);
  addTwoHiddenClassLists(cancelFormBtn, cancelUpdate);
};

let showSubmitFormBtns = () => {
  removeTwoHiddenClassLists(progressBar, submitBtn);
  removeTwoHiddenClassLists(clearBtn, cancelFormBtn);
  addTwoHiddenClassLists(updateUserBtn, cancelUpdate);
};

// submit Form
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
    let i =
      getUsersData.findIndex(el => el.idNumber === addUserInSpecificPlace[0]) +
        1 || 0;
    let newUser = {
      fullName: fullNameInput.value,
      idNumber: idNumberInput.value,
      description: descriptionInput.value,
      currency: currencyInput.value,
      deposit: depositInput.value,
      rate: rateInput.value,
      balance: balanceInput.value,
      status: statusInput.value,
      lockStatus: 'not locked',
      checkStatus: 'unchecked',
    };
    getUsersData.splice(i, 0, newUser);
    setAndRefresh(getUsersData);
    if (getUsersData.length != 0) fillingTable();
    successfullyAddUserModalValue.innerHTML = fullNameInput.value;
    let goTo = document.getElementById(idNumberInput.value);
    main.scrollIntoView();
    goTo.classList.add('green-border');
    goTo.scrollIntoView({ block: 'center' });
    setTimeout(hideSuccessBorder, 5000, goTo);
    removeTwoHiddenClassLists(successfullyAddUserModal, successfullyAdded);
    successfullyUpdated.classList.add('hidden');
    setTimeout(removeModalMessage, 5000, successfullyAddUserModal);
    addUserInSpecificPlace = [];
    resetAndHideFormBtns();
  } else {
    formErrors();
    fullNameExist(getUsersData);
    idExist(getUsersData);
  }
});

// Message Modal
let errorModalMessage = modal => {
  modal.classList.remove('hidden');
  setTimeout(removeModalMessage, 2000, modal);
};

let removeModalMessage = modal => {
  modal.classList.add('hidden');
};

let hideSuccessBorder = index => {
  index.classList.remove('green-border');
};

// table
let emptyingTable = () => {
  removeAndAddHiddenClassLists(emptyData, table);
  dashboard.classList.add('flex');
  dashboard.style.backgroundColor = '#1ae5be';
  dashboard.style.width = '100%';
  dashboard.style.height = '100%';
  addUserRound.style.boxShadow =
    '3px 3px 16px rgb(6, 53, 201), -3px -3px 36px rgb(6, 53, 201), -9px -9px 50px rgb(6, 53, 201), 9px 9px 50px rgb(6, 53, 201), -20px -20px 100px rgb(6, 53, 201), 20px 20px 100px rgb(6, 53, 201)';
  addTwoHiddenClassLists(blackFilterUserIcon, blackSearchUserIcon);
};

let fillingTable = () => {
  removeAndAddHiddenClassLists(table, emptyData);
  dashboard.classList.remove('flex');
  dashboard.style.backgroundColor = '';
  dashboard.style.width = '';
  dashboard.style.height = '';
  addUserRound.style.boxShadow = '';
  removeTwoHiddenClassLists(blackFilterUserIcon, blackSearchUserIcon);
};

//theade
// Sort Functions
let sortByFullName = (a, b) =>
  a.fullName.toLowerCase() > b.fullName.toLowerCase()
    ? 1
    : b.fullName.toLowerCase() > a.fullName.toLowerCase()
    ? -1
    : 0;

let sortByStatus = (a, b) =>
  a.status.toLowerCase() > b.status.toLowerCase()
    ? 1
    : b.status.toLowerCase() > a.status.toLowerCase()
    ? -1
    : 0;

let sortedArr = arr => {
  if (azName.checked && allStatus.checked) {
    removeAndAddHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
    addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    return arr.sort(sortByFullName);
  } else if (zaName.checked && allStatus.checked) {
    removeAndAddHiddenClassLists(blueDownIcon[0], blueUpIcon[0]);
    addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    return arr.sort(sortByFullName).reverse();
  } else if (activeStatus.checked && allName.checked) {
    removeAndAddHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
    return arr.sort(sortByStatus);
  } else if (inactiveStatus.checked && allName.checked) {
    removeAndAddHiddenClassLists(blueDownIcon[1], blueUpIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
    return arr.sort(sortByStatus).reverse();
  } else if (activeStatus.checked && azName.checked) {
    removeTwoHiddenClassLists(blueUpIcon[0], blueUpIcon[1]);
    addTwoHiddenClassLists(blueDownIcon[0], blueDownIcon[1]);
    return arr.sort(sortByFullName).sort(sortByStatus);
  } else if (inactiveStatus.checked && azName.checked) {
    removeTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[1]);
    addTwoHiddenClassLists(blueDownIcon[0], blueUpIcon[1]);
    return arr.sort(sortByFullName).reverse().sort(sortByStatus).reverse();
  } else if (activeStatus.checked && zaName.checked) {
    removeTwoHiddenClassLists(blueDownIcon[0], blueUpIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[1]);
    return arr.sort(sortByFullName).reverse().sort(sortByStatus);
  } else if (inactiveStatus.checked && zaName.checked) {
    removeTwoHiddenClassLists(blueDownIcon[0], blueDownIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueUpIcon[1]);
    return arr.sort(sortByFullName).sort(sortByStatus).reverse();
  } else {
    addTwoHiddenClassLists(blueUpIcon[1], blueDownIcon[1]);
    addTwoHiddenClassLists(blueUpIcon[0], blueDownIcon[0]);
  }
};

filterBoard.onchange = () => refresh(getUsersData);
filterBoard.onmouseleave = () =>
  removeAndAddHiddenClassLists(filterIcon, filterBoard);

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
    lockStatus,
    checkStatus,
  } = userData;
  let UserRow = document.createElement('tr');
  UserRow.setAttribute('class', `table-row ${checkRowStyle(checkStatus)}`);
  UserRow.setAttribute('id', `${idNumber}`);
  UserRow.appendChild(appendCheckUserTD(userData, UserRow));
  UserRow.appendChild(appendFullNameIdNumberTD(fullName, idNumber));
  UserRow.appendChild(appendDescriptionTD(description));
  UserRow.appendChild(appendRateCurrencyTD(rate, currency));
  UserRow.appendChild(appendBalanceCurrencyTD(balance, currency));
  UserRow.appendChild(appendDepositCurrencyTD(deposit, currency));
  UserRow.appendChild(appendStatusTD(userData, status));
  UserRow.appendChild(appendMoreTD(userData));
  return UserRow;
};
let checkRowStyle = checkSt => (checkSt === 'checked' ? `check-row-style` : ``);

let appendCheckUserTD = (ud, row) => {
  let checkUserTD = document.createElement('td');
  checkUserTD.setAttribute('class', 'check-user-td');
  checkUserTD.appendChild(appendCheckedUserIcon(ud));
  checkUserTD.appendChild(appendUncheckedUserIcon(ud));
  checkUserTD.appendChild(appendAddDuplicateDelete(row, ud));
  return checkUserTD;
};

let appendCheckedUserIcon = ud => {
  let checkedUserIcon = document.createElement('img');
  checkedUserIcon.setAttribute('src', './images/checked-user.svg');
  checkedUserIcon.setAttribute(
    'class',
    `medium-icons flex checked-user-icon ${checkIconStyle(ud, 'checked')}`
  );
  checkedUserIcon.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    getUsersData[
      getUsersData.findIndex(el => el.idNumber === rowId)
    ].checkStatus = 'unchecked';
    showRoundIcons(getUsersData);
    setAndRefresh(getUsersData);
  });
  return checkedUserIcon;
};

let checkIconStyle = (ud, checkSt) =>
  ud.checkStatus === checkSt ? `` : `hidden`;
let appendUncheckedUserIcon = ud => {
  let uncheckedUserIcon = document.createElement('img');
  uncheckedUserIcon.setAttribute('src', './images/unchecked-user.png');
  uncheckedUserIcon.setAttribute(
    'class',
    `medium-icons flex unchecked-user-icon ${checkIconStyle(ud, 'unchecked')}`
  );
  uncheckedUserIcon.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    getUsersData[
      getUsersData.findIndex(el => el.idNumber === rowId)
    ].checkStatus = 'checked';
    showRoundIcons(getUsersData);
    setAndRefresh(getUsersData);
  });
  return uncheckedUserIcon;
};

let appendAddDuplicateDelete = (row, ud) => {
  let addDuplicateDeleteDiv = document.createElement('div');
  addDuplicateDeleteDiv.setAttribute('class', 'add-duplicate-delete hidden');
  row.onmouseenter = () => addDuplicateDeleteDiv.classList.remove('hidden');
  row.onmouseleave = () => addDuplicateDeleteDiv.classList.add('hidden');
  addDuplicateDeleteDiv.appendChild(appendDeleteThisRow(ud));
  addDuplicateDeleteDiv.appendChild(appendDuplicateThisRow(ud));
  addDuplicateDeleteDiv.appendChild(appendAddNewUserHere());
  return addDuplicateDeleteDiv;
};

let appendDeleteThisRow = ud => {
  let DeleteThisRow = document.createElement('img');
  DeleteThisRow.setAttribute('class', 'delete-this medium-icons');
  DeleteThisRow.setAttribute('src', './images/error.svg');
  DeleteThisRow.addEventListener('click', () => {
    if (ud.lockStatus === 'locked') {
      errorModalMessage(lockModal);
    } else {
      if (confirm('Are you sure you wont to delete this user ?'))
        getUsersData.splice(getUsersData.indexOf(ud), 1);
    }

    if (startingIndex.textContent > getUsersData.length) currentPage -= 1;
    setAndRefresh(getUsersData);
    if (getUsersData.length === 0) emptyingTable();
  });
  return DeleteThisRow;
};

let appendDuplicateThisRow = ud => {
  let DuplicateThisRow = document.createElement('img');
  DuplicateThisRow.setAttribute('class', 'duplicate-this medium-icons');
  DuplicateThisRow.setAttribute('src', './images/duplicate-user.png');

  DuplicateThisRow.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    duplicateUser(ud, rowId);
  });
  return DuplicateThisRow;
};

let duplicateUser = (editItem, i) => {
  getIndexAndScrollToForm(i);
  descriptionInput.value = editItem.description;
  currencyInput.value = editItem.currency;
  depositInput.value = editItem.deposit;
  rateInput.value = editItem.rate;
  balanceInput.value = editItem.balance;
  statusInput.value = editItem.status;
  fullNameInput.value = editItem.fullName;
  idNumberInput.value = editItem.idNumber;
  formErrors();
  fullNameExist(getUsersData);
  idExist(getUsersData);
  formInputAndBlurErrors(removeProgressValue, getUsersData);
  updValidArr = [2, 3, 4, 5, 6, 7];
  updateProgressBar(75);
};

let getIndexAndScrollToForm = index => {
  addUserInSpecificPlace = [];
  addUserInSpecificPlace.push(index);
  resetForm();
  formContainer.scrollIntoView();
  showSubmitFormBtns();
};

let appendAddNewUserHere = () => {
  let AddNewUserHere = document.createElement('img');
  AddNewUserHere.setAttribute('class', 'add-new-user-here medium-icons');
  AddNewUserHere.setAttribute('src', './images/add.png');
  AddNewUserHere.addEventListener('click', e => {
    let rowId = e.target.closest('tr').id;
    getIndexAndScrollToForm(rowId);
    updValidArr = [];
  });
  return AddNewUserHere;
};

let forcedCheck = ud => {
  checkAll.checked = ud.every(element => element.checkStatus === 'checked')
    ? true
    : false;
};

checkAll.addEventListener('click', () => {
  checkAllUsers(totalRowsPerPage);
  setAndRefresh(getUsersData);
  showRoundIcons(getUsersData);
});

let checkAllUsers = arr => {
  arr.forEach(
    element =>
      (element.checkStatus = checkAll.checked ? 'checked' : 'unchecked')
  );
};

let showRoundIcons = ud => {
  if (ud.some(element => element.checkStatus === 'checked')) {
    removeTwoHiddenClassLists(printUserRound, deleteUserRound);
    removeTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
    unlockUserRound.classList.remove('hidden');
  } else {
    addTwoHiddenClassLists(printUserRound, deleteUserRound);
    addTwoHiddenClassLists(lockUserRound, uncheckAllUsersRound);
    unlockUserRound.classList.add('hidden');
  }
};

let uncheckedAll = ud => {
  ud.forEach(element => (element.checkStatus = 'unchecked'));
  setAndRefresh(ud);
};

let appendFullNameIdNumberTD = (fNm, idNb) => {
  let FullNameIdNumberTD = document.createElement('td');
  FullNameIdNumberTD.setAttribute('class', 'full-name-id-number-td');
  FullNameIdNumberTD.innerHTML = `
<td class="full-name-id-number-td">
<p class="full-name">${fNm.toLowerCase()}</p>
<p class="id-number">${idNb}</p>
</td>`;
  return FullNameIdNumberTD;
};

let appendDescriptionTD = des => {
  let DescriptionTD = document.createElement('td');
  DescriptionTD.setAttribute('class', 'description-td');
  DescriptionTD.innerHTML = `<p class="description">${des}</p>`;
  return DescriptionTD;
};

let appendRateCurrencyTD = (rt, crr) => {
  let RateCurrencyTD = document.createElement('td');
  RateCurrencyTD.setAttribute('class', 'rate-currency-td');
  RateCurrencyTD.innerHTML = `
<p class="rate right-text-align">${Number(rt).toFixed(2)}</p>
<p class="currency right-text-align">${crr}</p>`;
  return RateCurrencyTD;
};

let appendBalanceCurrencyTD = (bal, crr) => {
  let BalanceCurrencyTD = document.createElement('td');
  BalanceCurrencyTD.setAttribute('class', 'balance-currency-td');
  BalanceCurrencyTD.innerHTML = `<p class="balance right-text-align ${checkBalance(
    bal
  )}">${Number(bal).toFixed(2)}</p>
<p class="currency right-text-align">${crr}</p>`;
  return BalanceCurrencyTD;
};

let checkBalance = b => (b > 0 ? 'positive' : b < 0 ? 'negative' : '');

let appendDepositCurrencyTD = (dp, crr) => {
  let DepositCurrencyTD = document.createElement('td');
  DepositCurrencyTD.setAttribute('class', 'deposit-currency-td');
  DepositCurrencyTD.innerHTML = `
<p class="deposit right-text-align">${Number(dp).toFixed(2)}</p>
<p class="currency right-text-align">${crr}</p>`;
  return DepositCurrencyTD;
};

let appendStatusTD = (ud, st) => {
  let StatusTD = document.createElement('td');
  StatusTD.setAttribute('class', 'status-td center-text-align');
  let activityBtn = document.createElement('button');
  activityBtn.setAttribute('class', `${showStatus(st)}`);
  activityBtn.innerHTML = `${st}`;
  activityBtn.addEventListener('click', () => {
    if (ud.lockStatus === 'locked') {
      errorModalMessage(lockModal);
    } else {
      ud.status = st === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
      setAndRefresh(getUsersData);
    }
  });
  StatusTD.appendChild(activityBtn);
  return StatusTD;
};

let showStatus = sts => `${sts.toLowerCase()}-btn`;

let appendMoreTD = ud => {
  let moreTD = document.createElement('td');
  let moreDiv = document.createElement('div');
  moreTD.setAttribute('class', 'center-text-align');
  moreDiv.setAttribute('class', 'flex-btwn');
  moreTD.appendChild(moreDiv);
  moreDiv.appendChild(appendEditUserIcon(ud));
  moreDiv.appendChild(appendStrongLockUserIcon(ud));
  moreDiv.appendChild(appendWeakLockUserIcon(ud));
  return moreTD;
};

let appendEditUserIcon = ud => {
  let EditUserIcon = document.createElement('img');
  EditUserIcon.setAttribute('src', './images/b-edit-user.svg');
  EditUserIcon.setAttribute('class', 'medium-icons');
  EditUserIcon.addEventListener('click', e => {
    if (ud.lockStatus === 'locked') {
      errorModalMessage(lockModal);
    } else {
      subValidArr = [];
      updValidArr = [0, 1, 2, 3, 4, 5, 6, 7];
      let rowId = e.target.closest('tr').id;
      editUserFcts(ud, rowId);
    }
  });
  return EditUserIcon;
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

let updateProgressBar = num => {
  progressBar.classList.remove('hidden');
  progressValue.textContent = num;
  progressColor.style.width = `${progressValue.textContent}%`;
};

let editUserFcts = (e, id) => {
  resetForm();
  extractID(id);
  takeCopy(e, id);
  updateProgressBar(100);
  formErrors();
};

let updateUsersForm = (editItem, filteredCopy) => {
  addTwoHiddenClassLists(submitBtn, clearBtn);
  formContainer.scrollIntoView();
  cancelFormBtn.classList.add('hidden');
  removeTwoHiddenClassLists(updateUserBtn, cancelUpdate);
  fullNameInput.value = editItem.fullName;
  idNumberInput.value = editItem.idNumber;
  descriptionInput.value = editItem.description;
  currencyInput.value = editItem.currency;
  depositInput.value = editItem.deposit;
  rateInput.value = editItem.rate;
  balanceInput.value = editItem.balance;
  statusInput.value = editItem.status;
  console.log(editItem.checkStatus);
  formInputAndBlurErrors(removeProgressValue, filteredCopy);
  updateUserBtn.onclick = () => updateUser(editItem.checkStatus);
  cancelUpdate.onclick = () => cancelUpdateUser();
};

let updateUser = (checkSt) => {
  if (
    Object.entries(inputDiv).every(element =>
      element[1].classList.contains('valid-border')
    )
  ) {
    successfullyAdded.classList.add('hidden');
    removeTwoHiddenClassLists(successfullyAddUserModal, successfullyUpdated);
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
      lockStatus: 'not locked',
      checkStatus: checkSt,
    };
    setTimeout(removeModalMessage, 5000, successfullyAddUserModal);
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
  let goTo = document.querySelectorAll('.table-row')[rowIdIndexArr[0]];
  resetAndHideFormBtns();
  goTo.classList.add('green-border');
  goTo.scrollIntoView({ block: 'center' });
  setTimeout(hideSuccessBorder, 5000, goTo);
};

let appendStrongLockUserIcon = ud => {
  let strongLockUserIcon = document.createElement('img');
  strongLockUserIcon.setAttribute('src', './images/strong-lock-user.png');
  strongLockUserIcon.setAttribute(
    'class',
    `${checkLockStatus(ud, 'locked')} medium-icons black-print-user-icon `
  );
  strongLockUserIcon.addEventListener('click', () => {
    ud.lockStatus = 'not locked';
    setAndRefresh(getUsersData);
  });
  return strongLockUserIcon;
};

let appendWeakLockUserIcon = ud => {
  let weakLockUserIcon = document.createElement('img');
  weakLockUserIcon.setAttribute('src', './images/weak-lock-user.png');
  weakLockUserIcon.setAttribute(
    'class',
    `${checkLockStatus(ud, 'not locked')} medium-icons black-print-user-icon `
  );
  weakLockUserIcon.addEventListener('click', () => {
    ud.lockStatus = 'locked';
    setAndRefresh(getUsersData);
  });
  return weakLockUserIcon;
};

let checkLockStatus = (ud, lockSt) =>
  ud.lockStatus === lockSt ? `` : `hidden`;

// tfoot
let tableFooterColor = arr =>
  (tableFooter.style.backgroundColor = arr.length % 2 != 0 ? '#f4f7fc' : '');

// Locked Users :
let showLockedUsers = arr => {
  let numberOfLockedUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].lockStatus === 'locked')
      numberOfLockedUsers.push(arr[i].lockStatus);
  }
  return numberOfLockedUsers.length;
};

// active Users :
let showActiveUsers = arr => {
  let numberOfActiveUsers = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].status === 'ACTIVE') numberOfActiveUsers.push(arr[i].status);
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
blackLeftArrow.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorLeftArrow, blackLeftArrow);

colorLeftArrow.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackLeftArrow, colorLeftArrow);

blackRightArrow.onmouseenter = () =>
  removeAndAddHiddenClassLists(colorRightArrow, blackRightArrow);

colorRightArrow.onmouseleave = () =>
  removeAndAddHiddenClassLists(blackRightArrow, colorRightArrow);

colorRightArrow.addEventListener('click', () => {
  if ((currentPage + 1) * rowsPerPage.value < getUsersData.length)
    currentPage++;
  refresh(getUsersData);
  if (startingIndex.textContent == 0) currentPage--;
  refresh(getUsersData);
});

colorLeftArrow.addEventListener('click', () => {
  if (currentPage != 0) currentPage--;
  refresh(getUsersData);
});

// Render
let refresh = arrayToRender => {
  tableBody.innerHTML = null;
  let selectedRowsPerPage = rowsPerPageValueOnChange || rowsPerPage.value;
  let filteredUsers = filteredArr(arrayToRender) || arrayToRender;
  let sortFiltered = filteredUsers.slice() || filteredUsers;
  sortedArr(sortFiltered);
  totalRowsPerPage = sortFiltered.slice(
    currentPage * selectedRowsPerPage,
    (currentPage + 1) * selectedRowsPerPage
  );
  tableFooterColor(totalRowsPerPage);
  totalOfLockedUsers.textContent = showLockedUsers(sortFiltered);
  totalOfCheckedUsers.textContent = showTotalOfCheckedUsers(arrayToRender);
  activeUsers.textContent = showActiveUsers(sortFiltered);
  totalOfUsers.forEach(element => (element.textContent = sortFiltered.length));
  startingIndex.textContent =
    totalRowsPerPage.length != 0
      ? currentPage * selectedRowsPerPage + 1
      : totalRowsPerPage.length;
  endingIndex.textContent =
    totalRowsPerPage.length -
    selectedRowsPerPage +
    selectedRowsPerPage * (currentPage + 1);
  totalRowsPerPage.forEach(element =>
    tableBody.appendChild(addNewUser(element))
  );
  forcedCheck(totalRowsPerPage);
};
// onLoad
let onLoad = () => {
  resetAndHideFormBtns();
  main.scrollIntoView();
};

if (getLocalStorage == null) {
  localStorage.setItem('usersData', JSON.stringify(users));
  refresh(getUsersData);
  onLoad();
} else if (getLocalStorage == '[]') {
  emptyingTable();
  onLoad();
} else {
  refresh(getUsersData);
  uncheckedAll(getUsersData);
  onLoad();
}
