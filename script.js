'use strict';
let req = [
  // - Added customer should adher to all table logic (Search, Sort..)
];
let done = [
  // - Form to add customer
  // - Fields
  //     - Customer number (Number field)
  //     - Customer name
  //     - Description (textarea)
  //     - Currency (Select: EUR, INR, USD)
  //     - Rate (Number field)
  //     - Balance (Number field)
  //     - Deposit (Number filed)
  //     - Status (Select: Active, Inactive)
  // - Add customer to start of the array
  // - Validation
  //     - All fields are required (“This field is required”)
  //     - Customer number should be unique (Error below input: “Customer number already exists”)
  //     - Customer number should be 10 digits (Error below input: “Customer number should be 10 digits”)
  //     - Customer name should be unique (Error below input: “Customer already exists”)
  //     - Customer name should be string (Error below input: “Customer name must be string”)
  //     - Description should at least have 10 characters (“Description should at least have 10 characters”)
  //     - All fields are required (“This field is required”)
  //     - Description should at least have 10 characters (“Description should at least have 10 characters”)
  // - After submission clear form
  // - Validation triggers on submit, if validation passed add customer, otherwise show errors.
];
let user = [
  {
    fullName: 'Teresa Reynolds',
    idNumber: '4709935578',
    description:
      'Bunkbed  Drop  down  Deflector  Risotto  Uplifted  Synergy  Vindicate  Java  Suave  Chosen  Sleet  Voting  Reclining  Diaper  Isolating  Unzip  Reporter  Golf  Showman  Floss',
    currency: 'USD',
    deposit: '0190108',
    rate: '641544',
    balance: '1598207735',
    status: 'inactive',
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
    status: 'active',
  },
  {
    fullName: 'Roberta Francis',
    idNumber: '9434221226',
    description:
      'Hastily  Calcium  Outspoken  Subtitle  Doornail  Limes  Emote  Composure  Discount  Duchess  Shoplift  Prelude  Reformist  Aware  Satirical  Flatly  Flounder  Plus  Genre  Fidgeting',
    currency: 'EUR',
    deposit: '1472711',
    rate: '224769',
    balance: '6908307213',
    status: 'active',
  },
  {
    fullName: 'Mable Caldwell',
    idNumber: '5764927799',
    description:
      'Catapult  Aflutter  Reformist  Falcon  Uncloak  Cusp  Enlarging  Extending  Spill  Thrash  Claim  Unreeling  Hatching  Alienate  Conduit  Silt  Immobile  Percolate  Rephrase  Dimple',
    currency: 'INR',
    deposit: '2489707',
    rate: '342142',
    balance: '8758528450',
    status: 'inactive',
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
    status: 'inactive',
  },
  {
    fullName: 'Wayne Hubbard',
    idNumber: '4778738075',
    description:
      'Geologist  Parking  Tapestry  Shrunk  Reappoint  Prideful  Runaround  Trophy  Preacher  Richly  Courier  Hardcore  Stingy  Snugness  Unrushed  Movie  Reflex  Deduce  Calibrate  Wrath',
    currency: 'INR',
    deposit: '1461559',
    rate: '062410',
    balance: '1122470730',
    status: 'active',
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
    status: 'active',
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
    status: 'active',
  },
  {
    fullName: 'Melvin Bennett',
    idNumber: '9576569304',
    description:
      'Sheet  Rinse  Slider  Circling  Placidly  Dictation  Game  Squire  District  Darwinism  Supremacy  Aggregate  Tingling  Shortlist  Entangled  Ruby  Product  Vocation  Gambling  Vindicate',
    currency: 'USD',
    deposit: '2582985',
    rate: '429851',
    balance: '5237845048',
    status: 'inactive',
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
    status: 'inactive',
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
    status: 'active',
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
    status: 'active',
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
    status: 'inactive',
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
    status: 'active',
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
    status: 'inactive',
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
    status: 'active',
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
    status: 'inactive',
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
    status: 'inactive',
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
    status: 'active',
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
    status: 'inactive',
  },
  {
    fullName: 'Charles Bradley',
    idNumber: '1031253602',
    description:
      'Slacks  Undermine  Cornfield  Busboy  Overthrow  Triceps  Hardener  Closable  Automated  Parasite  Quintuple  Antelope  Undocked  Outclass  Stellar  Unsliced  Reprogram  Bootleg  Flogging  Handcart',
    currency: 'EUR',
    deposit: '3660042',
    rate: '529565',
    balance: '8564614162',
    status: 'active',
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
    status: 'inactive',
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
    status: 'active',
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
    status: 'inactive',
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
    status: 'inactive',
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
    status: 'active',
  },
  {
    fullName: 'Archie Stokes ',
    idNumber: '9434895783',
    description:
      'Salad  Resistant  Puzzling  Endless  Slacked  Define  Shiftless  Bobble  Tissue  Cornfield  Giggling  Wobbling  Polyester  Wagon  Zoology  Estrogen  Goldfish  Gaffe  Browse  Shirt',
    currency: 'INR',
    deposit: '5479568',
    rate: '154580',
    balance: '6639078105',
    status: 'inactive',
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
    status: 'inactive',
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
    status: 'active',
  },
  {
    fullName: 'Yolanda Griffin',
    idNumber: '1665912884',
    description:
      'Joining  Lazy  Stipend  Actress  Handwoven  Gulp  Decorated  Moonlight  Evasion  Corrosive  Patronage  Chowtime  Bleach  Stinging  Degraded  Mummy  Pound  Willfully  Unscathed  Sheet',
    currency: 'EUR',
    deposit: '0405947',
    rate: '309092',
    balance: '7571624225',
    status: 'inactive',
  },
  {
    fullName: 'Elijah Banks',
    idNumber: '7241658188',
    description:
      'Trivial  Facility  Uplifted  Jailhouse  Flyable  Champion  Retract  Elastic  Karaoke  Bungee  Saint  Garnish  Impale  Marxism  Overarch  Survivor  Climate  Twisty  Tablet  Flatfoot',
    currency: 'EUR',
    deposit: '0321758',
    rate: '590848',
    balance: '6025379216',
    status: 'active',
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
    status: 'inactive',
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
    status: 'inactive',
  },
];

