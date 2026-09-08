
interface SectionHeaderProps {
    title: string;
    description?: string;
}

export function SectionHeader({ title, description } : SectionHeaderProps ) {
    return(
        <div className="flex flex-col justify-center items-center w-full p-4 text-white gap-3">
            <h2 className="text-5xl font-extrabold">{title}</h2>
            <p className="text-xl text-zinc-400">{description}</p>
        </div>
    )
}