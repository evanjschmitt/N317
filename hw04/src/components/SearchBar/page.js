"use client";
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [eggGroup, setEggGroup] = useState([]);
  const [habitat, setHabitat] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    habitat: "",
    eggGroup: "",
  });

  // Fetch egg groups and habitats on load
  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const eggGroupResponse = await fetch(
          `https://pokeapi.co/api/v2/egg-group/`
        );
        const habitatResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-habitats/`
        );

        if (eggGroupResponse.ok && habitatResponse.ok) {
          const eggGroupData = await eggGroupResponse.json();
          const habitatData = await habitatResponse.json();

          // Store the lists of egg groups and habitats
          setEggGroups(eggGroupData.results.map((eg) => eg.name));
          setHabitats(habitatData.results.map((hab) => hab.name));
        }
      } catch (error) {
        console.error("Error fetching egg groups and habitats:", error);
      }
    };

    fetchDropdownData();
  }, []);

  // Handle dropdown change
  const handleFilterChange = (e) => {
    setFilters({
      ...filters,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <select value={habitat} onChange={(e) => setHabitat(e.target.value)}>
        {/* Add habitat options here */}
      </select>
      <select value={eggGroup} onChange={(e) => setEggGroup(e.target.value)}>
        {/* Add egg group options here */}
      </select>
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}
