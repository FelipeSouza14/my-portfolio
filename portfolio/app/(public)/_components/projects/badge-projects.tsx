import { Badge } from "@/components/ui/badge"
import { CodeXml } from "lucide-react"

interface BadgeProjectsProps {
    type: "Web" | "Mobile";
}

export function BadgeProjects({ type } : BadgeProjectsProps) {
    return(
        <Badge variant="outline" className="text-sm px-3 py-4 border-zinc-600 font-semibold text-zinc-300 gap-2">
            <CodeXml size={15}/>
            Aplicação Web
        </Badge>
    )
}