const as_1 = document.getElementById("article-1-section");
const as_2 = document.getElementById("article-2-section");
const as_3 = document.getElementById("article-3-section");
const as_4 = document.getElementById("article-4-section");
const as_5 = document.getElementById("article-5-section");

const as_6 = document.getElementById("article-6-section");
const as_7 = document.getElementById("article-7-section");
const as_8 = document.getElementById("article-8-section");
const as_9 = document.getElementById("article-9-section");
const as_10 = document.getElementById("article-10-section");
const as_11 = document.getElementById("article-11-section");

const as_12 = document.getElementById("article-12-section");
const as_13 = document.getElementById("article-13-section");
const as_14 = document.getElementById("article-14-section");

const as_15 = document.getElementById("article-15-section");
const as_16 = document.getElementById("article-16-section");

function show_me(section) {
  let section_array = [
    as_1,
    as_2,
    as_3,
    as_4,
    as_5,
    as_6,
    as_7,
    as_8,
    as_9,
    as_10,
    as_11,
    as_12,
    as_13,
    as_14,
    as_15,
    as_16,
  ];
  for (i = 0; i < section_array.length; i++) {
    if (!section_array[i].classList.contains("hidden")) {
      section_array[i].classList.add("hidden");
    }
    if (
      (section_array[i] == section) &
      section_array[i].classList.contains("hidden")
    ) {
      section_array[i].classList.remove("hidden");
    }
  }
}
