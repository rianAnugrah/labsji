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

    const handleChoose = (id: any, opt: any) => {
        const temp = answer.map((q: any, i: any) => {

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
        <div className='w-2/3 h-full p-10 mx-auto flex'>
            <div className='w-20 h-full  flex items-center justify-center'>
                {active !== 0 &&

                    <button onClick={handlePrev} className='border p-2 rounded bg-zinc-100 text-white'> <svg className='rotate-180' width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg></button>
                }
            </div>

            <div className='w-full p-4 border rounded-xl bg-blue-50'>

                <div className={`block w-full h-10 text-xl font-bold bg-blue-50 leading-[40px] text-center `}>

                    {personality && active === questions.length - 1 && <h2 className='bg-blue-300 text-blue-700 rounded'>Your are {personality}!</h2>}
                </div>

                <p className='w-full my-4 text-center '>Quiz number {active + 1}</p>

                <div className='w-full flex items-center justify-center text-center h-40 font-bold text-lg'>{questions[active].label}</div>
                {/* <p>{questions[active].sublabel}</p> */}

                <div className='flex flex-col gap-2 mb-5'>
                    {
                        questions[active].options.map((opt: any, i: any) => {
                            return <button key={i} onClick={() => handleChoose(active, opt.value)} className={`${answer[active].answer === opt.value && `bg-green-500 text-white border-green-600 border`} rounded p-4 w-full bg-zinc-200 hover:bg-green-300`}>{opt.option}</button>
                        }

                        )
                    }
                </div>

            </div>


            <div className='w-20 h-full  flex items-center justify-center'>
                {
                    active !== questions.length - 1 && answer[active].answer &&

                    <button onClick={handleNext} className='border p-2 rounded bg-zinc-100 text-white'>
                        <svg width="24px" height="24px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M10 7L15 12L10 17" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                    </button>
                }
            </div>



        </div>
    )
}
