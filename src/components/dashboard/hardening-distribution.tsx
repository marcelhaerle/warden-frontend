import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { HardeningBuckets } from "@/lib/types";

interface HardeningDistributionProps {
  buckets: HardeningBuckets;
}

export function HardeningDistribution({ buckets }: HardeningDistributionProps) {
  const total = buckets.danger + buckets.medium + buckets.secure;
  const dangerPercentage = total > 0 ? (buckets.danger / total) * 100 : 0;
  const mediumPercentage = total > 0 ? (buckets.medium / total) * 100 : 0;
  const securePercentage = total > 0 ? (buckets.secure / total) * 100 : 0;

  return (
    <Card>
      <CardHeader>
        <CardTitle>Hardening Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex h-8 w-full rounded-full overflow-hidden bg-slate-200 dark:bg-slate-700">
          <div
            className="bg-red-500 h-full"
            style={{ width: `${dangerPercentage}%` }}
            title={`Danger: ${buckets.danger}`}
          />
          <div
            className="bg-yellow-500 h-full"
            style={{ width: `${mediumPercentage}%` }}
            title={`Medium: ${buckets.medium}`}
          />
          <div
            className="bg-green-500 h-full"
            style={{ width: `${securePercentage}%` }}
            title={`Secure: ${buckets.secure}`}
          />
        </div>
        <div className="mt-4 flex justify-between text-sm text-muted-foreground">
          <span>
            <span className="font-semibold text-red-500">{buckets.danger}</span>{" "}
            Danger
          </span>
          <span>
            <span className="font-semibold text-yellow-500">
              {buckets.medium}
            </span>{" "}
            Medium
          </span>
          <span>
            <span className="font-semibold text-green-500">
              {buckets.secure}
            </span>{" "}
            Secure
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
