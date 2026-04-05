import {
  Table,
  TableHeader,
  TableBody,
  TableRow,
  TableHead,
  TableCell,
} from "@/components/ui/table";
import { ScanRunSummary } from "@/lib/types";
import { Badge } from "@/components/ui/badge";
import { FileWarning, ShieldCheck, ShieldX } from "lucide-react";

interface ScanTableProps {
  scans: ScanRunSummary[];
  isLoading: boolean;
  error: string | null;
}

export function ScanTable({ scans, isLoading, error }: ScanTableProps) {
  return (
    <div className="overflow-hidden rounded-lg border shadow-md">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-62.5">Hostname</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Hardening</TableHead>
            <TableHead>Warnings</TableHead>
            <TableHead>Timestamp</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                Loading...
              </TableCell>
            </TableRow>
          ) : error ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center text-red-500">
                {error}
              </TableCell>
            </TableRow>
          ) : scans.length === 0 ? (
            <TableRow>
              <TableCell colSpan={5} className="h-24 text-center">
                No scans found.
              </TableCell>
            </TableRow>
          ) : (
            scans.map((scan) => (
              <TableRow key={scan.id} className={!scan.success ? "bg-red-900/20" : ""}>
                <TableCell className="font-medium">{scan.hostname}</TableCell>
                <TableCell>
                  {scan.success ? (
                    <Badge variant="outline" className="text-green-400 border-green-400/50">
                      <ShieldCheck className="mr-2 h-4 w-4" />
                      Success
                    </Badge>
                  ) : (
                    <Badge variant="destructive">
                      <ShieldX className="mr-2 h-4 w-4" />
                      Failed
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  {scan.hardening_index == null ? (
                    <Badge variant="outline">N/A</Badge>
                  ) : (
                    <Badge
                      variant={
                        scan.hardening_index < 60
                          ? "destructive"
                          : scan.hardening_index < 80
                          ? "secondary"
                          : "default"
                      }
                    >
                      {scan.hardening_index}
                    </Badge>
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex items-center">
                    <FileWarning className="mr-2 h-4 w-4 text-yellow-400" />
                    {scan.warnings ?? 0}
                  </div>
                </TableCell>
                <TableCell>
                  {new Date(scan.reported_at).toLocaleString()}
                </TableCell>
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
    </div>
  );
}
