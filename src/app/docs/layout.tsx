import { Container } from "@/content/Content";
import Link from "next/link";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
      <section>
        <Container>
          <nav>
            <Link href='/docs/faq'>Faq</Link>
            <Link href='/docs/quest'>Quest</Link>
          </nav>
        </Container>
        
        {children}
      </section>
    )
  }