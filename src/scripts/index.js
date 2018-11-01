console.log("Yo");

const giftTemplate = document.querySelector("#gift-template").content;
const giftsContainer = document.querySelector("#index .gifts");
const modal = document.querySelector("#modal");
const optionBox = document.querySelectorAll(".option-box");
const imgPath = "assets/img/gifts/";
const previewSlideButton = document.querySelectorAll("#preview .slide-button");
const previewCloseButton = document.querySelector("#preview .close-button");
const previewOpenButton = document.querySelector(".preview-open-button");
const previewWrapper = document.querySelector("#preview .wrapper");
const preview = document.querySelector("#preview");

let giftsDOM;
let giftsArray = [];
let modalActive = false;
let previewSlidePos = 0;
let previewActive = false;

init();

//Initilaize
function init() {
  setupGiftsArray();
  displayGifts();
  giftsContainer.addEventListener("click", handleGiftClick);
  modal
    .querySelector(".close-icon")
    .addEventListener("click", toggleModalDetail);
  modal
    .querySelector(".close-button")
    .addEventListener("click", toggleModalDetail);

  optionBox.forEach(box => {
    box.addEventListener("click", handleOptionBoxClick);
  });

  previewSlideButton.forEach(btn => {
    btn.addEventListener("click", slidePreview);
  });

  previewCloseButton.addEventListener("click", togglePreview);
  previewOpenButton.addEventListener("click", togglePreview);
}

function togglePreview() {
  if (previewActive) {
    //Close
    preview.style.removeProperty("top");
  } else {
    //open
    preview.style.top = "0vh";
  }

  previewActive = !previewActive;
}

function slidePreview() {
  previewSlidePos = {
    left: () => {
      return previewSlidePos < 0 ? (previewSlidePos += 100) : 0;
    },
    right: () => {
      return previewSlidePos > -300 ? (previewSlidePos -= 100) : -300;
    }
  }[this.dataset.dir]();
  console.log(moveTo);

  previewWrapper.style.left = previewSlidePos + "vw";
}

function handleOptionBoxClick(e) {
  optionBox.forEach(box => {
    box.classList.remove("selected-option");
  });
  this.classList.add("selected-option");
}

function handleGiftClick(e) {
  let id = "";
  //Find "gift" classname inside path and get ID
  e.path.forEach(elem => {
    if (elem.className === "gift" || elem.className === "gift selected-gift") {
      id = elem.dataset.id;
    }
  });

  console.log(e);

  //Check if detail has been clicked or gift has been selected
  if (e.target.className === "detail") {
    //open modal
    console.log("show");
    const details = giftsArray.filter(getIdDetails);
    console.log(details);
    updateModalDetail(details);
    toggleModalDetail();
  } else if (id != "") {
    //Select gift
    console.log(id);
    giftsDOM.forEach(gift => {
      gift.classList.remove("selected-gift");
    });
    document
      .querySelectorAll(`[data-id='${id}']`)[0]
      .classList.add("selected-gift");
  }

  //Get title and
  function getIdDetails(obj) {
    if (obj.id === id) {
      return {
        title: obj.title,
        description: obj.description,
        img: obj.img
      };
    } else {
      return false;
    }
  }
}

function toggleModalDetail() {
  if (modalActive) {
    //Close
    modal.style.removeProperty("top");
  } else {
    modal.style.top = "0px";
  }
  modalActive = !modalActive;
}

function updateModalDetail(detailObj) {
  console.log(detailObj);
  modal.querySelector("h3").textContent = detailObj[0].title;
  modal.querySelector(".description").textContent = detailObj[0].description;
  modal.querySelector("img").setAttribute("src", imgPath + detailObj[0].img);
}

