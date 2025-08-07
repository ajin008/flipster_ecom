import React from "react";
import { FaCheck, FaClipboardList, FaImages } from "react-icons/fa";

interface ProgressBarProps {
  currentStep: number;
  totalSteps: number; // Kept for potential future use, but not used in this design
  steps: { id: number; title: string }[];
}

// Define icons for each step for easy mapping
const stepIcons = [FaClipboardList, FaImages];

export default function ProgressBar({ currentStep, steps }: ProgressBarProps) {
  return (
    <div className="mb-12">
      <div className="flex w-full items-stretch gap-2">
        {steps.map((step, index) => {
          const isCompleted = step.id < currentStep;
          const isCurrent = step.id === currentStep;
          const IconComponent = stepIcons[index] || FaClipboardList;

          return (
            <div
              key={step.id}
              className={`
                flex-1 p-4 rounded-xl border transition-all duration-500 ease-in-out
                flex items-center gap-4
                ${
                  isCurrent
                    ? "bg-gaming-pink/10 border-gaming-pink shadow-pink-md scale-105"
                    : ""
                }
                ${
                  isCompleted
                    ? "bg-gaming-purple/20 border-gaming-purple/50"
                    : ""
                }
                ${
                  !isCompleted && !isCurrent
                    ? "bg-gaming-searchBg border-transparent"
                    : ""
                }
              `}
            >
              {/* Icon Circle */}
              <div
                className={`
                  w-10 h-10 rounded-full flex-shrink-0 flex items-center justify-center transition-colors duration-300
                  ${isCurrent ? "bg-gaming-pink text-white" : ""}
                  ${isCompleted ? "bg-gaming-purple text-white" : ""}
                  ${
                    !isCompleted && !isCurrent
                      ? "bg-gaming-cardBg text-gaming-textSecondary"
                      : ""
                  }
                `}
              >
                {isCompleted ? (
                  <FaCheck className="w-5 h-5" />
                ) : (
                  <IconComponent className="w-5 h-5" />
                )}
              </div>

              {/* Text Content */}
              <div>
                <p
                  className={`
                    text-xs font-normal transition-colors duration-300
                    ${
                      isCurrent
                        ? "text-gaming-pink"
                        : "text-gaming-textSecondary"
                    }
                  `}
                >
                  Step {step.id}
                </p>
                <p
                  className={`
                    text-base font-bold transition-colors duration-300
                    ${
                      isCurrent || isCompleted
                        ? "text-white"
                        : "text-gaming-textSecondary"
                    }
                  `}
                >
                  {step.title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
