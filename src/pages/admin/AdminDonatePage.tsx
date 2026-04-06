import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, SaveNotice } from "@/components/admin/EditorComponents";

const AdminDonatePage = () => {
  const { content, updateContent } = useSiteContent();
  const d = content.donate;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Donate Page</h1>
      <p className="text-muted-foreground text-sm mb-6">Edit donation page content.</p>

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
