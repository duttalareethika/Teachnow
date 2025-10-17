import { ResourceCard } from "@/components/Home/resource-cardT"

const resources = [
  {
    id: 1,
    title: "Epiphany Activity - Feast of the Three Kings Wisemen...",
    image: "/three-wise-men-nativity-scene-with-camels-and-dese.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 2,
    title: "Winter Student Shout Out Tags Positive Note Home...",
    image: "/hello-winter-decorative-text-with-snowflakes.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 3,
    title: "Teaching Theme Activities Aesop's Fables Finding...",
    image: "/teacher-helping-student-with-reading.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 4,
    title: "3 Sounds of ed Worksheets and Sorts Inflectional...",
    image: "/phonics-worksheet-with-pictures-and-words.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 5,
    title: "New Years 2026 Writing Resolutions Activities New...",
    image: "/new-year-writing-activity-with-cartoon-character.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 6,
    title: "New Year's 2025 Gallery Walk After Winter Break...",
    image: "/students-writing-and-studying-together.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 7,
    title: "2025 Bingo New Year's Goal Setting Reflection Activity...",
    image: "/colorful-bingo-game-board-with-numbers.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 8,
    title: "Literary Analysis Essay, Introduction to Lit...",
    image: "/hands-writing-on-paper-with-pen.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 9,
    title: "WIDA Access Practice Test: ESL Assessments, Speaking",
    image: "/professional-man-in-glasses-smiling.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 10,
    title: "Plate Tectonics Activity: Types of Plate Boundaries",
    image: "/geological-layers-diagram-with-earth-cross-section.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 11,
    title: "Real World: Solving Systems of Equations Word Problems",
    image: "/student-at-chalkboard-solving-math-equations.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
  {
    id: 12,
    title: "Human Body Systems Webquest",
    image: "/colorful-human-body-systems-infographic.jpg",
    author: "Jennifer Findlay",
    authorAvatar: "/female-teacher-profile.jpg",
  },
]

export function ResourcesGrid() {
  return (
    <section className="py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </div>
    </section>
  )
}
