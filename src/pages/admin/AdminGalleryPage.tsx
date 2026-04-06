import { useSiteContent } from "@/contexts/SiteContentContext";
import { Section, Field, FieldRow, ListEditor, SaveNotice, ImageUploadField, StringListEditor } from "@/components/admin/EditorComponents";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Plus, Trash2 } from "lucide-react";

const AdminGalleryPage = () => {
  const { content, updateContent } = useSiteContent();
  const g = content.gallery;

  return (
    <div>
      <h1 className="font-heading text-2xl font-bold text-foreground mb-1">Gallery Management</h1>
      <p className="text-muted-foreground text-sm mb-6">Add, edit, remove gallery images and categories.</p>

      <Section title="Page Hero">
        <Field label="Title" value={g.heroTitle} onChange={(v) => updateContent("gallery.heroTitle", v)} />
        <Field label="Subtitle" value={g.heroSubtitle} onChange={(v) => updateContent("gallery.heroSubtitle", v)} />
        <Field label="Description" value={g.heroDescription} onChange={(v) => updateContent("gallery.heroDescription", v)} multiline />
      </Section>

      <Section title="Categories" description="Filter categories for gallery images">
        <StringListEditor
          items={g.categories}
          onUpdate={(items) => updateContent("gallery.categories", items)}
          label="Categories"
          addLabel="Add Category"
        />
      </Section>

      <Section title="Gallery Images" description="Manage all gallery images. Upload new images or provide URLs.">
        <ListEditor
          items={g.images}
          onUpdate={(items) => updateContent("gallery.images", items)}
          addLabel="Add Image"
          onAdd={() => ({ src: "", alt: "", caption: "", category: ["All"] })}
          renderItem={(item, _i, update) => (
            <>
              <ImageUploadField label="Image" currentSrc={item.src} onUrlChange={(v) => update("src", v)} />
              <FieldRow>
                <Field label="Alt Text" value={item.alt} onChange={(v) => update("alt", v)} />
                <Field label="Caption" value={item.caption} onChange={(v) => update("caption", v)} />
              </FieldRow>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Categories</label>
                <div className="flex flex-wrap gap-2">
                  {g.categories.filter(c => c !== "All").map((cat) => (
                    <label key={cat} className="flex items-center gap-1.5 text-xs bg-muted/50 px-2.5 py-1.5 rounded-lg cursor-pointer">
                      <input
                        type="checkbox"
                        checked={item.category.includes(cat)}
                        onChange={(e) => {
                          const cats = e.target.checked
                            ? [...item.category, cat]
                            : item.category.filter((c: string) => c !== cat);
                          update("category", cats);
                        }}
                        className="rounded"
                      />
                      {cat}
                    </label>
                  ))}
                </div>
              </div>
            </>
          )}
        />
      </Section>

      <SaveNotice />
    </div>
  );
};

export default AdminGalleryPage;
