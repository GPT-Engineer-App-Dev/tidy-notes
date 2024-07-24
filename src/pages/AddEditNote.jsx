import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const AddEditNote = ({ notes, setNotes }) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    if (id) {
      const note = notes.find((n) => n.id === parseInt(id));
      if (note) {
        setTitle(note.title);
        setContent(note.content);
      }
    }
  }, [id, notes]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (id) {
      setNotes(notes.map((note) => 
        note.id === parseInt(id) ? { ...note, title, content } : note
      ));
    } else {
      setNotes([...notes, { id: Date.now(), title, content }]);
    }
    navigate("/");
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-6">{id ? "Edit Note" : "Add Note"}</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Note Title"
          required
        />
        <Textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Note Content"
          required
          className="min-h-[200px]"
        />
        <div className="flex justify-end space-x-2">
          <Button type="button" variant="outline" onClick={() => navigate("/")}>
            Cancel
          </Button>
          <Button type="submit">Save</Button>
        </div>
      </form>
    </div>
  );
};

export default AddEditNote;