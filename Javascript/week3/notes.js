const notes = [];
function saveNotes(content, id) {
    const note = { content: content, id: id }
    notes.push(note);
    return notes;
}
console.log(saveNotes("Do laundry", 1));
console.log(saveNotes("Do dishes", 2));
console.log(saveNotes("Prepare food", 4));

function getNote(id) {
    for (let note of notes) {
        if (note.id == id)
            return notes;
    }
    return "note id not found";

}
const firstNote = getNote(3);
console.log(firstNote);
function logOutNotesFormatted() {
    for (let note of notes) {
        console.log("The note with id:" + note.id + " , has the following note text:" + note.content);
    }

}
logOutNotesFormatted();