import { Container } from "@/content/Content";
import Link from "next/link";

export default function Header() {
    return (
        <header>
            <Container>
                <div className="flex justify-between">
                    <Link href='/'>Home</Link>

                    <nav>
                        <Link href='/docs/faq'>Docs</Link>
                    </nav>
                </div>
            </Container>
        </header>
    )
}