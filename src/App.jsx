import { useState } from "react";
import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Layout from "./layouts/clean";
import Index from "./pages/Index";
import AddEditNote from "./pages/AddEditNote";

const queryClient = new QueryClient();

const App = () => {
  const [notes, setNotes] = useState([
    { id: 1, title: "Welcome Note", content: "Welcome to your new Notes App!" },
  ]);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Index notes={notes} setNotes={setNotes} />} />
              <Route path="add" element={<AddEditNote notes={notes} setNotes={setNotes} />} />
              <Route path="edit/:id" element={<AddEditNote notes={notes} setNotes={setNotes} />} />
            </Route>
          </Routes>
        </Router>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;