//Populate the array
function setupGiftsArray() {
  giftsArray = [
    {
      id: uuidv4(),
      title: "Digital blodtryksmåler",
      old_price: "349,00",
      description:
        "Med denne digitale blodtryksmåler kan du nemt holde styr på dit blodtryk. Den har en bevægelsessensor, der advarer dig, hvis du sidder for uroligt. Den giver også besked, hvis du har en uregelmæssig hjerterytme. Måleren registrerer blodets bevægelser gennem armens pulsåre og omdanner bevægelserne til en værdi.",
      img: "blood.png"
    },
    {
      id: uuidv4(),
      title: "Mitilux kikkert",
      old_price: "850,00",
      description:
        "Denne professionelle kikkert fra Mitilux med 8 gange forstørrelse og en objektivdiameter på 40 mm giver krystalklart udsyn under næsten alle forhold, på kort såvel som på lang afstand – og gummibeklædningen sikrer ekstra modstandsdygtighed. Kort sagt en robust følgesvend til naturobservationer, vandring, sportsbegivenheder, sightseeing, teater eller koncerter. Flerlagsbehandlet optik og fortrinligt og præcist fokus hjælper dig med at få alle detaljerne med. Længere øjenafstand gør det behageligt at anvende kikkerten i længere tid ad gangen selv med briller. Inklusive taske, halsrem, linsebeskytter. Størrelse: 180 mm x 55 mm x 145 mm (B x H x D), vægt: 727 g.",
      img: "scope.png"
    },
    {
      id: uuidv4(),
      title: "Outpack vandtæt rygsæk",
      old_price: "220,00",
      description:
        "Få din helt egen uopslidelig makker til cykelturen, vandreturen eller sejlturen. Den robuste rygsæk fra Outpack er 100 % vandtæt og holder dine værdigenstande tørre i al slags vejr. Selv hvis uheldet er ude, og du taber rygsækken i en brusende flod, kan du regne med, at indholdet ikke bliver vådt. Tasken er fremstillet i kraftigt PVC-materiale og samlet med ekstra kraftige svejsninger for en perfekt tætning. Rullelukningen i toppen gør det nemt for dig at komme ind til dine værdisager, men holder samtidig vand ude. På grund af rygsækkens vandtætte materiale er den særdeles velegnet til eksempelvis elektronik. På fronten af tasken finder du en smart holder, du kan bruge til at fastspænde fx en hjelm eller en sovepose. Detaljer: Kapacitet: 20 liter Dimensioner: 63 x 27 x 21 cm 100% vandtæt hovedrum Kraftige svejsede sømme. Holdbar og let at rengøre. Vandsøjletryk 8.000 mm",
      img: "bag.png"
    },
    {
      id: uuidv4(),
      title: "Vinyl Tech Bluetooth",
      old_price: "399,00",
      description:
        "Ren trådløs lyd via Bluetooth 4.2. Behagelige at have på i mange timer. Nemme at have med på farten. Lækker trådløs on-ear hovedtelefon med klar og detaljerig lyd, så du kan nyde din musik, podcast eller lydbog i fred og ro. Bluetooth 4.2 giver dig den bedst mulige trådløse lyd. Sættet har ørepuder i blødt skum og kan sidde på hovedet i mange timer ad gangen uden at genere. Løber batteriet tør for strøm, kan du tilslutte det medfølgende kabel og lytte videre. Med den indbyggede mikrofon besvarer du let opkald fra din mobiltelefon. Hovedtelefonerne kan klappes helt sammen i den medfølgende stofpose, så de fylder så lidt som muligt i din taske. Et sæt solide hovedtelefoner med en kraftfuld lyd, som leverer soundtracket til din dag.",
      img: "headphones.png"
    },
    {
      id: uuidv4(),
      title: "Sonitum højttaler",
      old_price: "299,00",
      description:
        "Trådløs Bluetooth Højttaler. Elegant trådløs Bluetooth-højttaler, så du kan nyde din musik og lyd i haven, på stranden, i båden, på campingturen, hos vennerne, eller hvor du måtte være. Via Bluetooth parrer du nemt din telefon eller tablet med højttaleren. Det elegante design sikrer en overraskende skarp og fyldig lyd med en batteritid helt op til 6 timer. Bluetooth-højttaleren til dig, der vil have lyd og design i god kvalitet.",
      img: "speaker.png"
    },
    {
      id: uuidv4(),
      title: "Elementum knivsæt",
      old_price: "499,00",
      description:
        "Elementerne mødes i denne unikke glasblæste knivserie, som perfekt kombinerer funktion og ergonomi i et futuristisk flot design. Knivene er overfladebehandlet gennem glasblæsning, hvor små glasperler ”blæses” udover kvalitetsstålet og giver hele kniven en smuk, mat overflade, som er nem at holde ren. Du får både en stor kokkekniv til kødudskæring og filetering, og en Santoku chopper – perfekt til at hakke og snitte grøntsager. Begge knive måler 29 cm i fuld længde og er fremstillet i rustfrit stål. Forkæl dit køkken med et flot, nyt sæt knive til mange timers madlavning.",
      img: "knives.png"
    },
    {
      id: uuidv4(),
      title: "HYBRID dronecar",
      old_price: "499,00",
      description:
        "Den nye HYBRID Dronecar er en ret fantastisk lille sag. Dronen kombinerer flere fede features med et stramt og flot design. Den smarte dobbeltfunktion gør den lille drone utroligt alsidig. Den kan nemlig både køre på jorden og flyve let og elegant igennem luften. Quadcopter-strukturen med de fire propeller gør dronen mere fleksibel og smidig, når den flyver, og de fire hjul gør den hurtig og manøvredygtig på jorden. Derudover er den udstyret med en effektiv lygte foran, så den også kan flyve og køre om aftenen eller i mørke omgivelser. Så hvis du er ude efter en smart drone, som både er et fjernstyret køretøj og en flyvende drone på én gang, så er HYBRID Dronecar det perfekte valg. ",
      img: "drone.png"
    },
    {
      id: uuidv4(),
      title: "Stone powerbank",
      old_price: "299,00",
      description:
        "Den smarte Stone powerbank fylder ikke meget, hvilket gør den perfekt til at have med i lommen når du skal på stranden, til festival eller blot har brug for ekstra strøm i en travl hverdag. Stone powerbank er udstyret med to strømudgange, hvor den ene udgang passer perfekt til at oplade din iPhone og den anden passer til højtalere, tablets, kameraer eller lignende. For at benytte powerbanken stikker du blot din enheds USB kabel ind i powerbanken, og efterfølgende tilslutter din enhed. Den store kapacitet på 6000 mAh gør at du altid vil have to hele opladninger til din telefon med på farten og ved hjælp af LED-indikatoren, kan du løbende, se hvor meget strøm du har tilbage. Medfølger 1 stk. Stone powerbank, 1 stk. USB-kabel til opladning af powerbank",
      img: "powerbank.png"
    }
  ];
}

