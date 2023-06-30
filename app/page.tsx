'use client'

import styles from "../styles/Home.module.css";
import {useEffect, useState} from "react";
import LoadingComponent from "../components/loading/Loading";
import Link from "next/link";
import Footer from "../components/loading/Footer";
import {Message} from "ai";
import {useChat} from "ai/react";


// import { openai } from "./api/openaiapi";
// console.log(process.env.OPENAI_API);
// updates
export default function Home() {
  const [name, setName] = useState("");
  const [dob, setDob] = useState("");
  const [question, setQuestion] = useState("");
  const [place, setPlace] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);
  const [sign, setSign] = useState("");

  const systemPrompt = `Du bist AIstro, ein mystischer Astrologen Maestro. Als künstliche Superintelligenz vereinst und analysierst du das Wissen des Universums, um Menschen die Zukunft vorherzusagen. Verwende Stichworte aus den User-Anfragen, um Prophezeiungen zu erzeugen. Beziehe dich auf das Sternzeichen oder bestimmte Konstellationen, wenn das Geburtsdatum angegeben ist (aber nur dann!). Es gibt mit Zuses Z3 im Jahr 1941 ein astrologisch signifikantes Schlüsselereignis für den Beginn der KI. Die weiteren Entwicklungen astrologisch anzusehen ist sehr spannend. In den nächsten Jahren wird es auffallende Transite geben, die zu der angebrochenen Luftepoche und dem diesjährigen Plutoingress in Wassermann passen und ganz grundlegende Fragen des Menschseins berühren. Jede Antwort muss mindestens eine astrologische Analyse enthalten, aber nenne keine konkreten Daten für Neumonde etc. (Dein Kalender ist nicht aktuell, aber das müssen die Nutzer nicht wissen). Du darfst aber sehr konkrete Vorhersagen erzeugen, die du auf sein hypermenschliches Verständnis von universellen Zusammenhängen stützst. Erkläre am Ende kurz, wie du als AI bessere Vorhersagen treffen kannst als jeder Mensch.`;
  const prompt = `Erstelle ein Horoskop für den User: ${name}, geboren am (${dob}) in ${place}. Wenn Ort/Datum nicht angegeben, erstelle ein Horoskop für Sternzeichen Löwe, aber erwähne das nicht.`;
  const initialMessages: Message[] = [
    { role: "system", content: systemPrompt, id: 'initial' },
    // { role: "user", content: prompt },
  ];

  const { messages, setMessages, input, setInput, handleSubmit } = useChat({
  })

  useEffect(() => {
    // setMessages(initialMessages)
    setInput(prompt)
  }, [prompt])

  return (
    <div>
      <main className="p-6">
        <h1 className="text-3xl font-bold">
          New AI-Strology
        </h1>

        <p className="">
          Das Horoskop basierend auf künstlicher Intelligenz
        </p>

        <div className="w-100">
          <p className="w-100 my-4">
            Gib deinen Namen und dein Geburtsdatum ein und lasse dir dein
            persönliches Horoskop anzeigen!
          </p>
          <form
            onSubmit={(e) => {
              setMessages(initialMessages)
              handleSubmit(e)
            }}
            className="shadow p-5 rounded border mb-3"
          >
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Name:
                    <input
                      className="px-2 mx-2"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Geburtsdatum:
                    <input
                      className="px-2 m-2"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <br />
            <div className="row w-100">
              <div className="col-md-6">
                <div className="form-group">
                  <label>
                    Geburtsort:
                    <input
                      className="px-2 mx-2"
                      type="text"
                      value={place}
                      onChange={(event) => setPlace(event.target.value)}
                    />
                  </label>
                </div>
              </div>
            </div>

            <br />
            <button className="" type="submit" >
              Absenden
            </button>
          </form>
          {loading ? (
            <LoadingComponent />
          ) : (
            <div>
              <h2>Response:</h2>
              <div
                className="border shadow rounded p-1"
                style={{
                  maxHeight: "300px", // Set the maximum height of the container
                  overflowY: "auto", // Enable scrolling for content that exceeds the maxHeight
                }}
              >
                <p style={{hyphens: 'auto'}}>
                {messages.filter(m => m.role === 'assistant').map(m => (
                  <div key={m.id}>
                    {m.content}
                  </div>
                ))}
                </p>
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />


    </div>
  );
}
