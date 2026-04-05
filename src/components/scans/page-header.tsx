import { Input } from "@/components/ui/input";

interface PageHeaderProps {
  hostnameFilter: string;
  onHostnameFilterChange: (value: string) => void;
}

export function PageHeader({ hostnameFilter, onHostnameFilterChange }: PageHeaderProps) {
  return (
    <header className="flex items-center justify-between">
      <h1 className="text-3xl font-bold tracking-tight">Scan History</h1>
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Filter by hostname..."
          value={hostnameFilter}
          onChange={(e) => onHostnameFilterChange(e.target.value)}
          className="max-w-sm"
        />
      </div>
    </header>
  );
}
