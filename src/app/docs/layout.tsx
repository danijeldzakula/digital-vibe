import ActiveLink from "@/components/nav-link/nav-link";
import { Container } from "@/content/Content";

export default function DocsLayout({ children }: { children: React.ReactNode }) {
    return (
      <section>
        <nav className="h-12 bg-zinc-800 grid items-center mb-6">
          <Container className="flex gap-4">
            <ActiveLink className="text-red-500" href='/docs/faq'>Faq</ActiveLink>
            <ActiveLink className="text-red-500" href='/docs/quest'>Quest</ActiveLink>
          </Container>
        </nav>
        
        {children}
      </section>
    )
  }