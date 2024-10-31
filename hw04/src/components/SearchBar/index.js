"use client";
import { useState, useEffect } from "react";

export default function SearchBar({ onSearch }) {
  const [eggGroups, setEggGroups] = useState([]);
  const [habitats, setHabitats] = useState([]);
  const [filters, setFilters] = useState({
    name: "",
    habitat: "",
    eggGroup: "",
  });

  useEffect(() => {
    const fetchDropdownData = async () => {
      try {
        const eggGroupResponse = await fetch(
          `https://pokeapi.co/api/v2/egg-group/`
        );
        const habitatResponse = await fetch(
          `https://pokeapi.co/api/v2/pokemon-habitat/`
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

  // Update filter values when inputs change
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
        name="name"
        placeholder="Name"
        value={filters.name}
        onChange={handleFilterChange}
      />
      <select
        name="habitat"
        value={filters.habitat}
        onChange={handleFilterChange}
      >
        <option value="">Select Habitat</option>
        {habitats.map((hab) => (
          <option key={hab} value={hab}>
            {hab}
          </option>
        ))}
      </select>
      <select
        name="eggGroup"
        value={filters.eggGroup}
        onChange={handleFilterChange}
      >
        <option value="">Select Egg Group</option>
        {eggGroups.map((eg) => (
          <option key={eg} value={eg}>
            {eg}
          </option>
        ))}
      </select>
      <button onClick={() => onSearch(filters)}>Search</button>
    </div>
  );
}
