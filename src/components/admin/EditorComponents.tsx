import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Trash2, Plus, GripVertical } from "lucide-react";
import type { ReactNode } from "react";

export function Section({ title, description, children }: { title: string; description?: string; children: ReactNode }) {
  return (
    <div className="bg-card rounded-xl border border-border p-6 mb-6">
      <h2 className="font-heading text-lg font-bold text-foreground mb-1">{title}</h2>
      {description && <p className="text-muted-foreground text-xs mb-4">{description}</p>}
      <div className="space-y-4">{children}</div>
    </div>
  );
}

export function Field({ label, value, onChange, type = "text", placeholder, multiline, rows }: {
  label: string; value: string; onChange: (v: string) => void; type?: string; placeholder?: string; multiline?: boolean; rows?: number;
}) {
  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
      {multiline ? (
        <Textarea value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} rows={rows || 3} className="rounded-lg text-sm" />
      ) : (
        <Input type={type} value={value} onChange={(e) => onChange(e.target.value)} placeholder={placeholder} className="rounded-lg text-sm" />
      )}
    </div>
  );
}

export function FieldRow({ children }: { children: ReactNode }) {
  return <div className="grid grid-cols-2 gap-4">{children}</div>;
}

export function ListEditor({ items, onUpdate, renderItem, onAdd, addLabel = "Add Item" }: {
  items: any[];
  onUpdate: (items: any[]) => void;
  renderItem: (item: any, index: number, update: (field: string, value: any) => void) => ReactNode;
  onAdd: () => any;
  addLabel?: string;
}) {
  const updateItem = (index: number, field: string, value: any) => {
    const updated = [...items];
    updated[index] = { ...updated[index], [field]: value };
    onUpdate(updated);
  };

  const removeItem = (index: number) => {
    onUpdate(items.filter((_, i) => i !== index));
  };

  const addItem = () => {
    onUpdate([...items, onAdd()]);
  };

  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="bg-muted/50 rounded-lg p-4 relative group">
          <div className="flex items-start gap-2">
            <GripVertical className="h-4 w-4 text-muted-foreground mt-2 shrink-0" />
            <div className="flex-1 space-y-3">
              {renderItem(item, i, (field, value) => updateItem(i, field, value))}
            </div>
            <button
              onClick={() => removeItem(i)}
              className="text-muted-foreground hover:text-destructive transition-colors p-1"
              title="Remove"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        </div>
      ))}
      <Button variant="outline" size="sm" onClick={addItem} className="gap-1 text-xs">
        <Plus className="h-3.5 w-3.5" />
        {addLabel}
      </Button>
    </div>
  );
}

export function ImageUploadField({ label, currentSrc, onUrlChange }: {
  label: string; currentSrc: string; onUrlChange: (url: string) => void;
}) {
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      onUrlChange(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div>
      <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>
      {currentSrc && (
        <div className="mb-2 relative w-32 h-20 rounded-lg overflow-hidden border border-border">
          <img src={currentSrc} alt="Preview" className="w-full h-full object-cover" />
          <button
            onClick={() => onUrlChange("")}
            className="absolute top-1 right-1 bg-destructive/90 text-destructive-foreground rounded-full p-0.5"
          >
            <Trash2 className="h-3 w-3" />
          </button>
        </div>
      )}
      <div className="flex gap-2">
        <label className="cursor-pointer bg-muted hover:bg-muted/80 text-foreground text-xs px-3 py-2 rounded-lg border border-border transition-colors">
          Upload Image
          <input type="file" accept="image/*" onChange={handleFileChange} className="hidden" />
        </label>
        <Input
          type="url"
          placeholder="Or paste image URL..."
          value={currentSrc?.startsWith("data:") ? "" : currentSrc}
          onChange={(e) => onUrlChange(e.target.value)}
          className="rounded-lg text-xs flex-1"
        />
      </div>
    </div>
  );
}

export function StringListEditor({ items, onUpdate, label, addLabel = "Add" }: {
  items: string[]; onUpdate: (items: string[]) => void; label?: string; addLabel?: string;
}) {
  return (
    <div>
      {label && <label className="text-sm font-medium text-foreground mb-1.5 block">{label}</label>}
      <div className="space-y-2">
        {items.map((item, i) => (
          <div key={i} className="flex gap-2">
            <Input
              value={item}
              onChange={(e) => {
                const updated = [...items];
                updated[i] = e.target.value;
                onUpdate(updated);
              }}
              className="rounded-lg text-sm flex-1"
            />
            <button
              onClick={() => onUpdate(items.filter((_, idx) => idx !== i))}
              className="text-muted-foreground hover:text-destructive p-1"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </div>
        ))}
        <Button variant="outline" size="sm" onClick={() => onUpdate([...items, ""])} className="gap-1 text-xs">
          <Plus className="h-3.5 w-3.5" />
          {addLabel}
        </Button>
      </div>
    </div>
  );
}

export function SaveNotice() {
  return (
    <p className="text-xs text-muted-foreground italic">
      Changes save automatically to local storage.
    </p>
  );
}
