"use client"
import React, { useEffect, useState } from 'react'
import questionsExtrovertIntrovert from './q-extrovert-introvert'

export default function PersonalityTest() {

    const questions = questionsExtrovertIntrovert;
    const [answer, setAnswer] = useState(questions)
    const [personality, setPersonality] = useState("")

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
        <div className='w-full h-full p-10 flex '>
            <div className='w-20 h-full  flex items-center justify-center'>
                {active !== 0 &&

                    <button onClick={handlePrev} className='border p-2 bg-red-400 text-white'>Prev</button>
                }
            </div>

            <div className='w-full px-4'>

                <div className='block w-full h-10 text-xl font-bold bg-green-200 leading-[40px] text-center text-green-700'>

                    {personality && active === questions.length - 1 && <h2>Your are {personality}!</h2>}
                </div>

                Quiz number {active + 1}

                <div className='w-full flex items-center justify-center text-center h-40'>{questions[active].label}</div>
                {/* <p>{questions[active].sublabel}</p> */}

                <div className='flex flex-col gap-2 mb-5'>
                    {
                        questions[active].options.map((opt, i) => {
                            return <button onClick={() => handleChoose(active, opt.value)} className={`${answer[active].answer === opt.value && `bg-green-500 text-white border-green-600 border`} rounded p-4 w-full bg-zinc-200 hover:bg-green-300`}>{opt.option}</button>
                        }

                        )
                    }
                </div>

            </div>


            <div className='w-20 h-full  flex items-center justify-center'>
                {
                    active !== questions.length - 1 && answer[active].answer &&

                    <button onClick={handleNext} className='border p-2 bg-red-400 text-white'>Next</button>
                }
            </div>



        </div>
    )
}