// Top Icons
let searchBar = document.querySelector('.search-bar');
let searchInputField = document.querySelector('.search-input-field');
let searchIcon = document.querySelector('.search-icon');
let blackSearchUserIcon = document.querySelector('.black-search-user-icon');
let colorSearchUserIcon = document.querySelector('.color-search-user-icon');

let blackDeleteSearch = document.querySelector('.black-delete-search');
let colorDeleteSearch = document.querySelector('.color-delete-search');

let addUserColoredIcon = document.querySelector('.add-user-colored-icon');
let addUserBlackIcon = document.querySelector('.add-user-black-icon');

// Form & Overlay
let addUserForm = document.querySelector('.form');
let overlay = document.querySelector('.overlay');
let closeFormBtn = document.querySelector('.close-form');
let cancelFormBtn = document.querySelector('.cancel-form');

// Search Bar
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
  searchInputField.value = '';
  searchInputField.focus();
  refresh(user);
  colorDeleteSearch.classList.add('hidden');
  blackDeleteSearch.classList.add('hidden');
});

searchBar.addEventListener('mouseleave', () => {
  searchIcon.classList.remove('hidden');
  searchBar.classList.add('hidden');
});

searchInputField.addEventListener('input', () => {
  if (searchInputField.value.trim() !== '') {
    blackDeleteSearch.classList.remove('hidden');
  } else {
    blackDeleteSearch.classList.add('hidden');
  }
});

// search

searchInputField.addEventListener('keyup', () => {
  let searchInputValue = searchInputField.value;
  let copyOfUser = user.slice();
  let filtered = copyOfUser.filter(userD => {
    if (userD.fullName.toLowerCase().includes(searchInputValue)) {
      return userD;
    }
    if (userD.fullName.toUpperCase().includes(searchInputValue)) {
      return userD;
    }
  });
  refresh(filtered);
  emptyData.classList.add('hidden');
});

// Add User Icon

addUserBlackIcon.addEventListener('mouseenter', () => {
  addUserBlackIcon.classList.add('hidden');
  addUserColoredIcon.classList.remove('hidden');
});

addUserColoredIcon.addEventListener('mouseleave', () => {
  addUserBlackIcon.classList.remove('hidden');
  addUserColoredIcon.classList.add('hidden');
});
addUserColoredIcon.addEventListener('click', () => {
  overlay.classList.remove('hidden');
  addUserForm.classList.remove('hidden');
  closeFormBtn.classList.remove('hidden');
  fullNameInput.focus();
});

// Form

