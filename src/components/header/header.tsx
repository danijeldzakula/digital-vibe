import { Container } from "@/content/Content";
import ActiveLink from "../nav-link/nav-link";
import Link from "next/link";

export default function Header() {
    return (
        <header className="h-16 grid items-center">
            <Container>
                <div className="flex justify-between">
                    <Link href='/'>Home</Link>

                    <nav>
                        <ActiveLink href='/docs/faq'>Docs</ActiveLink>
                    </nav>
                </div>
            </Container>
        </header>
    )
}