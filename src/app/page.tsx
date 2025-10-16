import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { admins, partnerships, forbiddenRules } from '@/lib/data';
import { Users, BookOpen, Mic, ArrowRight, ShieldBan } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground overflow-x-hidden">
      <main className="container mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-headline text-5xl md:text-7xl font-bold tracking-wider text-primary-foreground/90 animate-pulse">
            𝖩𝖺𝖼𝗄𝗌𝗈𝗇 𝖦𝗂𝗋𝗅𝗌 𝖢𝗈𝗋𝗉𝗈𝗋𝖺𝗍𝗂𝗈𝗇
          </h1>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
          <Card className="bg-card/70 border-border/50 shadow-xl backdrop-blur-sm fade-in fade-in-delay-1 opacity-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl text-accent">
                <Users className="h-6 w-6" />
                <span>𝖠𝖽𝗆'𝗌</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {admins.map((admin, index) => (
                  <li key={index} className="text-lg font-body text-foreground/80">
                    {admin}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/50 shadow-xl backdrop-blur-sm fade-in fade-in-delay-2 opacity-0">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl text-accent">
                <BookOpen className="h-6 w-6" />
                <span>Regras de apresentação</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex items-center gap-4 pt-4">
              <Mic className="h-10 w-10 text-accent/80 flex-shrink-0 animate-pulse" />
              <p className="text-lg font-body text-foreground/80">
                Mandar áudio para confirmar ser menina!
              </p>
            </CardContent>
          </Card>

          <Card className="bg-card/70 border-border/50 shadow-xl backdrop-blur-sm fade-in fade-in-delay-3 opacity-0 md:col-span-2 lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 font-headline text-2xl text-destructive">
                <ShieldBan className="h-6 w-6" />
                <span>Regras Proibidas</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="space-y-3">
                {forbiddenRules.map((rule, index) => (
                  <li key={index} className="text-lg font-body text-foreground/80">
                    ⤿ {rule}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-24 fade-in fade-in-delay-3 opacity-0">
          <div className="text-center">
            <h2 className="font-headline text-4xl font-bold tracking-wide text-accent">
              𝖯𝖺𝗋𝖼𝖾𝗋𝗂𝖺𝗌
            </h2>
            <Separator className="my-6 max-w-xs mx-auto bg-border/50" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10 max-w-6xl mx-auto">
            {partnerships.map((partner, index) => (
              <Card key={index} className="bg-card/70 border-border/50 shadow-lg hover:border-accent/70 hover:shadow-accent/10 transition-all duration-300 group backdrop-blur-sm flex flex-col pulse-glow" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardHeader className="flex-grow">
                  <CardTitle className="font-body text-xl text-foreground/90">{partner.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <Button asChild className="w-full bg-accent text-accent-foreground hover:bg-accent/80 transition-colors">
                    <a href={partner.url} target="_blank" rel="noopener noreferrer">
                      Visitar
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

      </main>
      <footer className="py-8 text-center">
        <p className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Jackson Girls Corporation.</p>
      </footer>
    </div>
  );
}
