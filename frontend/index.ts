/*document.addEventListener("DOMContentLoaded", () => {
  const addNote = document.getElementById("add") as HTMLFormElement;

  addNote.addEventListener("click", async () => {
    const note = document.getElementById("task") as HTMLInputElement;

    const noteError = document.getElementById("noteError") as HTMLSpanElement;

    noteError.textContent = "";

    if (note.value.trim() === "") {
      noteError.textContent = "please input a note";
      return;
    }
    

    const newNote = {
      content: note.value,
    };

    const promise = new Promise<{ error: string; message: string }>(
      (resolve, reject) => {
        fetch("http://localhost:3300/note", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newNote),
        })
          .then((res) => res.json())
          .then((data) => {
            if ("message" in data) {
              noteError.textContent = data.message;
              setTimeout(() => {
                resolve(data);
              }, 3000);
            } else if ("error" in data) {
              noteError.textContent = data.error;

              reject(data);
            }

            console.log(data);
          })
          .catch((error) => {
            console.log(error);
          });
      }
    
  });
  const displayNotes = () => {
    const noteList = document.getElementById("notes") as HTMLUListElement;
    const noteListItems = document.createElement("li");

    noteList.appendChild(noteListItems);
    const url = "http://localhost:3300/note";
    getData(url).then((data) => {
      if (data.error) {
        noteListItems.textContent = data.error;
      }
      if (data.message) {
        noteListItems.textContent = data.message;
      }
      data.map((item: any) => {
        const noteListItems = document.createElement("li");
        noteListItems.textContent = item.content;
        noteList.appendChild(noteListItems);
        // console.log(item);
        return item;
      });
    });
  };
  
 

  async function getData(url: string): Promise<any> {
    try {
      const response = await fetch(url);
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Failed to fetch data from ${url}`);
      }
    } catch (error) {
      console.error(error);
      throw error;
    }
  }
  displayNotes();
});*/
