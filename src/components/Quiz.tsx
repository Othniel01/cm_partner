"use client";

import { useState } from "react";
import {
    quizData,
    categoryMeta,
    categoryOrder,
    type Answer,
    type Result,
    type CategoryKey,
} from "@/data/questions";

type SavedResult = Result & { categoryKey: CategoryKey; categoryName: string };

function firstQuestionIdOf(key: CategoryKey): string {
    const ids = Object.keys(quizData[key].questions);
    if (ids.length === 0) {
        throw new Error(`Category ${key} has no questions`);
    }
    return ids[0];
}

export default function Quiz() {
    const [categoryIndex, setCategoryIndex] = useState(0);
    const [questionId, setQuestionId] = useState<string>(() => firstQuestionIdOf(categoryOrder[0]));
    const [results, setResults] = useState<SavedResult[]>([]);
    const [finished, setFinished] = useState(false);

    const totalCategories = categoryOrder.length;
    const currentCategoryKey = categoryOrder[categoryIndex];
    const currentCategory = quizData[currentCategoryKey];
    const currentQuestion = currentCategory.questions[questionId];
    const meta = categoryMeta[currentCategoryKey];
    const progressStep = categoryIndex + 1;
    const progressPercent = Math.round((progressStep / totalCategories) * 100);

    function reset() {
        setCategoryIndex(0);
        setQuestionId(firstQuestionIdOf(categoryOrder[0]));
        setResults([]);
        setFinished(false);
    }

    function handleAnswer(answer: Answer) {
        const nextResults: SavedResult[] = answer.result
            ? [
                  ...results,
                  {
                      ...answer.result,
                      categoryKey: currentCategoryKey,
                      categoryName: currentCategory.name,
                  },
              ]
            : results;

        if (answer.result) {
            setResults(nextResults);
        }

        if (answer.end) {
            setFinished(true);
            return;
        }

        if (answer.nextSection) {
            const nextIndex = categoryIndex + 1;
            if (nextIndex >= totalCategories) {
                setFinished(true);
                return;
            }
            setCategoryIndex(nextIndex);
            setQuestionId(firstQuestionIdOf(categoryOrder[nextIndex]));
            return;
        }

        if (answer.next) {
            setQuestionId(answer.next);
        }
    }

    if (finished) {
        return <QuizResults results={results} onRestart={reset} />;
    }

    return (
        <div className="max-w-7xl mt-20 flex items-center justify-center mx-auto p-4 md:p-8">
            <div className="flex flex-col justify-center">
                <div className="flex items-center gap-2">
                    {categoryOrder.map((key, i) => {
                        const m = categoryMeta[key];
                        const isActive = i === categoryIndex;
                        const isCompleted = i < categoryIndex;
                        return (
                            <div
                                key={key}
                                className={
                                    isActive
                                        ? "border-2 border-secondary text-xs text-secondary rounded-2xl font-semibold flex items-center justify-center bg-ring px-5 py-2"
                                        : "border border-[#E2E8F0] text-xs text-[#94A3B8] rounded-2xl font-semibold flex items-center px-5 py-2"
                                }
                            >
                                {m.icon} {i + 1} {m.label}
                                {isCompleted && " ✓"}
                            </div>
                        );
                    })}
                </div>

                <div className="mt-10 text-xs font-semibold text-[#94A3B8] flex items-center justify-between">
                    <p>
                        Dimension {progressStep} of {totalCategories}
                    </p>
                    <p>{progressPercent}%</p>
                </div>
                <div className="mt-3 h-1.5 rounded-2xl bg-[#E2E8F0]">
                    <div
                        className="h-full bg-secondary rounded-l-2xl transition-all"
                        style={{ width: `${progressPercent}%` }}
                    />
                </div>

                <div className="w-[700px] mt-4 border border-[#E2E8F0] rounded-2xl p-10">
                    <div
                        className="text-xs uppercase rounded-2xl font-bold w-fit px-5 py-2"
                        style={{ color: meta.color, backgroundColor: meta.bg }}
                    >
                        {meta.icon} {meta.label}
                    </div>
                    <h1 className="text-[#1B1E4B] text-xl font-bold mt-4">
                        {currentQuestion.question}
                    </h1>
                    {currentQuestion.bullets && currentQuestion.bullets.length > 0 && (
                        <ul className="list-disc list-inside marker:text-secondary border bg-[#F8F9FC] rounded-lg border-[#E2E8F0] p-4 text-[#475569] text-sm mt-3 space-y-1">
                            {currentQuestion.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>
                    )}
                    <div className="mt-5 flex flex-wrap gap-3">
                        {currentQuestion.answers.map((a, i) => (
                            <button
                                key={i}
                                onClick={() => handleAnswer(a)}
                                className="bg-[#F8F9FC] text-[#1B1E4B] font-semibold border rounded-md border-[#E2E8F0] flex-1 min-w-[260px] px-5 py-4 hover:border-secondary transition text-left"
                            >
                                {a.label}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

function QuizResults({ results, onRestart }: { results: SavedResult[]; onRestart: () => void }) {
    return (
        <div className="max-w-7xl mt-20 mx-auto p-4 md:p-8">
            <h1 className="text-[#1B1E4B] text-3xl font-bold">Uw resultaten</h1>
            <p className="text-[#475569] mt-2">
                Een overzicht van uw volwassenheidsniveau per dimensie.
            </p>
            <div className="mt-6 grid gap-4">
                {results.map((r) => {
                    const m = categoryMeta[r.categoryKey];
                    return (
                        <div
                            key={r.categoryKey}
                            className="border border-[#E2E8F0] rounded-2xl p-6"
                        >
                            <div
                                className="text-xs uppercase rounded-2xl font-bold w-fit px-5 py-2"
                                style={{ color: m.color, backgroundColor: m.bg }}
                            >
                                {m.icon} {m.label}
                            </div>
                            <h2 className="text-[#1B1E4B] text-xl font-bold mt-3">{r.level}</h2>
                            <p className="text-[#475569] mt-2">{r.description}</p>
                        </div>
                    );
                })}
            </div>
            <button
                onClick={onRestart}
                className="mt-6 bg-secondary text-white font-semibold px-6 py-3 rounded-md"
            >
                Opnieuw starten
            </button>
        </div>
    );
}
