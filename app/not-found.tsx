import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="flex min-h-[70vh] items-center pt-24">
      <Container className="text-center">
        <span className="font-display text-h1 text-primary">404</span>
        <h1 className="mt-4 text-h2 text-text">Esta página não foi encontrada.</h1>
        <p className="mx-auto mt-4 max-w-md text-body text-muted">
          O conteúdo que você procura pode ter mudado de endereço. Volte para a home ou fale com a gente.
        </p>
        <div className="mt-8 flex justify-center gap-4">
          <ButtonLink href="/">Voltar para a home</ButtonLink>
          <ButtonLink href="/contato" variant="outline">
            Falar com a Lótus
          </ButtonLink>
        </div>
      </Container>
    </div>
  );
}
