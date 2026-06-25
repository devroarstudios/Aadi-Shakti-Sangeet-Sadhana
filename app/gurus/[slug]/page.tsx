import { teamMembers } from "@/data/team";
import { notFound } from "next/navigation";

export default async function GuruPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {

  const { slug } = await params;

  const guru = teamMembers.find(
    member => member.slug === slug
  );

  if (!guru) {
    return notFound();
  }

  return (
    <section className="guru-page">
      <div className="guru-container">

        <div className="guru-image">
          <img
            src={guru.image}
            alt={guru.name}
          />
        </div>

        <div className="guru-content">
          <h1>{guru.name}</h1>
          <h3>{guru.role}</h3>
          <div>{guru.roleHindi}</div>

          <p>{guru.fullBio}</p>
        </div>

      </div>
    </section>
  );
}