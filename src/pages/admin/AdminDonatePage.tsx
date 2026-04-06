import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, SaveNotice } from "@/components/admin/EditorComponents";

const AdminDonatePage = () => {
  const { content, updateContent } = useSiteContent();
  const d = content.donate;

  return (
    <div>
      <div className="mb-5">
        <h1 className="font-heading text-xl sm:text-2xl font-bold text-foreground">Donate Page</h1>
        <p className="text-muted-foreground text-xs sm:text-sm mt-0.5">Edit donation page content.</p>
      </div>

      <Section title="Hero Section">
        <Field label="Title" value={d.title} onChange={(v) => updateContent("donate.title", v)} />
        <Field label="Description" value={d.description} onChange={(v) => updateContent("donate.description", v)} multiline />
      </Section>

      <Section title="Donation Card">
        <Field label="Card Title" value={d.cardTitle} onChange={(v) => updateContent("donate.cardTitle", v)} />
        <Field label="Card Description" value={d.cardDescription} onChange={(v) => updateContent("donate.cardDescription", v)} multiline />
        <FieldRow>
          <Field label="Contact Email" value={d.contactEmail} onChange={(v) => updateContent("donate.contactEmail", v)} />
          <Field label="Partnership Email" value={d.partnershipEmail} onChange={(v) => updateContent("donate.partnershipEmail", v)} />
        </FieldRow>
        <Field label="Phone" value={d.phone} onChange={(v) => updateContent("donate.phone", v)} />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminDonatePage;
