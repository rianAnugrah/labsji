"use client"
import React, { useEffect, useState } from 'react'

export default function Quiz() {

    const questions = [
        {
            id: 0,
            label: "Question label 1",
            sublabel: "Question sublabel 1",
            answer: "",
            options: [
                {
                    option: "Introvert",
                    value: "i",
                },
                {
                    option: "Extrovert",
                    value: "e",
                },

            ]
        },
        {
            id: 1,

            label: "Question label 2",
            sublabel: "Question sublabel 2",
            answer: "",

            options: [
                {
                    option: "Introvert",
                    value: "i",
                },
                {
                    option: "Extrovert",
                    value: "e",
                },

            ]
        },
        {
            id: 2,

            label: "Question label 3",
            sublabel: "Question sublabel 3",
            answer: "",

            options: [
                {
                    option: "Introvert",
                    value: "i",
                },
                {
                    option: "Extrovert",
                    value: "e",
                },

            ]
        }
    ]
    const [answer, setAnswer] = useState(questions)
    const [personality, setPersonality] = useState("unpredicted")

    const [active, setActive] = useState(0)

    const handleNext = () => {
        setActive(prevActive => prevActive + 1)
    }

    const handlePrev = () => {
        setActive(prevActive => prevActive - 1)
    }

    const handleChoose = (id, opt) => {
        const temp = answer.map((q, i) => {

            return {
                id: q.id,
                label: q.label,
                sublabel: q.sublabel,
                answer: q.id === id ? opt : q.answer,
                options: q.options
            }
        })

        setAnswer(temp)

        if (active === questions.length - 1) {
            calculatePersonality();
        } else {

            handleNext()
        }

    }


    const calculatePersonality = () => {
        let e = 0
        let i = 0

        answer.forEach(ans => {
            if (ans.answer.toLowerCase() === "i") {
                i = i + 1
            }

            if (ans.answer.toLowerCase() === "e") {
                e = e + 1
            }

        });

        if (e > i) {
            setPersonality("Extrovert")
        } else {
            setPersonality("Introvert")
        }
    }

    useEffect(() => { console.table(answer) }, [answer])

    return (
        <div>
            <h2>Your are {personality}</h2>

            Quiz number {active + 1}

            <p>{questions[active].label}</p>
            <p>{questions[active].sublabel}</p>

            <div className='flex gap-2 mb-5'>
                {
                    questions[active].options.map((opt, i) => {
                        return <button onClick={() => handleChoose(active, opt.value)} className='border p-4 bg-zinc-200'>{opt.option}</button>
                    }

                    )
                }
            </div>

            {active !== 0 &&

                <button onClick={handlePrev} className='border p-2'>Prev</button>
            }

            {
                active !== questions.length - 1 &&

                <button onClick={handleNext} className='border p-2'>Next</button>
            }

        </div>
    )
}
