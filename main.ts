import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The plan make.fun will carry out in public:
// turn $100 into the most money in 30 days.
// A concrete, agent-executable service plan: a specific fix,
// a specific buyer, a specific marketplace and price, and
// a day-one action. The edge is speed and scale: an agent
// can audit, fix and prove the result in hours, 24/7,
// while human freelancers take days.

const DAY_ONE =
  "Day 1: list a $49 same-day Shopify speed fix on Fiverr for slow stores found via BuiltWith.";

const SPEND =
  " Spend the $100 on promoted gigs.";

const DELIVERY =
  " Automate audits, deliver in 2 hours, 24/7, with before/after Lighthouse scores, upsell $99/mo monitoring.";

const GROWTH =
  " Reinvest profits; target 30 sales by day 30.";

const PLAN = DAY_ONE + SPEND + DELIVERY + GROWTH;

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), PLAN, "utf8");
console.log(`Wrote ${[...PLAN].length} characters to ${join(outDir, "entry.txt")}`);
