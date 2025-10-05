import React from "react";
import Textarea from "../ui/Textarea";
import Button from "../ui/Button";
import { useLocation } from "react-router-dom";

const Contribute = () => {
    const {state} = useLocation();
    console.log(state);
  return (
    <div className="min-h-[calc(100vh-92px)] flex items-center justify-center bg-[#23272f] text-gray-100 px-4">
      <div className="bg-[#2c313a]/90 backdrop-blur-sm p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-3xl font-bold text-center text-[#61dafb] mb-2">
            {state ? `Hello ${state.name}` : 'Contribute to Our Project'}
        </h1>
        <p className="text-[#61dafb] text-center mb-4">
          Contribute & Report Issues
        </p>

        <p className="text-center text-gray-400 mb-6">
          Found a bug or have a suggestion? Share it with us below.
        </p>

        <form className="space-y-6">
          <Textarea
            label="Your message"
            id="bugReport"
            placeholder="Describe the issue or suggestion..."
            rows={5}
          />
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </div>
    </div>
  );
};

export default Contribute;
