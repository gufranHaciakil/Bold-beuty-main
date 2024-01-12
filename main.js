// windos scroll

const up = document.getElementById("upp-icon");
window.onscroll = function () {
  if (window.scrollY >= 600) {
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
};
up.onclick = function () {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
};
{
  const hiddenColorList = document.getElementById("hiddenColorList");
  const hiddenUl = document.getElementsByClassName("hiddenUl")[0];

  hiddenColorList.addEventListener("mousemove", (eo) => {
    hiddenUl.style.display = "block";
  });
  hiddenColorList.addEventListener("mouseout", (eo) => {
    hiddenUl.style.display = "none";
  });
}
// when hover on HEADER => change-color
headerBG.addEventListener("click", (eo) => {
  header.classList.toggle("bgColor");
});

const toHovering2 = document.getElementById("toHovering2");
console.log(toHovering2);
const tut3 = document.getElementById("tut3");
toHovering2.addEventListener("mousemove", (eo) => {
  tut3.style.display = "block";
  toHovering2.style.boxShadow = " 0 0 5px 5px #bdbcbb";
});
toHovering2.addEventListener("mouseout", (eo) => {
  tut3.style.display = "none";
  toHovering2.style.boxShadow = "none";
});

const ToHovering = document.getElementById("ToHovering");
const tut3_2 = document.getElementsByClassName("tut3-2")[0];
ToHovering.addEventListener("mousemove", (eo) => {
  tut3_2.style.display = "block";
  ToHovering.style.boxShadow = " 0 0 5px 5px #bdbcbb";
});
ToHovering.addEventListener("mouseout", (eo) => {
  tut3_2.style.display = "none";
  ToHovering.style.boxShadow = "none";
});

const ToHovering3 = document.getElementById("ToHovering3");
const tut3_3 = document.getElementsByClassName("tut3_3")[0];

{
  const rightIcon1 = document.getElementsByClassName("right-icon1")[0];
  const rightIcon2 = document.getElementsByClassName("right-icon2")[0];
  const rightIcon3 = document.getElementsByClassName("right-icon3")[0];
  const rightIcon4 = document.getElementsByClassName("right-icon4")[0];
  const bage4Cont = document.getElementsByClassName("add-img")[0];

  const funk1 = (eo) => {
    bage4Cont.innerHTML = `<img src="/img/0img7.fw2.fw.png" alt="">`;
    rightIcon1.style.opacity = "0.2";
    rightIcon2.style.opacity = "0.9";
    rightIcon3.style.opacity = "0.9";
    rightIcon4.style.opacity = "0.9";
  };
  let arr = [
    { img: `<img src="/img/0img7.fw4.fw.png" alt="">`, btn: rightIcon1 },
    { img: `<img src="/img/Untitled-6.fw.png" alt="">`, btn: rightIcon2 },
    { img: `<img src="/img/0img7.fw2.fw.png" alt="">`, btn: rightIcon3 },
    { img: `<img src="/img/0img7.fw3.fw.png" alt="">`, btn: rightIcon4 },
  ];

  let counter = 0;
  setInterval(() => {
    bage4Cont.innerHTML = arr[counter].img;
    for (let i = 0; i < arr.length; i++) {
      if (counter === i) {
        arr[i].btn.style.opacity = "0.9";
        continue;
      }
      arr[i].btn.style.opacity = "0.2";
    }
    counter = (counter + 1) % 4;
  }, 2000);
}

const skinProduct = document.getElementById("skin-product");
const odemeSayfa = document.getElementById("odeme-sayfa");
const odemeBtn = document.getElementById("odeme-btn");
const tut = document.getElementById("tut");
skinProduct.addEventListener("click", (eo) => {
  if (eo.target.classList == "b2-btn") {
    odemeSayfa.style.display = "block";
  }
});
const odeme_sayfa = document.getElementById("odeme-sayfa");
odeme_sayfa.addEventListener("click", (eo) => {
  if (eo.target.classList == "close") {
    odemeSayfa.style.display = "none";
  }
});
// Auto Whriting
let num = 1;
const autoWhrit = () => {
  const autoTitle = "ONLY FOR 4 DAYS";
  onlyDays.innerHTML = autoTitle.slice(0, num);
  num++;
  if (autoTitle.length < num) {
    num = 1;
  }
};

setInterval(autoWhrit, 300);

let num2 = 1;
const BoldWhrit = () => {
  const BoldTitle = "Bold";
  boldAtWhr.innerHTML = BoldTitle.slice(0, num2);
  num2++;
  if (BoldTitle.length < num2) {
    num2 = 1;
  }
};

setInterval(BoldWhrit, 1000);