//Display the gifts
function displayGifts() {
  giftsArray.forEach(gift => {
    let clone = giftTemplate.cloneNode(true);
    clone.firstElementChild.dataset.id = gift.id;
    clone.querySelector("h4").textContent = gift.title;
    clone.querySelector(".image img").setAttribute("src", imgPath + gift.img);
    clone.querySelector(".reg-price p").textContent = gift.old_price + " kr.";
    giftsContainer.appendChild(clone);
  });

  giftsDOM = document.querySelectorAll(".gift");
}

//Create ID by UUID standards
function uuidv4() {
  let d = new Date().getTime();
  if (
    typeof performance !== "undefined" &&
    typeof performance.now === "function"
  ) {
    d += performance.now(); //use high-precision timer if available
  }
  let id = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function(c) {
    var r = (d + Math.random() * 16) % 16 | 0;
    d = Math.floor(d / 16);
    return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
  });
  return id;
}

function passWord() {
  var testV = 1;
  var pass1 = prompt("Please Enter Your Password", " ");
  while (testV < 3) {
    if (!pass1) history.go(-1);
    if (pass1.toLowerCase() == "frontend2018") {
      alert("Welcome!");
      window.open("protectpage.html");
      break;
    }
    testV += 1;
    var pass1 = prompt(
      "Access Denied - Password Incorrect, Please Try Again.",
      "Password"
    );
  }
  if ((pass1.toLowerCase() != "password") & (testV == 3)) history.go(-1);
  return " ";
}
