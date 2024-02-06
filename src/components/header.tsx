import { Container } from "@/content/Content";
import Link from "next/link";

export default function Header() {
    return (
        <header className="py-4 bg-neutral-200">
            <Container className="flex justify-between">
                <Link href='/'>Home</Link>
                
                <nav className="flex gap-4">
                    <Link href='/'>Home</Link>
                    <Link href='/contact'>Contact</Link>
                </nav>
            </Container>
        </header>
    )
}