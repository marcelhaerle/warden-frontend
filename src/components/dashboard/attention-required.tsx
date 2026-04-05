import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { AttentionHost } from "@/lib/types";

interface AttentionRequiredProps {
  hosts: AttentionHost[];
}

export function AttentionRequired({ hosts }: AttentionRequiredProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Attention Required</CardTitle>
        <CardDescription>
          Top 10 hosts that need intervention based on their hardening index.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Hostname</TableHead>
              <TableHead className="text-right">Hardening Index</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {hosts.map((host) => (
              <TableRow key={host.hostname}>
                <TableCell className="font-medium">{host.hostname}</TableCell>
                <TableCell className="text-right">
                  {host.last_score}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
