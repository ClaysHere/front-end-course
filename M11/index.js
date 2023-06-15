<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <script src="https://cdn.tailwindcss.com"></script>
    <title>Document</title>
  </head>
  <body>
    <div class="container mx-auto mb-4">
      <div class="font-bold text-6xl mb-4 text-teal-600">Catalog</div>
      <input
        class="w-full ring-1 ring-slate-800 rounded px-2 py-1"
        type="text"
        placeholder="Search"
        id="filter" />
    </div>
    <div class="container mx-auto mb-4">
      <input type="radio" name="title" id="title" />
      <label class="mr-2" for="title">Title</label>
      <input type="radio" name="author" id="author" />
      <label class="mr-2" for="author">Author</label>
      <input type="radio" name="publisher" id="publish" />
      <label class="mr-2" for="publish">Publisher</label>
      <input type="radio" name="t&y" id="year" />
      <label for="year">Title and Year</label>
      <input class="ring-1 ring-slate-800 rounded" type="text" id="tahun" />
    </div>
    <div class="container mx-auto flex flex-wrap gap-4" id="field"></div>
    <script src="./js/script.js"></script>
  </body>
</html>
