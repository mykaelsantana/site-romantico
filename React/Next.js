import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

export default function SiteRomantico() {
  const [step, setStep] = useState(0);
  const [hearts, setHearts] = useState([]);

  const addHeart = () => {
    const newHeart = {
      id: Date.now(),
      left: Math.random() * 90,
    };
    setHearts((prev) => [...prev, newHeart]);
    setTimeout(() => {
      setHearts((prev) => prev.filter((h) => h.id !== newHeart.id));
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-200 via-rose-100 to-pink-300 flex items-center justify-center p-6 relative overflow-hidden">
      {/* FOTO DE FUNDO */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: 'url("https://condemned-green-b5agkua16a.edgeone.app/WhatsApp%20Image%202026-03-01%20at%2006.29.22.jpeg")' }}
      ></div>

      {/* CORAÇÕES */}
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          initial={{ y: 0, opacity: 1 }}
          animate={{ y: -600, opacity: 0 }}
          transition={{ duration: 3 }}
          className="absolute text-2xl"
          style={{ left: `${heart.left}%`, bottom: "0px" }}
        >
          ❤️
        </motion.div>
      ))}

      {/* MÚSICA DE FUNDO */}
      <audio autoPlay loop>
        <source src="https://www.youtube.com/watch?v=vUI2PT3rKts" type="audio/mpeg" />
        Seu navegador não suporta áudio.
      </audio>

      <Card className="w-full max-w-md shadow-2xl rounded-2xl bg-white/80 backdrop-blur-lg">
        <CardContent className="p-8 text-center space-y-6">
          {step === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h1 className="text-2xl font-bold">Oi, Maria Gabriela, meu bem 💖</h1>
              <p className="text-base">
                Eu fiz uma coisinha pra você, meu bem... porque desde o dia 23 de agosto tudo começou a mudar pra mim.
              </p>
              <Button className="rounded-2xl" onClick={() => setStep(1)}>
                Quero ver 👀
              </Button>
            </motion.div>
          )}

          {step === 1 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-semibold">Pergunta importante 😌</h2>
              <p>Você sabia que é a melhor parte do meu dia?</p>
              <div className="flex justify-center gap-4 mt-4">
                <Button className="rounded-2xl" onClick={() => setStep(2)}>
                  Sabia sim 😌
                </Button>
                <Button
                  variant="outline"
                  className="rounded-2xl"
                  onClick={() => setStep(2)}
                >
                  Agora eu sei ❤️
                </Button>
              </div>
            </motion.div>
          )}

          {step === 2 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              <h2 className="text-xl font-semibold">Motivo do site 💌</h2>
              <p>
                Não é aniversário, não é data especial... eu só quis te lembrar que desde o nosso primeiro encontro no dia 23 de agosto, e principalmente desde 5 de outubro, quando você aceitou namorar comigo, eu escolho você todos os dias.
              </p>
              <Button
                className="rounded-2xl"
                onClick={() => {
                  addHeart();
                }}
              >
                Clica aqui várias vezes ❤️
              </Button>
              <div className="mt-4">
                <Button variant="secondary" onClick={() => setStep(3)}>
                  Última coisa...
                </Button>
              </div>
            </motion.div>
          )}

          {step === 3 && (
            <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
              <h2 className="text-2xl font-bold">Eu te amo 💖</h2>
              <p>
                E se depender de mim, a gente ainda vai viver muita coisa linda juntos.
              </p>
              <p className="mt-2 italic">Ass: Seu namorado que te pediu em namoro no dia 5 de outubro e continua completamente apaixonado 😏</p>
            </motion.div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
