import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const Index = ({ notes, setNotes }) => {
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  };

  return (
    <div className="container mx-auto p-4">
      <header className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Notes App</h1>
        <Link to="/add">
          <Button>Add Note</Button>
        </Link>
      </header>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {notes.map((note) => (
          <Card key={note.id}>
            <CardHeader>
              <CardTitle>{note.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="line-clamp-3">{note.content}</p>
            </CardContent>
            <CardFooter className="flex justify-end space-x-2">
              <Link to={`/edit/${note.id}`}>
                <Button variant="outline">Edit</Button>
              </Link>
              <Button variant="destructive" onClick={() => deleteNote(note.id)}>Delete</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Index;