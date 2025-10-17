export function ResumePreview({
    templateId,
    progress,
}: {
    templateId: string | null
    progress: number
}) {
    const templateImages: Record<string, string> = {
        "1": "/templates/professional.png",
        "2": "/modern-resume-template-with-photo-and-clean-design.jpg",
        "3": "/dark-professional-resume-template-with-sidebar.jpg",
        "4": "/creative-resume-template-with-photo-and-modern-lay.jpg",
        "5": "/professional-nursing-resume-template.jpg",
        "6": "/minimalist-resume-template-with-clean-typography.jpg",
    }

    const imageSrc = templateId
        ? templateImages[templateId]
        : "/templates/default.png"

    return (
        <div className="border rounded-lg shadow p-2 flex flex-col items-center">
            {/* Progress bar */}
            <div className="w-full mb-3">
                <div className="w-full h-2 bg-[#cccccc] rounded-full">
                    <div
                        className="h-2 bg-[#4679b5] rounded-full transition-all duration-300"
                        style={{ width: `${progress}%` }}
                    ></div>
                </div>
                <span className="text-sm text-[#737791] block text-right mt-1">
                    {Math.round(progress)}%
                </span>
            </div>

            {/* Resume Image */}
            <div className="flex-1 flex justify-center items-center w-full">
                <img
                    src={imageSrc}
                    alt="Resume Preview"
                    className="w-full h-auto rounded-md"
                />
            </div>
        </div>
    )
}
