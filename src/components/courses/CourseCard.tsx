import Link from "next/link";
import { Course } from "@/data/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Link href={`/courses/${course.slug}`}>
      <div className="group cursor-pointer rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl">

        <h2 className="text-2xl font-bold text-gray-900">
          {course.title}
        </h2>

        <p className="mt-1 text-lg text-red-600">
          {course.hindi}
        </p>

        <p className="mt-4 text-gray-600 leading-7">
          {course.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-2">
          {course.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-red-100 px-3 py-1 text-sm font-medium text-red-700"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="mt-6 flex justify-start">
  <div className="course-readmore">
  <button className="inline-flex items-center justify-center border border-[#C8102E] px-6 py-3 text-sm font-bold tracking-[2px] text-[#C8102E] transition duration-300 hover:bg-[#C8102E] hover:text-white">
    READ MORE
  </button>
</div>
</div>

      </div>
    </Link>
  );
}