"use client";

import useFileConvertURI from "@/hooks/useFileConvertURI";
export default function NewBookPage() {
  const fileConvert = useFileConvertURI();
  function onAddBook(e) {
    e.preventDefault();

    const formData = new FormData(e.currentTarget);

    // console.log("formData:", formData.get("bookCover"));
  }
  function onFileUpload(e) {
    fileConvert.convertFile(e.currentTarget.files[0]);
  }

  console.log(fileConvert);
  return (
    <main>
      <h1>New Book</h1>
      <form onSubmit={onAddBook}>
        <div>
          <label htmlFor="bookName">Name</label>
          <input
            type="text"
            id="bookName"
            name="bookName"
            placeholder="Insert Name..."
          ></input>
        </div>
        <div>
          <label htmlFor="bookCover">Cover Image:</label>
          <input
            type="file"
            id="bookCover"
            name="bookCover"
            accept="image/*"
            onChange={onFileUpload}
          ></input>
          <div>
            <img src={fileConvert.dataURI} height={100}/>
          </div>
        </div>
        <div>
          <input type="submit" value="Add Book" disabled={fileConvert.loading}></input>
        </div>
      </form>
    </main>
  );
}
