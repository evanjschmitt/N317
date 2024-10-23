"use client";
import { useState } from "react";
import useAppState from "../../hooks/useAppState.js"

export default function About() {
    const [newPersonForm, setNewPersoForm] = useState({ name: ""});

    function changeFormField(e) {
        setNewPersoForm({
            ...newPersonForm, [e.currentTarget.name]: e.currentTarget.value,
        });
    }

    function submitNewPerson(e) {
        e.preventDefault();
        console.log(newPersonForm)
        appState.addPerson(newPersonForm);
        setNewPersoForm({name: "", title: ""})
    }


    const appState = useAppState();
    // console.log(appState);

    const peopleJsx = appState.people.map(function (peep, peepIndex) {
        return (
            <li key={`${peep.name}-${peep.title}`}>
                {peep.name} (<i>{peep.title}</i>)
            </li>
        );
    })


    return (
        <main>
            <h1>About</h1>
            <form onSubmit={submitNewPerson}>
                <div>
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={newPersonForm.name} onChange={changeFormField} placeholder="Name..."></input>
                </div>
                <div>
                    <label htmlFor="title">Title</label>
                    <input id="title" name="title" value={newPersonForm.title} onChange={changeFormField} placeholder="Title..."></input>
                </div>
                <div>
                    <input type="submit" value="Add Person"></input>
                </div>
            </form>
            <ul>{peopleJsx}</ul>
        </main>
    )
}