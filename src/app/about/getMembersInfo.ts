import type { Tmember } from "./type";
import members from "@/data/members";

export default async function getMembers(): Promise<Tmember[]> {
    try {
        if (!members) throw new Error("Invalid json file");
        if (members.length < 1) throw new Error("Json file cannot be empty");

        return members as Tmember[];
    }
    catch (e) {
        throw e instanceof Error ? e : new Error("Failed to load members");
    }
}