let fullNameInput = document.querySelector('.full-name-input');
let fullNameInputDiv = document.querySelector('.full-name-input-div');
let idNumberInput = document.querySelector('.id-number-input');
let idNumberInputDiv = document.querySelector('.id-number-input-div');
let descriptionInput = document.querySelector('.description-input');
let descriptionInputDiv = document.querySelector('.description-input-div');
let currencyInput = document.querySelector('.currency-input');
let currencyInputDiv = document.querySelector('.currency-input-div');
let depositInput = document.querySelector('.deposit-input');
let depositInputDiv = document.querySelector('.deposit-input-div');
let rateInput = document.querySelector('.rate-input');
let rateInputDiv = document.querySelector('.rate-input-div');
let balanceInput = document.querySelector('.balance-input');
let balanceInputDiv = document.querySelector('.balance-input-div');
let statusInput = document.querySelector('.status-input');
let statusInputDiv = document.querySelector('.status-input-div');
let clearBtn = document.querySelector('.clear-btn');

let errorIcon = document.querySelectorAll('.error-icon');
let validIcon = document.querySelectorAll('.valid-icon');
let inputDiv = document.querySelectorAll('.input-div');
let inputArea = document.querySelectorAll('.input');
let errors = document.querySelectorAll('.errors');

// Form inputs

let onBlurValid = k => {
  for (let i = 0; i < inputDiv.length; i++) {
    inputDiv[k].classList.add('valid-border');
    validIcon[k].classList.remove('hidden');
    inputDiv[k].classList.remove('error-border');
    errorIcon[k].classList.add('hidden');
    errors[k].classList.add('non-visible');
  }
};
let onBlurError = k => {
  for (let i = 0; i < inputDiv.length; i++) {
    inputDiv[k].classList.add('error-border');
    errorIcon[k].classList.remove('hidden');
    errors[k].classList.remove('non-visible');
    errors[k].textContent = 'This field is required';
    inputDiv[k].classList.remove('valid-border');
    validIcon[k].classList.add('hidden');
  }
};

let mustBeNumber = (value, index) => {
  if (value.trim() == '') {
    onBlurError(index);
  } else if (!isNaN(value) && value.trim() !== '') {
    onBlurValid(index);
  } else if (isNaN(value) && value.trim() !== '') {
    onBlurError(index);
    errors[index].textContent = `This field must be a number`;
  }
};

