import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, ImageUploadField } from "@/components/admin/EditorComponents";

const AdminNewsPage = () => {
  const { content, updateContent } = useSiteContent();
  const n = content.news;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground mb-1">News & Stories</h1>
      <p className="text-muted-foreground text-sm mb-6">Edit news articles and stories.</p>

      <Section title="Page Header">
        <Field label="Title" value={n.title} onChange={(v) => updateContent("news.title", v)} />
        <Field label="Description" value={n.description} onChange={(v) => updateContent("news.description", v)} multiline />
      </Section>

      <Section title="Stories" description="Add, edit, or remove news stories">
        <ListEditor
          items={n.stories}
          onUpdate={(items) => updateContent("news.stories", items)}
          addLabel="Add Story"
          onAdd={() => ({ title: "", excerpt: "", image: "", date: "" })}
          renderItem={(item, _i, update) => (
            <>
              <Field label="Title" value={item.title} onChange={(v) => update("title", v)} />
              <Field label="Excerpt" value={item.excerpt} onChange={(v) => update("excerpt", v)} multiline />
              <FieldRow>
                <Field label="Date" value={item.date} onChange={(v) => update("date", v)} placeholder="e.g. March 2026" />
                <ImageUploadField label="Image" currentSrc={item.image} onUrlChange={(v) => update("image", v)} />
              </FieldRow>
            </>
          )}
        />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminNewsPage;
