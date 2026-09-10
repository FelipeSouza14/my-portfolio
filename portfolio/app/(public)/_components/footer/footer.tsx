import Link from "next/link";

export function Footer() {
    return (
        <footer className="py-6 text-center text-gray-500 text-sm md:text-base">
            <p>
                Todos os direitos reservados © {new Date().getFullYear()} - {" "}
                <Link href="https://github.com/FelipeSouza14" className="hover:text-rose-500 duration-300">
                    @FelipeSouza14
                </Link>
            </p>
        </footer>
    );
}