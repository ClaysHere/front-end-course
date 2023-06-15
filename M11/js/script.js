const radioButtons = document.querySelectorAll('input[type="radio"]');
const filter = document.querySelector("#filter");
const inputYear = document.querySelector("#tahun");
const field = document.querySelector("#field");

const books = [
  {
    title: "Classical Mythology",
    author: "Mark P. O. Morford",
    publish: "Oxford University Press",
    year: "2002",
  },
  {
    title: "Rules of the Wild",
    author: "Francesca Marciano",
    publish: "Random House Inc",
    year: "1998",
  },
  {
    title: "Tage der Unschuld",
    author: "Richard North Patterson",
    publish: "Goldmann",
    year: "2000",
  },
  {
    title: "The Hellfire Club",
    author: "Peter Straub",
    publish: "Random House Inc",
    year: "1996",
  },
  {
    title: "The Night Listener",
    author: "Armistead Maupin",
    publish: "HarperCollins Publishers",
    year: "2000",
  },
  {
    title: "Night Tales",
    author: "Nora Roberts",
    publish: "Silhouette",
    year: "2000",
  },
];

let activeFilter = "title"; // Filter default saat halaman pertama kali dimuat

radioButtons.forEach((radio) => {
  radio.addEventListener("click", () => {
    // Nonaktifkan radio sebelumnya yang aktif
    radioButtons.forEach((otherRadio) => {
      if (otherRadio !== radio && otherRadio.checked) {
        otherRadio.checked = false;
      }
    });

    activeFilter = radio.id; // Mengubah filter aktif berdasarkan radio button yang dipilih
    filterBooks();
  });
});

const createBookCard = (book) => {
  const card = document.createElement("div");
  card.classList.add(
    "flex",
    "flex-col",
    "items-center",
    "p-4",
    "justify-center",
    "w-[31rem]",
    "border",
    "border-slate-300",
    "rounded-lg"
  );

  const elements = [
    {
      tag: "h1",
      className: "font-semibold text-2xl mb-2",
      textContent: book.title,
    },
    {
      tag: "h2",
      className: "text-xl mb-4 text-slate-600",
      textContent: book.author,
    },
    {
      tag: "h2",
      className: "text-lg text-slate-500",
      textContent: `${book.publish} ${book.year}`,
    },
  ];

  elements.forEach(({ tag, className, textContent }) => {
    const elementNode = document.createElement(tag);
    elementNode.className = className;
    elementNode.textContent = textContent;
    card.appendChild(elementNode);
  });

  return card;
};

const filterBooks = () => {
  const searchText = filter.value.toLowerCase();
  const searchYear = inputYear.value;

  const filteredBooks = books.filter((book) => {
    const bookTitle = book.title.toLowerCase();
    const bookYear = book.year.toLowerCase();

    if (searchText.trim() === "") {
      return true; // Tampilkan semua buku jika input kosong
    }

    if (activeFilter === "year") {
      return bookTitle.includes(searchText) && bookYear.includes(searchYear);
    }

    const filterValue = book[activeFilter].toLowerCase();
    return filterValue.includes(searchText);
  });

  field.innerHTML = "";
  filteredBooks.forEach((book) => {
    field.appendChild(createBookCard(book));
  });
};

books.forEach((book) => {
  field.appendChild(createBookCard(book));
});

filter.addEventListener("input", filterBooks);
inputYear.addEventListener("input", filterBooks);
