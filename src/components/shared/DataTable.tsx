import { useIsMobile } from "@/hooks/use-mobile";
import { Badge } from "@/components/ui/badge";

interface Column {
  key: string;
  label: string;
  render?: (value: any, row: any) => React.ReactNode;
}

interface DataTableProps {
  columns: Column[];
  data: any[];
  title: string;
}

const statusVariant = (status: string) => {
  switch (status) {
    case "Active":
    case "Completed":
      return "default" as const;
    case "Pending":
    case "Processing":
      return "secondary" as const;
    case "Inactive":
    case "Cancelled":
      return "destructive" as const;
    default:
      return "outline" as const;
  }
};

const DataTable = ({ columns, data, title }: DataTableProps) => {
  const isMobile = useIsMobile();

  if (data.length === 0) {
    return (
      <div className="rounded-xl border border-border bg-card p-8 text-center shadow-sm">
        <p className="text-muted-foreground">No {title.toLowerCase()} found.</p>
      </div>
    );
  }

  if (isMobile) {
    return (
      <div className="space-y-3">
        {data.map((row, i) => (
          <div key={i} className="rounded-xl border border-border bg-card p-4 shadow-sm space-y-2">
            {columns.map((col) => (
              <div key={col.key} className="flex items-center justify-between">
                <span className="text-xs font-medium text-muted-foreground">{col.label}</span>
                <span className="text-sm text-card-foreground">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="rounded-xl border border-border bg-card shadow-sm overflow-hidden">
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-border bg-muted/50">
            {columns.map((col) => (
              <th key={col.key} className="px-4 py-3 text-left font-medium text-muted-foreground">
                {col.label}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i} className="border-b border-border last:border-0 hover:bg-muted/30 transition-colors">
              {columns.map((col) => (
                <td key={col.key} className="px-4 py-3 text-card-foreground">
                  {col.render ? col.render(row[col.key], row) : row[col.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export { DataTable, statusVariant };
