const categorEl = document.querySelectorAll(".item");
console.log(`Number of categories: ${categorEl.length}`);

const items = [...categorEl];
items.forEach((elem) => {
    console.log(`Category:`, elem.firstElementChild.textContent);
    console.log(`Elements:`, elem.lastElementChild.childElementCount);
});