let fullNameInputErrors = () => {
  if (fullNameInput.value.trim() == '') {
    onBlurError(0);
  } else if (/[^a-z A-Z]/.test(fullNameInput.value)) {
    onBlurError(0);
    errors[0].textContent = `Customer name must be string`;
  } else {
    onBlurValid(0);
  }
  user.forEach(element => {
    if (element.fullName == fullNameInput.value) {
      onBlurError(0);
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
    onBlurError(1);
    errors[1].textContent = 'Customer number should be 10 digits';
  }
  user.forEach(element => {
    if (element.idNumber == idNumberInput.value) {
      onBlurError(1);
      errors[1].textContent = `User ID Number already exists`;
    }
  });
};

let descriptionInputErrors = () => {
  if (descriptionInput.value.length >= 10) {
    onBlurValid(2);
  } else {
    onBlurError(2);
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
    onBlurValid(3);
  } else {
    onBlurError(3);
    errors[3].textContent = 'You must choose a Currency';
  }
};

let statusInputErrors = () => {
  if (statusInput.value != '') {
    onBlurValid(7);
  } else {
    onBlurError(7);
    errors[7].textContent = 'Status must be Active or Inactive';
  }
};

fullNameInput.addEventListener('keyup', () => {
  fullNameInputErrors();
});

idNumberInput.addEventListener('keyup', () => {
  mustBeNumber(idNumberInput.value, 1);
  idNumberInputErrors();
});

descriptionInput.addEventListener('keyup', () => {
  descriptionInputErrors();
});

currencyInput.addEventListener('change', () => {
  currencyInputErrors();
});
currencyInput.addEventListener('blur', () => {
  currencyInputErrors();
});

depositInput.addEventListener('keyup', () => {
  mustBeNumber(depositInput.value, 4);
});

rateInput.addEventListener('keyup', () => {
  mustBeNumber(rateInput.value, 5);
});

balanceInput.addEventListener('keyup', () => {
  mustBeNumber(balanceInput.value, 6);
});

statusInput.addEventListener('change', () => {
  statusInputErrors();
});
statusInput.addEventListener('blur', () => {
  statusInputErrors();
});

let resetForm = () => {
  inputDiv.forEach(element => {
    element.classList.remove('valid-border');
  });
  inputDiv.forEach(element => {
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
};

clearBtn.addEventListener('click', resetForm);

//submit

addUserForm.addEventListener('submit', e => {
  e.preventDefault();
  if (
    inputDiv[0].classList.contains('valid-border') &&
    inputDiv[1].classList.contains('valid-border') &&
    inputDiv[2].classList.contains('valid-border') &&
    inputDiv[3].classList.contains('valid-border') &&
    inputDiv[4].classList.contains('valid-border') &&
    inputDiv[5].classList.contains('valid-border') &&
    inputDiv[6].classList.contains('valid-border') &&
    inputDiv[7].classList.contains('valid-border')
  ) {
    user.unshift({
      fullName: fullNameInput.value,
      idNumber: idNumberInput.value,
      description: descriptionInput.value,
      currency: currencyInput.value,
      deposit: depositInput.value,
      rate: rateInput.value,
      balance: balanceInput.value,
      status: statusInput.value,
    });
    refresh(user);
    resetForm();
    closeForm();
  } else {
    fullNameInputErrors();
    mustBeNumber(idNumberInput.value, 1);
    idNumberInputErrors();
    descriptionInputErrors();
    currencyInputErrors();
    mustBeNumber(depositInput.value, 4);
    mustBeNumber(rateInput.value, 5);
    mustBeNumber(balanceInput.value, 6);
    statusInputErrors();
  }
});

let closeForm = () => {
  addUserForm.classList.add('hidden');
  overlay.classList.add('hidden');
  closeFormBtn.classList.add('hidden');
};
let pressEscape = esc => {
  if (esc.key === 'Escape' && !addUserForm.classList.contains('hidden')) {
    closeForm();
  }
};

closeFormBtn.addEventListener('click', closeForm);
overlay.addEventListener('click', closeForm);
cancelFormBtn.addEventListener('click', () => {
  resetForm();
  closeForm();
});

//theade

// Sort Functions

let sortUser = user.slice();

let sortByFullNameAtoZ = (a, b) => {
  if (a.fullName > b.fullName) {
    return 1;
  } else if (b.fullName > a.fullName) {
    return -1;
  } else {
    return 0;
  }
};
let sortByFullNameZtoA = (a, b) => {
  if (a.fullName > b.fullName) {
    return -1;
  } else if (b.fullName > a.fullName) {
    return 1;
  } else {
    return 0;
  }
};

let sortByStatusAtoZ = (a, b) => {
  if (a.status > b.status) {
    return 1;
  } else if (b.status > a.status) {
    return -1;
  } else {
    return 0;
  }
};
let sortByStatusZtoA = (a, b) => {
  if (a.status > b.status) {
    return -1;
  } else if (b.status > a.status) {
    return 1;
  } else {
    return 0;
  }
};

// Sort-by
let blueUpIcon = document.querySelectorAll('.blue-up');
let blackUpIcon = document.querySelectorAll('.black-up');
let blackDownIcon = document.querySelectorAll('.black-down');
let blueDownIcon = document.querySelectorAll('.blue-down');

let tableNameP = document.querySelector('.p-name');
let tableStatusP = document.querySelector('.p-status');

let UpIcon = (i, j) => {
  blackUpIcon[i].classList.add('hidden');
  blackDownIcon[i].classList.remove('hidden');
  blueUpIcon[i].classList.remove('hidden');
  blueDownIcon[i].classList.add('hidden');
  blueUpIcon[j].classList.add('hidden');
  blueDownIcon[j].classList.add('hidden');
  blackUpIcon[j].classList.remove('hidden');
  blackDownIcon[j].classList.remove('hidden');
};
let DownIcon = (i, j) => {
  blackUpIcon[i].classList.remove('hidden');
  blackDownIcon[i].classList.add('hidden');
  blueUpIcon[i].classList.add('hidden');
  blueDownIcon[i].classList.remove('hidden');
  blueUpIcon[j].classList.add('hidden');
  blueDownIcon[j].classList.add('hidden');
  blackUpIcon[j].classList.remove('hidden');
  blackDownIcon[j].classList.remove('hidden');
};

blackUpIcon[0].addEventListener('click', () => {
  UpIcon(0, 1);
  sortUser.sort(sortByFullNameAtoZ);
  refresh(sortUser);
});

blackUpIcon[1].addEventListener('click', () => {
  UpIcon(1, 0);
  sortUser.sort(sortByStatusAtoZ);
  refresh(sortUser);
});

blackDownIcon[0].addEventListener('click', () => {
  DownIcon(0, 1);
  sortUser.sort(sortByFullNameZtoA);
  refresh(sortUser);
});
blackDownIcon[1].addEventListener('click', () => {
  DownIcon(1, 0);
  sortUser.sort(sortByStatusZtoA);
  refresh(sortUser);
});

let resetSort = i => {
  blackUpIcon[i].classList.remove('hidden');
  blackDownIcon[i].classList.remove('hidden');
  blueUpIcon[i].classList.add('hidden');
  blueDownIcon[i].classList.add('hidden');
  refresh(user);
};

blueUpIcon[0].addEventListener('click', () => {
  resetSort(0);
});
blueDownIcon[0].addEventListener('click', () => {
  resetSort(0);
});
tableNameP.addEventListener('click', () => {
  resetSort(0);
});
blueUpIcon[1].addEventListener('click', () => {
  resetSort(1);
});
blueDownIcon[1].addEventListener('click', () => {
  resetSort(1);
});
tableStatusP.addEventListener('click', () => {
  resetSort(1);
});

//tbody

let tableBody = document.querySelector('.table-body');

let addNewUser = (userData, index) => {
  //create Elements :
  let UserRow = document.createElement('tr');
  let currency = document.createElement('p');
  let currencyValue = document.createTextNode(userData.currency);

  let checkUserTD = document.createElement('td');
  let uncheckedUserIcon = document.createElement('img');
  let checkedUserIcon = document.createElement('img');

  let fullNameIdNumberTD = document.createElement('td');
  let fullName = document.createElement('p');
  let fullNameValue = document.createTextNode(userData.fullName);
  let idNumber = document.createElement('p');
  let idNumberValue = document.createTextNode(userData.idNumber);

  let descriptionTD = document.createElement('td');
  let description = document.createElement('p');
  let descriptionValue = document.createTextNode(userData.description);

  let rateAndCurrencyTD = document.createElement('td');
  let rate = document.createElement('p');
  let rateValue = document.createTextNode(userData.rate);

  let balanceAndCurrencyTD = document.createElement('td');
  let balance = document.createElement('p');
  let balanceValue = document.createTextNode(userData.balance);

  let depositAndCurrencyTD = document.createElement('td');
  let deposit = document.createElement('p');
  let depositValue = document.createTextNode(userData.deposit);

  let statusTD = document.createElement('td');
  let activeBtn = document.createElement('button');
  let activeBtnValue = document.createTextNode(userData.status);
  let inactiveBtn = document.createElement('button');
  let inactiveBtnValue = document.createTextNode(userData.status);

  let moreTD = document.createElement('td');
  let moreDiv = document.createElement('div');
  let blackDeleteUserIcon = document.createElement('img');
  let colorDeleteUserIcon = document.createElement('img');

  //create Classes :
  UserRow.setAttribute('user-index', index);
  currency.setAttribute('class', 'currency');

  checkUserTD.setAttribute('class', 'center-text-align');
  uncheckedUserIcon.setAttribute('src', './images/unchecked-user.svg');
  uncheckedUserIcon.setAttribute('class', 'medium-icons');
  checkedUserIcon.setAttribute('src', './images/checked-user.svg');
  checkedUserIcon.setAttribute('class', 'checked-icon medium-icons hidden');

  fullNameIdNumberTD.setAttribute('class', '');
  fullName.setAttribute('class', 'full-name');
  idNumber.setAttribute('class', 'id-number');

  descriptionTD.setAttribute('class', '');
  description.setAttribute('class', 'description');

  rateAndCurrencyTD.setAttribute('class', '');
  rate.setAttribute('class', 'rate');

  balanceAndCurrencyTD.setAttribute('class', '');
  balance.setAttribute('class', 'balance');

  depositAndCurrencyTD.setAttribute('class', '');
  deposit.setAttribute('class', 'deposit');

  statusTD.setAttribute('class', 'center-text-align');
  activeBtn.setAttribute('class', 'active-btn');
  inactiveBtn.setAttribute('class', 'inactive-btn');

  moreTD.setAttribute('class', 'center-text-align');

  blackDeleteUserIcon.setAttribute('src', './images/b-delete-user.svg');
  blackDeleteUserIcon.setAttribute('class', 'medium-icons');
  colorDeleteUserIcon.setAttribute('src', './images/delete-user.svg');
  colorDeleteUserIcon.setAttribute('class', 'medium-icons hidden');

  //Append Child :
  tableBody.appendChild(UserRow);
  UserRow.appendChild(checkUserTD);
  UserRow.appendChild(fullNameIdNumberTD);
  UserRow.appendChild(descriptionTD);
  UserRow.appendChild(depositAndCurrencyTD);
  UserRow.appendChild(rateAndCurrencyTD);
  UserRow.appendChild(balanceAndCurrencyTD);
  UserRow.appendChild(statusTD);
  UserRow.appendChild(moreTD);

  checkUserTD.appendChild(uncheckedUserIcon);
  checkUserTD.appendChild(checkedUserIcon);

  fullNameIdNumberTD.appendChild(fullName);
  fullNameIdNumberTD.appendChild(idNumber);

  descriptionTD.appendChild(description);

  depositAndCurrencyTD.appendChild(deposit);
  depositAndCurrencyTD.appendChild(currency);

  rateAndCurrencyTD.appendChild(rate);
  rateAndCurrencyTD.appendChild(currency);

  balanceAndCurrencyTD.appendChild(balance);
  balanceAndCurrencyTD.appendChild(currency);

  statusTD.appendChild(activeBtn);
  statusTD.appendChild(inactiveBtn);

  moreTD.appendChild(moreDiv);
  moreTD.appendChild(blackDeleteUserIcon);
  moreTD.appendChild(colorDeleteUserIcon);

  currency.appendChild(currencyValue);
  fullName.appendChild(fullNameValue);
  idNumber.appendChild(idNumberValue);
  description.appendChild(descriptionValue);
  rate.appendChild(rateValue);
  balance.appendChild(balanceValue);
  deposit.appendChild(depositValue);
  activeBtn.appendChild(activeBtnValue);
  inactiveBtn.appendChild(inactiveBtnValue);

  //Add Styles

  uncheckedUserIcon.addEventListener('click', () => {
    uncheckedUserIcon.classList.add('hidden');
    checkedUserIcon.classList.remove('hidden');
  });
  checkedUserIcon.addEventListener('click', () => {
    checkedUserIcon.classList.add('hidden');
    uncheckedUserIcon.classList.remove('hidden');
  });

  if (userData.status === 'active') {
    activeBtn.classList.remove('hidden');
    inactiveBtn.classList.add('hidden');
  } else {
    inactiveBtn.classList.remove('hidden');
    activeBtn.classList.add('hidden');
  }

  blackDeleteUserIcon.addEventListener('mouseenter', () => {
    blackDeleteUserIcon.classList.add('hidden');
    colorDeleteUserIcon.classList.remove('hidden');
  });
  colorDeleteUserIcon.addEventListener('mouseleave', () => {
    colorDeleteUserIcon.classList.add('hidden');
    blackDeleteUserIcon.classList.remove('hidden');
  });

  //delete user :

  colorDeleteUserIcon.addEventListener('click', e => {
    e.preventDefault();
    let deleteUser = window.confirm(
      'Are you sure you wont to delete this user ?'
    );
    if (deleteUser === true) {
      user.splice(index, 1);
    }
    refresh(user);
  });
};

// tfoot
let activeUsers = document.querySelector('.active-users');
let numberOfActiveUsers = [];
for (let i = 0; i < user.length; i++) {
  if (user[i].status === 'active') {
    numberOfActiveUsers.push(user[i].status);
  }
}
activeUsers.textContent = numberOfActiveUsers.length;

let totalOfUsers = document.querySelectorAll('.total-of-users');
totalOfUsers.forEach(element => {
  element.textContent = user.length;
});

let blackRightArrow = document.querySelector('.black-right-arrow');
let colorRightArrow = document.querySelector('.color-right-arrow');
let blackLeftArrow = document.querySelector('.black-left-arrow');
let colorLeftArrow = document.querySelector('.color-left-arrow');

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
//colorLeftArrow.addEventListener('click', () => {});
//colorRightArrow.addEventListener('click', () => {});

// onLoad

let emptyData = document.querySelector('.empty-row');
let noUsers = () => {
  emptyData.classList.remove('hidden');
  emptyData.textContent = `you dont have any user here :(`;
};

let refresh = arr => {
  tableBody.innerHTML = null;
  arr.forEach((element, index) => {
    addNewUser(element, index);
  });
};

if (user.length == 0) {
  noUsers();
} else {
  refresh(user);
}
